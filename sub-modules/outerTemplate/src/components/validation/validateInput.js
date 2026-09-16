import { required, nonEmptyString, string } from './rules';

const RULES = {
  required,
  nonEmptyString,
  string,
};

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
