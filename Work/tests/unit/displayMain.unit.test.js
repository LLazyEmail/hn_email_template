import { displayMain, settings, MainHTMLString } from '../../src/display/displayMain';

describe('displayMain function', () => {
  test('displayMain is a function', () => {
    expect(typeof displayMain).toBe('function');
  });

  test('displayMain() returns a string', () => {
    expect(typeof displayMain()).toBe('string');
  });

  test('displayMain() output is non-empty', () => {
    expect(displayMain().length).toBeGreaterThan(0);
  });

  test('displayMain() output contains DOCTYPE declaration', () => {
    expect(displayMain()).toContain('<!DOCTYPE html>');
  });

  test('displayMain() throws for null head', () => {
    expect(() => displayMain({ head: null })).toThrow(
      '[displayMain] missing required field: head'
    );
  });

  test('displayMain() throws for empty string body', () => {
    expect(() => displayMain({ body: '' })).toThrow(
      '[displayMain] missing required field: body'
    );
  });

  test('displayMain() with custom head and body includes them', () => {
    const result = displayMain({
      head: '<head><title>Test</title></head>',
      body: '<body>Test Body</body>',
    });
    expect(result).toContain('<title>Test</title>');
    expect(result).toContain('Test Body');
  });
});

describe('displayMain - settings (backward compat)', () => {
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

  test('settings.params contains head', () => {
    expect(settings.params).toHaveProperty('head');
    expect(typeof settings.params.head).toBe('string');
  });

  test('settings.params contains body', () => {
    expect(settings.params).toHaveProperty('body');
    expect(typeof settings.params.body).toBe('string');
  });
});

describe('displayMain - MainHTMLString', () => {
  test('MainHTMLString is defined', () => {
    expect(MainHTMLString).toBeDefined();
  });

  test('MainHTMLString is a string', () => {
    expect(typeof MainHTMLString).toBe('string');
  });

  test('MainHTMLString is non-empty', () => {
    expect(MainHTMLString.length).toBeGreaterThan(0);
  });

  test('MainHTMLString contains DOCTYPE declaration', () => {
    expect(MainHTMLString).toContain('<!DOCTYPE html>');
  });

  test('MainHTMLString equals displayMain() output', () => {
    expect(MainHTMLString).toBe(displayMain());
  });
});
