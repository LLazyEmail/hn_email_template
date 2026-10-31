/**
 * @typedef {object} TemplateValidationRule
 * @property {string} path
 * @property {string} [type]
 * @property {boolean} [required]
 */

const isObject = (value) =>
  value !== null && typeof value === 'object' && !Array.isArray(value);

const getByPath = (input, path) => {
  return path.split('.').reduce((acc, key) => {
    if (acc == null) return undefined;
    return acc[key];
  }, input);
};

const hasByPath = (input, path) => {
  const parts = path.split('.');
  let cursor = input;

  for (const part of parts) {
    if (
      !isObject(cursor) ||
      !Object.prototype.hasOwnProperty.call(cursor, part)
    ) {
      return false;
    }
    cursor = cursor[part];
  }

  return true;
};

const validateType = (value, expectedType) => {
  if (expectedType === 'array') {
    return Array.isArray(value);
  }
  if (expectedType === 'object') {
    return isObject(value);
  }
  return typeof value === expectedType;
};

const isNonEmptyString = (value) =>
  typeof value === 'string' && value.trim().length > 0;

/**
 * Validate input using a lightweight declarative schema.
 *
 * Throws with template-aware errors so callers can quickly identify
 * exactly which template and field failed.
 *
 * @param {string} templateId
 * @param {*} input
 * @param {TemplateValidationRule[]} rules
 */
export const validateTemplateInput = (templateId, input, rules = []) => {
  for (const rule of rules) {
    const { path, required = false, type } = rule;
    const present = hasByPath(input, path);
    const value = getByPath(input, path);

    if (required && !present) {
      throw new Error(
        `[template:${templateId}] missing required field: ${path}`
      );
    }

    if (present && type && !validateType(value, type)) {
      throw new Error(
        `[template:${templateId}] invalid field type: ${path} (expected ${type})`
      );
    }
  }
};

const validateSimpleStringPayload = (templateId, input) => {
  if (!isNonEmptyString(input)) {
    throw new Error(
      `[template:${templateId}] invalid input: expected a non-empty string payload`
    );
  }
};

const validateFrontMatterPayload = (templateId, input) => {
  validateTemplateInput(templateId, input, [
    { path: 'string', required: true, type: 'string' },
    { path: 'data', required: true, type: 'object' },
    { path: 'data.title', required: true, type: 'string' },
    { path: 'data.preview', required: true, type: 'string' },
  ]);

  const fields = ['string', 'data.title', 'data.preview'];
  for (const field of fields) {
    if (!isNonEmptyString(getByPath(input, field))) {
      throw new Error(
        `[template:${templateId}] missing required field for frontMatter payload: ${field}`
      );
    }
  }
};

/**
 * Validate payload accepted by the `hn` family of templates.
 *
 * Supported payload shapes:
 * - simple: non-empty string
 * - frontMatter: { string, data: { title, preview } } with non-empty strings
 *
 * @param {*} input
 */
export const validateHnTemplateInput = (input) => {
  const templateId = 'hn';
  const isFrontMatter =
    input !== null &&
    typeof input === 'object' &&
    !Array.isArray(input) &&
    input.data !== undefined;

  if (isFrontMatter) {
    validateFrontMatterPayload(templateId, input);
    return;
  }

  validateSimpleStringPayload(templateId, input);
};

/**
 * Same validation contract as `hn`, but template-scoped error messages.
 *
 * @param {*} input
 */
export const validateHnWithoutAdsTemplateInput = (input) => {
  const templateId = 'hn-without-ads';
  const isFrontMatter =
    input !== null &&
    typeof input === 'object' &&
    !Array.isArray(input) &&
    input.data !== undefined;

  if (isFrontMatter) {
    validateFrontMatterPayload(templateId, input);
    return;
  }

  validateSimpleStringPayload(templateId, input);
};
