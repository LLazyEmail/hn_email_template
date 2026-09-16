/**
 * Centralized error utilities for the display pipeline.
 *
 * All display-layer error construction goes through these helpers so that
 * error messages are consistent, deterministic, and easy to test/maintain.
 */

export function missingRequiredFieldError(sectionName, fieldName) {
  return new Error(`[${sectionName}] missing required field: ${fieldName}`);
}

export function invalidFieldError(sectionName, fieldName, reason) {
  return new Error(`[${sectionName}] invalid field "${fieldName}": ${reason}`);
}

export function displaySectionError(sectionName, cause) {
  const message = `[${sectionName}] render error: ${cause.message}`;
  const err = new Error(message);
  err.cause = cause;
  return err;
}
