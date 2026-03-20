import { required, nonEmptyString } from '../src/display/validation/rules';
import { validateInput } from '../src/display/validation/validateInput';

// ---------------------------------------------------------------------------
// rules.js — required
// ---------------------------------------------------------------------------

describe('required rule', () => {
  test('returns null for a non-null, non-undefined value', () => {
    expect(required('hello')).toBeNull();
  });

  test('returns null for zero (0)', () => {
    expect(required(0)).toBeNull();
  });

  test('returns null for false', () => {
    expect(required(false)).toBeNull();
  });

  test('returns null for an empty string (empty string is not null/undefined)', () => {
    expect(required('')).toBeNull();
  });

  test('returns a string reason for undefined', () => {
    expect(required(undefined)).toBe('is required');
  });

  test('returns a string reason for null', () => {
    expect(required(null)).toBe('is required');
  });
});

// ---------------------------------------------------------------------------
// rules.js — nonEmptyString
// ---------------------------------------------------------------------------

describe('nonEmptyString rule', () => {
  test('returns null for a non-empty string', () => {
    expect(nonEmptyString('hello')).toBeNull();
  });

  test('returns null for a number', () => {
    expect(nonEmptyString(42)).toBeNull();
  });

  test('returns null for null (null is handled by required, not here)', () => {
    expect(nonEmptyString(null)).toBeNull();
  });

  test('returns null for undefined', () => {
    expect(nonEmptyString(undefined)).toBeNull();
  });

  test('returns a string reason for an empty string', () => {
    expect(nonEmptyString('')).toBe('must not be empty');
  });
});

// ---------------------------------------------------------------------------
// validateInput — successful validation
// ---------------------------------------------------------------------------

describe('validateInput — passes', () => {
  test('does not throw when requiredFields is empty', () => {
    expect(() => validateInput('test', {}, [])).not.toThrow();
  });

  test('does not throw when all required fields are present and non-empty', () => {
    expect(() =>
      validateInput('test', { title: 'Hello', body: '<p>text</p>' }, ['title', 'body'])
    ).not.toThrow();
  });

  test('does not throw when a required field value is 0 (falsy but valid)', () => {
    expect(() => validateInput('test', { count: 0 }, ['count'])).not.toThrow();
  });

  test('does not throw when a required field value is false', () => {
    expect(() => validateInput('test', { flag: false }, ['flag'])).not.toThrow();
  });
});

// ---------------------------------------------------------------------------
// validateInput — missing / null field
// ---------------------------------------------------------------------------

describe('validateInput — required field missing', () => {
  test('throws when a required field is absent (undefined)', () => {
    expect(() => validateInput('mySection', {}, ['title'])).toThrow(
      '[mySection] missing required field: title'
    );
  });

  test('throws when a required field is null', () => {
    expect(() => validateInput('mySection', { title: null }, ['title'])).toThrow(
      '[mySection] missing required field: title'
    );
  });

  test('error message includes sectionName and field name', () => {
    expect(() => validateInput('footerSection', { address: null }, ['address'])).toThrow(
      '[footerSection] missing required field: address'
    );
  });

  test('throws on the first failing field when multiple are missing', () => {
    expect(() =>
      validateInput('test', { b: 'ok', c: 'ok' }, ['a', 'b', 'c'])
    ).toThrow('[test] missing required field: a');
  });
});

// ---------------------------------------------------------------------------
// validateInput — empty string
// ---------------------------------------------------------------------------

describe('validateInput — empty string field', () => {
  test('throws when a required field is an empty string', () => {
    expect(() => validateInput('mySection', { title: '' }, ['title'])).toThrow(
      '[mySection] missing required field: title'
    );
  });

  test('throws for empty string even when other fields are valid', () => {
    expect(() =>
      validateInput('test', { head: 'valid', body: '' }, ['head', 'body'])
    ).toThrow('[test] missing required field: body');
  });
});
