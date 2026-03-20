/**
 * Model builder for the displayBody section.
 *
 * Accepts normalized body input and returns a consistent render model.
 *
 * @param {object} input - Normalized input (defaults already merged).
 * @param {string} input.footer      - Rendered footer HTML string.
 * @param {string} input.logoTop     - Rendered top-logo HTML string.
 * @param {string} input.logoBottom  - Rendered bottom-logo HTML string.
 * @param {string} input.content     - Rendered inner-content HTML string.
 * @param {string} input.previewText - Rendered preview-text HTML string.
 * @returns {{ footer: string, logoTop: string, logoBottom: string, content: string, previewText: string }}
 */
export function buildBodyModel(input) {
  return {
    footer: input.footer,
    logoTop: input.logoTop,
    logoBottom: input.logoBottom,
    content: input.content,
    previewText: input.previewText,
  };
}
