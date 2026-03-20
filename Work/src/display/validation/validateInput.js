/**
 * Shared input validator for display sections.
 *
 * Runs a fixed set of reusable rules (required + nonEmptyString) against every
 * field listed in `requiredFields`, throwing a section-aware error on the first
 * violation.  The error message format matches what `createDisplaySection` has
 * always produced, so callers and tests remain unaffected.
 */

import { required, nonEmptyString } from './rules';
import { missingRequiredFieldError } from '../errors/createDisplayError';

/**
 * Rules applied to every required field, in order.
 * Both rules must pass for the field to be considered valid.
 */
const FIELD_RULES = [required, nonEmptyString];

/**
 * Validates that every field listed in `requiredFields` is present and
 * non-empty inside `normalized`.  Throws on the first failing field.
 *
 * @param {string}   sectionName    - Used in the error message (e.g. "displayMain").
 * @param {object}   normalized     - The merged (defaults + input) object to validate.
 * @param {string[]} requiredFields - Names of fields that must pass all rules.
 * @throws {Error} `[sectionName] missing required field: <fieldName>`
 */
export function validateInput(sectionName, normalized, requiredFields) {
  for (const field of requiredFields) {
    const value = normalized[field];
    for (const rule of FIELD_RULES) {
      const reason = rule(value);
      if (reason !== null) {
        throw missingRequiredFieldError(sectionName, field);
      }
    }
  }
}
