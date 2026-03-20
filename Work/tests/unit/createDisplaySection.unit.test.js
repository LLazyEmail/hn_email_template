import { createDisplaySection } from '../../src/display/createDisplaySection';

const mockRender = jest.fn((params) => `<html>${JSON.stringify(params)}</html>`);

beforeEach(() => {
  mockRender.mockClear();
});

describe('createDisplaySection - return value', () => {
  test('returns a function', () => {
    const section = createDisplaySection({ sectionName: 'test', render: mockRender });
    expect(typeof section).toBe('function');
  });
});

describe('createDisplaySection - success path', () => {
  test('calls render with the normalized input', () => {
    const section = createDisplaySection({ sectionName: 'test', render: mockRender });
    section({ foo: 'bar' });
    expect(mockRender).toHaveBeenCalledWith({ foo: 'bar' });
  });

  test('returns the output of render', () => {
    const section = createDisplaySection({ sectionName: 'test', render: mockRender });
    const result = section({ key: 'value' });
    expect(result).toBe('<html>{"key":"value"}</html>');
  });

  test('works with no input (empty call)', () => {
    const section = createDisplaySection({
      sectionName: 'test',
      defaults: { x: 'default' },
      render: mockRender,
    });
    section();
    expect(mockRender).toHaveBeenCalledWith({ x: 'default' });
  });
});

describe('createDisplaySection - defaults merge', () => {
  test('merges defaults with input (input overrides defaults)', () => {
    const section = createDisplaySection({
      sectionName: 'test',
      defaults: { a: 'default-a', b: 'default-b' },
      render: mockRender,
    });
    section({ a: 'override-a' });
    expect(mockRender).toHaveBeenCalledWith({ a: 'override-a', b: 'default-b' });
  });

  test('uses all defaults when no input is provided', () => {
    const section = createDisplaySection({
      sectionName: 'test',
      defaults: { x: '1', y: '2' },
      render: mockRender,
    });
    section();
    expect(mockRender).toHaveBeenCalledWith({ x: '1', y: '2' });
  });

  test('input fields not in defaults are preserved', () => {
    const section = createDisplaySection({
      sectionName: 'test',
      defaults: {},
      render: mockRender,
    });
    section({ extra: 'value' });
    expect(mockRender).toHaveBeenCalledWith({ extra: 'value' });
  });
});

describe('createDisplaySection - required fields validation', () => {
  test('throws for missing required field (undefined)', () => {
    const section = createDisplaySection({
      sectionName: 'mySection',
      requiredFields: ['title'],
      render: mockRender,
    });
    expect(() => section({})).toThrow('[mySection] missing required field: title');
  });

  test('throws for null required field', () => {
    const section = createDisplaySection({
      sectionName: 'mySection',
      requiredFields: ['title'],
      defaults: { title: null },
      render: mockRender,
    });
    expect(() => section()).toThrow('[mySection] missing required field: title');
  });

  test('throws for empty string required field', () => {
    const section = createDisplaySection({
      sectionName: 'mySection',
      requiredFields: ['title'],
      defaults: { title: '' },
      render: mockRender,
    });
    expect(() => section()).toThrow('[mySection] missing required field: title');
  });

  test('error message includes section name and field name', () => {
    const section = createDisplaySection({
      sectionName: 'footerSection',
      requiredFields: ['address'],
      render: mockRender,
    });
    expect(() => section({})).toThrow('[footerSection] missing required field: address');
  });

  test('validates multiple required fields and throws on first missing', () => {
    const section = createDisplaySection({
      sectionName: 'test',
      requiredFields: ['a', 'b', 'c'],
      render: mockRender,
    });
    expect(() => section({ b: 'present', c: 'present' })).toThrow(
      '[test] missing required field: a'
    );
  });

  test('does not throw when all required fields are present via defaults', () => {
    const section = createDisplaySection({
      sectionName: 'test',
      requiredFields: ['title'],
      defaults: { title: 'Default Title' },
      render: mockRender,
    });
    expect(() => section()).not.toThrow();
  });

  test('does not throw when required field is provided via input', () => {
    const section = createDisplaySection({
      sectionName: 'test',
      requiredFields: ['title'],
      render: mockRender,
    });
    expect(() => section({ title: 'My Title' })).not.toThrow();
  });
});

describe('createDisplaySection - mapToFactorySettings', () => {
  test('applies mapToFactorySettings before calling render', () => {
    const mapFn = jest.fn(({ raw }) => ({ processed: raw.toUpperCase() }));
    const section = createDisplaySection({
      sectionName: 'test',
      mapToFactorySettings: mapFn,
      render: mockRender,
    });
    section({ raw: 'hello' });
    expect(mapFn).toHaveBeenCalledWith({ raw: 'hello' });
    expect(mockRender).toHaveBeenCalledWith({ processed: 'HELLO' });
  });

  test('skips mapToFactorySettings when not provided', () => {
    const section = createDisplaySection({
      sectionName: 'test',
      render: mockRender,
    });
    section({ key: 'value' });
    expect(mockRender).toHaveBeenCalledWith({ key: 'value' });
  });
});

describe('createDisplaySection - postProcess stage', () => {
  test('calls postProcess with the rendered HTML when provided', () => {
    const mockPost = jest.fn((html) => html + '<!-- post -->');
    const section = createDisplaySection({
      sectionName: 'test',
      render: mockRender,
      postProcess: mockPost,
    });
    section({ key: 'val' });
    expect(mockPost).toHaveBeenCalledWith('<html>{"key":"val"}</html>');
  });

  test('returns the postProcess output as the final result', () => {
    const section = createDisplaySection({
      sectionName: 'test',
      render: mockRender,
      postProcess: (html) => html.trim().toUpperCase(),
    });
    const result = section({ key: 'val' });
    expect(result).toBe('<HTML>{"KEY":"VAL"}</HTML>');
  });

  test('skips postProcess when not provided', () => {
    const section = createDisplaySection({
      sectionName: 'test',
      render: mockRender,
    });
    const result = section({ key: 'val' });
    expect(result).toBe('<html>{"key":"val"}</html>');
  });
});

describe('createDisplaySection - pipeline error metadata', () => {
  test('enriches validation errors with pipelineStage "validate"', () => {
    const section = createDisplaySection({
      sectionName: 'mySection',
      requiredFields: ['title'],
      render: mockRender,
    });
    let caught;
    try { section({}); } catch (e) { caught = e; }
    expect(caught.pipelineStage).toBe('validate');
  });

  test('enriches validation errors with pipelineSection matching sectionName', () => {
    const section = createDisplaySection({
      sectionName: 'mySection',
      requiredFields: ['title'],
      render: mockRender,
    });
    let caught;
    try { section({}); } catch (e) { caught = e; }
    expect(caught.pipelineSection).toBe('mySection');
  });

  test('error message is unchanged by pipeline metadata enrichment', () => {
    const section = createDisplaySection({
      sectionName: 'footerSection',
      requiredFields: ['address'],
      render: mockRender,
    });
    expect(() => section({})).toThrow('[footerSection] missing required field: address');
  });
});
