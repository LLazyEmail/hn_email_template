/**
 * Model builder for the displayFooter section.
 *
 * Accepts normalized footer input and returns a consistent render model.
 *
 * @param {object} input - Normalized input (defaults already merged).
 * @param {string} input.address     - Rendered mailing address HTML string.
 * @param {string} input.sponsor     - Rendered sponsor link HTML string.
 * @param {string} input.copyright   - Rendered copyright HTML string.
 * @param {string} input.unsubscribe - Rendered unsubscribe link HTML string.
 * @returns {{ address: string, sponsor: string, copyright: string, unsubscribe: string }}
 */
export function buildFooterModel(input) {
  return {
    address: input.address,
    sponsor: input.sponsor,
    copyright: input.copyright,
    unsubscribe: input.unsubscribe,
  };
}
