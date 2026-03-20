/**
 * Contract for a renderable email template.
 *
 * @typedef {Object} Template
 * @property {string}           id     - Unique identifier for this template (e.g. `'hn'`).
 * @property {function(data: *): string} render - Accepts template data and returns an HTML string.
 */
