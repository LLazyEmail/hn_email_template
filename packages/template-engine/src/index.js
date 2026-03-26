export { createTemplateFromDefinition } from './createTemplateFromDefinition';
export {
  validateTemplateInput,
  validateHnTemplateInput,
  validateHnWithoutAdsTemplateInput,
} from './validation';

/**
 * Build a template registry object keyed by template id.
 *
 * @param {Array<{ id: string, render: function(*): string }>} templates
 * @returns {Object.<string, { id: string, render: function(*): string }>}
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
 * @param {Object.<string, { id: string, render: function(*): string }>} registry
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
