import hnTemplate from './hn';

/**
 * Registry of all available templates, keyed by template id.
 *
 * To add a new template: import it here and add an entry to this object.
 *
 * @type {Object.<string, import('./types').Template>}
 */
const registry = {
    [hnTemplate.id]: hnTemplate,
};

/**
 * Render a template by id.
 *
 * @param {string} templateId - The id of the template to render (e.g. `'hn'`).
 * @param {*}      data       - Data passed through to the template's `render` method.
 * @returns {string} Rendered HTML string.
 */
const renderTemplate = (templateId, data) => {
    const template = registry[templateId];
    if (!template) {
        throw new Error(`Unknown template: "${templateId}"`);
    }
    return template.render(data);
};

export { registry, renderTemplate };
