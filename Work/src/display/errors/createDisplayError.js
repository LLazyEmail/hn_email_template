/**
 * Centralized error utilities for the display pipeline.
 *
 * All display-layer error construction goes through these helpers so that
 * error messages are consistent, deterministic, and easy to test/maintain.
 */

/**
 * Creates an Error for a missing (null/undefined/empty) required field.
 *
 * @param {string} sectionName - Name of the display section (e.g. "displayMain").
 * @param {string} fieldName   - Name of the field that failed validation.
 * @returns {Error}
 */
export function missingRequiredFieldError(sectionName, fieldName) {
  return new Error(`[${sectionName}] missing required field: ${fieldName}`);
}

/**
 * Creates an Error for an invalid field value.
 *
 * @param {string} sectionName - Name of the display section.
 * @param {string} fieldName   - Name of the invalid field.
 * @param {string} reason      - Human-readable reason for the failure.
 * @returns {Error}
 */
export function invalidFieldError(sectionName, fieldName, reason) {
  return new Error(`[${sectionName}] invalid field "${fieldName}": ${reason}`);
}

/**
 * Wraps an unexpected error with display-section context.
 *
 * @param {string} sectionName - Name of the display section.
 * @param {Error}  cause       - Original error to wrap.
 * @returns {Error}
 */
export function displaySectionError(sectionName, cause) {
  const message = `[${sectionName}] render error: ${cause.message}`;
  const err = new Error(message);
  err.cause = cause;
  return err;
}
