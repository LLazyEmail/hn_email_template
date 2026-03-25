/**
 * Reusable validation rules for legacy component rendering inputs.
 *
 * Rule contract:
 * - return `null` when value passes validation
 * - return a short reason string when value fails
 */

export const required = (value) => {
  if (value === undefined || value === null) {
    return 'is required';
  }
  return null;
};

export const nonEmptyString = (value) => {
  if (value === '') {
    return 'must not be empty';
  }
  return null;
};

export const string = (value) => {
  if (value === undefined || value === null) {
    return null;
  }
  if (typeof value !== 'string') {
    return 'must be a string';
  }
  return null;
};
