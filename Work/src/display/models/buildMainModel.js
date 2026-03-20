/**
 * Model builder for the displayMain section.
 *
 * Accepts normalized main input and returns a consistent render model.
 *
 * @param {object} input - Normalized input (defaults already merged).
 * @param {string} input.head - Rendered head HTML string.
 * @param {string} input.body - Rendered body HTML string.
 * @returns {{ head: string, body: string }}
 */
export function buildMainModel(input) {
  return {
    head: input.head,
    body: input.body,
  };
}
