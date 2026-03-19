import headStylesComponent from '../src/components/headStyles';

describe('headStylesComponent - output validation', () => {
  test('returns a string', () => {
    const result = headStylesComponent();
    expect(typeof result).toBe('string');
  });

  test('returns a non-empty string', () => {
    const result = headStylesComponent();
    expect(result.length).toBeGreaterThan(0);
  });

  test('returned string contains a <style> tag', () => {
    const result = headStylesComponent();
    expect(result).toContain('<style');
    expect(result).toContain('</style>');
  });

  test('returned string contains type="text/css"', () => {
    const result = headStylesComponent();
    expect(result).toContain('type="text/css"');
  });

  test('returns the same value on repeated calls (pure function)', () => {
    const result1 = headStylesComponent();
    const result2 = headStylesComponent();
    expect(result1).toBe(result2);
  });

  test('contains responsive media query for small screens', () => {
    const result = headStylesComponent();
    expect(result).toContain('@media');
    expect(result).toContain('480px');
  });
});
