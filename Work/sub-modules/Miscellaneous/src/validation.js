/**
 * Runtime validation utilities for the Miscellaneous module.
 *
 * Provides a custom error class and lightweight assertion helpers so that
 * missing or invalid params surface as clear, immediately-actionable messages
 * instead of silent failures or cryptic JS errors.
 */

/**
 * Dedicated error type for Miscellaneous validation failures.
 *
 * Message format:
 *   [Miscellaneous.<context>] <description>. Expected: <expected>. Received: <received>.
 */
export class MiscValidationError extends Error {
  constructor(message) {
    super(message);
    this.name = 'MiscValidationError';
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
    throw new MiscValidationError(
      `[Miscellaneous.${context}] Missing required param "${field}". Expected a value. Received: ${value}.`
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
    throw new MiscValidationError(
      `[Miscellaneous.${context}] Invalid param "${field}". Expected a non-empty string. Received: ${JSON.stringify(value)}.`
    );
  }
}
