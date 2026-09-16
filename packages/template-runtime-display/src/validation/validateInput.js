import { required, nonEmptyString } from './rules';
import { missingRequiredFieldError } from '../errors/createDisplayError';

const FIELD_RULES = [required, nonEmptyString];

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
