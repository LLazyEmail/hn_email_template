/**
 * Reusable validation rule functions for the display layer.
 *
 * Each rule is a function that accepts a value and returns:
 *   - null  when the value passes the rule
 *   - a non-empty string (reason) when the value fails the rule
 */

/**
 * Fails when the value is `undefined` or `null`.
 *
 * @param {*} value
 * @returns {string|null}
 */
export const required = (value) => {
  if (value === undefined || value === null) {
    return 'is required';
  }
  return null;
};

/**
 * Fails when the value is an empty string (`''`).
 * Intended to be composed with `required` to cover all "blank" cases.
 *
 * @param {*} value
 * @returns {string|null}
 */
export const nonEmptyString = (value) => {
  if (value === '') {
    return 'must not be empty';
  }
  return null;
};
