import { displayBody, settings, BodyHTMLString } from '../../src/display/displayBody';

describe('displayBody function', () => {
  test('displayBody is a function', () => {
    expect(typeof displayBody).toBe('function');
  });

  test('displayBody() returns a string', () => {
    expect(typeof displayBody()).toBe('string');
  });

  test('displayBody() output is non-empty', () => {
    expect(displayBody().length).toBeGreaterThan(0);
  });

  test('displayBody() output contains a <body> element', () => {
    expect(displayBody()).toContain('<body');
  });

  test('displayBody() throws for null footer', () => {
    expect(() => displayBody({ footer: null })).toThrow(
      '[displayBody] missing required field: footer'
    );
  });

  test('displayBody() throws for empty string footer', () => {
    expect(() => displayBody({ footer: '' })).toThrow(
      '[displayBody] missing required field: footer'
    );
  });

  test('displayBody() with custom footer content includes it', () => {
    const customFooter = '<footer>Custom Footer</footer>';
    const result = displayBody({ footer: customFooter });
    expect(result).toContain('Custom Footer');
  });
});

describe('displayBody - settings (backward compat)', () => {
  test('settings is defined', () => {
    expect(settings).toBeDefined();
  });

  test('settings has a component property', () => {
    expect(settings).toHaveProperty('component');
  });

  test('settings component is a function', () => {
    expect(typeof settings.component).toBe('function');
  });

  test('settings has a params property', () => {
    expect(settings).toHaveProperty('params');
  });

  test('settings.params contains footer', () => {
    expect(settings.params).toHaveProperty('footer');
    expect(typeof settings.params.footer).toBe('string');
  });

  test('settings.params contains logoTop', () => {
    expect(settings.params).toHaveProperty('logoTop');
    expect(typeof settings.params.logoTop).toBe('string');
  });

  test('settings.params contains logoBottom', () => {
    expect(settings.params).toHaveProperty('logoBottom');
    expect(typeof settings.params.logoBottom).toBe('string');
  });

  test('settings.params contains content', () => {
    expect(settings.params).toHaveProperty('content');
    expect(typeof settings.params.content).toBe('string');
  });

  test('settings.params contains previewText', () => {
    expect(settings.params).toHaveProperty('previewText');
    expect(typeof settings.params.previewText).toBe('string');
  });
});

describe('displayBody - BodyHTMLString', () => {
  test('BodyHTMLString is defined', () => {
    expect(BodyHTMLString).toBeDefined();
  });

  test('BodyHTMLString is a string', () => {
    expect(typeof BodyHTMLString).toBe('string');
  });

  test('BodyHTMLString is non-empty', () => {
    expect(BodyHTMLString.length).toBeGreaterThan(0);
  });

  test('BodyHTMLString contains a <body> element', () => {
    expect(BodyHTMLString).toContain('<body');
  });

  test('BodyHTMLString equals displayBody() output', () => {
    expect(BodyHTMLString).toBe(displayBody());
  });
});
