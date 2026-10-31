/**
 * Engine-level template registry and renderer.
 *
 * This module is intentionally generic and unaware of any concrete template
 * implementation details beyond the Template contract.
 */

/**
 * Build a template registry object keyed by template id.
 *
 * @param {Array<import('./types').TemplateDefinition>} templates
 * @returns {Object.<string, import('./types').TemplateDefinition>}
 */
export const createRegistry = (templates) => {
  return templates.reduce((acc, template) => {
    acc[template.id] = template;
    return acc;
  }, {});
};

/**
 * Render a template by id from a registry.
 *
 * @param {Object.<string, import('./types').TemplateDefinition>} registry
 * @param {string} templateId
 * @param {*} data
 * @returns {string}
 */
export const renderTemplate = (registry, templateId, data) => {
  const template = registry[templateId];
  if (!template) {
    throw new Error(`Unknown template: "${templateId}"`);
  }
  return template.render(data);
};
