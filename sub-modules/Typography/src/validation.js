/**
 * Runtime validation utilities for the Typography module.
 *
 * Provides a custom error class and lightweight assertion helpers so that
 * missing or invalid params surface as clear, immediately-actionable messages
 * instead of silent failures or cryptic JS errors.
 */

/**
 * Dedicated error type for Typography validation failures.
 *
 * Message format:
 *   [Typography.<context>] <description>. Expected: <expected>. Received: <received>.
 */
export class TypographyValidationError extends Error {
  constructor(message) {
    super(message);
    this.name = 'TypographyValidationError';
  }
}

/**
 * Assert that a required parameter is not undefined or null.
 *
 * @param {string} context - Function/component name for the error message.
 * @param {string} field   - Parameter name.
 * @param {*}      value   - Actual value received.
 */
export function assertRequired(context, field, value) {
  if (value === undefined || value === null) {
    throw new TypographyValidationError(
      `[Typography.${context}] Missing required param "${field}". Expected a value. Received: ${value}.`
    );
  }
}

/**
 * Assert that a parameter is a non-empty string.
 *
 * @param {string} context - Function/component name for the error message.
 * @param {string} field   - Parameter name.
 * @param {*}      value   - Actual value received.
 */
export function assertNonEmptyString(context, field, value) {
  assertRequired(context, field, value);
  if (typeof value !== 'string' || value.trim() === '') {
    throw new TypographyValidationError(
      `[Typography.${context}] Invalid param "${field}". Expected a non-empty string. Received: ${JSON.stringify(value)}.`
    );
  }
}

/**
 * Assert that a parameter belongs to a set of allowed values.
 *
 * @param {string}   context  - Function/component name for the error message.
 * @param {string}   field    - Parameter name.
 * @param {*}        value    - Actual value received.
 * @param {string[]} allowed  - Array of allowed values.
 */
export function assertEnum(context, field, value, allowed) {
  assertRequired(context, field, value);
  if (!allowed.includes(value)) {
    throw new TypographyValidationError(
      `[Typography.${context}] Invalid param "${field}". Expected one of: ${allowed.join('|')}. Received: ${JSON.stringify(value)}.`
    );
  }
}
