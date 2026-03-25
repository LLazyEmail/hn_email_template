import { required, nonEmptyString, string } from './rules';

const RULES = {
  required,
  nonEmptyString,
  string,
};

/**
 * Validate a list of fields and throw mapped errors on first failure.
 *
 * @param {object} input
 * @param {Array<{
 *  field: string,
 *  errorMessage: string,
 *  rules?: string[]
 * }>} checks
 */
export const validateInput = (input, checks) => {
  const normalized = input || {};

  for (const check of checks) {
    const fieldRules = check.rules || ['required', 'nonEmptyString'];
    const value = normalized[check.field];

    for (const ruleName of fieldRules) {
      const rule = RULES[ruleName];
      if (!rule) {
        throw new Error(`Unknown validation rule: ${ruleName}`);
      }

      if (rule(value) !== null) {
        throw new Error(check.errorMessage);
      }
    }
  }
};
