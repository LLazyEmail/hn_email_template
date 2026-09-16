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
