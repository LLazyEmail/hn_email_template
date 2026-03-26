import outerTemplate from '../src/index';

describe('outerTemplate scaffold', () => {
  test('exports a plain object', () => {
    expect(typeof outerTemplate).toBe('object');
    expect(outerTemplate).not.toBeNull();
  });
});
