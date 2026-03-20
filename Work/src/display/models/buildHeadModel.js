/**
 * Model builder for the displayHead section.
 *
 * Accepts normalized head input and returns a consistent render model.
 *
 * @param {object} input - Normalized input (defaults already merged).
 * @param {string} input.title      - Email/page title string.
 * @param {string} input.headStyles - Rendered head CSS string.
 * @param {string} input.fonts      - Rendered fonts HTML string.
 * @returns {{ title: string, headStyles: string, fonts: string }}
 */
export function buildHeadModel(input) {
  return {
    title: input.title,
    headStyles: input.headStyles,
    fonts: input.fonts,
  };
}
