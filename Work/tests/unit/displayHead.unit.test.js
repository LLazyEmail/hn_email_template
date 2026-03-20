import { displayHead, settings, HeadHTMLString } from '../../src/display/displayHead';

describe('displayHead function', () => {
  test('displayHead is a function', () => {
    expect(typeof displayHead).toBe('function');
  });

  test('displayHead() returns a string', () => {
    expect(typeof displayHead()).toBe('string');
  });

  test('displayHead() output is non-empty', () => {
    expect(displayHead().length).toBeGreaterThan(0);
  });

  test('displayHead() output contains a <head> element', () => {
    expect(displayHead()).toContain('<head>');
  });

  test('displayHead() includes the default title', () => {
    expect(displayHead()).toContain('The Secrets of High-Performing DevOps teams');
  });

  test('displayHead() with custom title includes it in output', () => {
    const result = displayHead({ title: 'My Custom Title' });
    expect(result).toContain('My Custom Title');
  });

  test('displayHead() throws for null title', () => {
    expect(() => displayHead({ title: null })).toThrow(
      '[displayHead] missing required field: title'
    );
  });

  test('displayHead() throws for empty string title', () => {
    expect(() => displayHead({ title: '' })).toThrow(
      '[displayHead] missing required field: title'
    );
  });
});

describe('displayHead - settings (backward compat)', () => {
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

  test('settings.params contains title', () => {
    expect(settings.params).toHaveProperty('title');
    expect(typeof settings.params.title).toBe('string');
  });

  test('settings.params contains headStyles', () => {
    expect(settings.params).toHaveProperty('headStyles');
    expect(typeof settings.params.headStyles).toBe('string');
  });

  test('settings.params contains fonts', () => {
    expect(settings.params).toHaveProperty('fonts');
    expect(typeof settings.params.fonts).toBe('string');
  });
});

describe('displayHead - HeadHTMLString', () => {
  test('HeadHTMLString is defined', () => {
    expect(HeadHTMLString).toBeDefined();
  });

  test('HeadHTMLString is a string', () => {
    expect(typeof HeadHTMLString).toBe('string');
  });

  test('HeadHTMLString is non-empty', () => {
    expect(HeadHTMLString.length).toBeGreaterThan(0);
  });

  test('HeadHTMLString contains the default title', () => {
    expect(HeadHTMLString).toContain('The Secrets of High-Performing DevOps teams');
  });

  test('HeadHTMLString contains a <head> element', () => {
    expect(HeadHTMLString).toContain('<head>');
  });

  test('HeadHTMLString equals displayHead() output', () => {
    expect(HeadHTMLString).toBe(displayHead());
  });
});
