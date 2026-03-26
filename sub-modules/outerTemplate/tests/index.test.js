import outerTemplate from '../src/index';

describe('outerTemplate scaffold', () => {
  test('exports component placeholders object', () => {
    expect(typeof outerTemplate).toBe('object');
    expect(outerTemplate).not.toBeNull();
    expect(outerTemplate).toHaveProperty('bodyComponent');
    expect(outerTemplate).toHaveProperty('headComponent');
    expect(outerTemplate).toHaveProperty('mainComponent');
    expect(outerTemplate).toHaveProperty('footerComponent');
    expect(typeof outerTemplate.bodyComponent).toBe('function');
    expect(typeof outerTemplate.headComponent).toBe('function');
    expect(typeof outerTemplate.mainComponent).toBe('function');
    expect(typeof outerTemplate.footerComponent).toBe('function');
  });

  test('placeholder components return empty strings', () => {
    expect(outerTemplate.bodyComponent({})).toBe('');
    expect(outerTemplate.headComponent({})).toBe('');
    expect(outerTemplate.mainComponent({})).toBe('');
    expect(outerTemplate.footerComponent({})).toBe('');
  });
});
