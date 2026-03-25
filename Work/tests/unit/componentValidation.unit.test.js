import { required, nonEmptyString, string } from '../../src/components/validation/rules';
import { validateInput } from '../../src/components/validation/validateInput';

describe('components validation rules', () => {
  test('required returns reason for undefined/null and null otherwise', () => {
    expect(required(undefined)).toBe('is required');
    expect(required(null)).toBe('is required');
    expect(required('')).toBeNull();
    expect(required(false)).toBeNull();
  });

  test('nonEmptyString returns reason only for empty string', () => {
    expect(nonEmptyString('')).toBe('must not be empty');
    expect(nonEmptyString('value')).toBeNull();
    expect(nonEmptyString(undefined)).toBeNull();
    expect(nonEmptyString(42)).toBeNull();
  });

  test('string returns reason for non-string values', () => {
    expect(string('ok')).toBeNull();
    expect(string(undefined)).toBeNull();
    expect(string(null)).toBeNull();
    expect(string(123)).toBe('must be a string');
    expect(string({})).toBe('must be a string');
  });
});

describe('validateInput (components)', () => {
  test('passes when all checks pass', () => {
    expect(() =>
      validateInput(
        { head: '<head></head>', body: '<body></body>' },
        [
          { field: 'head', errorMessage: 'head missing', rules: ['required', 'string', 'nonEmptyString'] },
          { field: 'body', errorMessage: 'body missing', rules: ['required', 'string', 'nonEmptyString'] },
        ]
      )
    ).not.toThrow();
  });

  test('throws mapped message on first failing field', () => {
    expect(() =>
      validateInput(
        { head: '', body: '<body></body>' },
        [
          { field: 'head', errorMessage: 'head missing', rules: ['required', 'string', 'nonEmptyString'] },
          { field: 'body', errorMessage: 'body missing', rules: ['required', 'string', 'nonEmptyString'] },
        ]
      )
    ).toThrow('head missing');
  });

  test('uses default rules when rules omitted', () => {
    expect(() =>
      validateInput(
        { title: '' },
        [{ field: 'title', errorMessage: 'title required' }]
      )
    ).toThrow('title required');
  });
});
