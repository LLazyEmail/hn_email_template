import { FooterFactory, settings, FooterHTMLString } from '../src/display/displayFooter';

describe('displayFooter - exported settings object', () => {
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

  test('settings params contains address', () => {
    expect(settings.params).toHaveProperty('address');
    expect(typeof settings.params.address).toBe('string');
  });

  test('settings params contains sponsor', () => {
    expect(settings.params).toHaveProperty('sponsor');
    expect(typeof settings.params.sponsor).toBe('string');
  });

  test('settings params contains copyright', () => {
    expect(settings.params).toHaveProperty('copyright');
    expect(typeof settings.params.copyright).toBe('string');
  });

  test('settings params contains unsubscribe', () => {
    expect(settings.params).toHaveProperty('unsubscribe');
    expect(typeof settings.params.unsubscribe).toBe('string');
  });
});

describe('displayFooter - FooterFactory', () => {
  test('FooterFactory is defined', () => {
    expect(FooterFactory).toBeDefined();
  });

  test('FooterFactory has a create method', () => {
    expect(typeof FooterFactory.create).toBe('function');
  });

  test('FooterFactory.create returns a string when called with valid settings', () => {
    const result = FooterFactory.create(settings);
    expect(typeof result).toBe('string');
  });

  test('FooterFactory.create output contains the address from settings', () => {
    const result = FooterFactory.create(settings);
    expect(result).toContain(settings.params.address);
  });
});

describe('displayFooter - FooterHTMLString', () => {
  test('FooterHTMLString is defined', () => {
    expect(FooterHTMLString).toBeDefined();
  });

  test('FooterHTMLString is a string', () => {
    expect(typeof FooterHTMLString).toBe('string');
  });

  test('FooterHTMLString is non-empty', () => {
    expect(FooterHTMLString.length).toBeGreaterThan(0);
  });

  test('FooterHTMLString contains the address from settings', () => {
    expect(FooterHTMLString).toContain(settings.params.address);
  });

  test('FooterHTMLString contains the sponsor from settings', () => {
    expect(FooterHTMLString).toContain(settings.params.sponsor);
  });

  test('FooterHTMLString contains the unsubscribe from settings', () => {
    expect(FooterHTMLString).toContain(settings.params.unsubscribe);
  });

  test('FooterHTMLString contains a <table> element (email table layout)', () => {
    expect(FooterHTMLString).toContain('<table');
  });
});
