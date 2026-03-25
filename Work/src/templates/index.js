import { createRegistry, renderTemplate as renderTemplateById } from '../engine/templates';
import hnTemplate from './hn';

/**
 * Registry of all available templates, keyed by template id.
 *
 * Kept for backward compatibility. Internally this now uses the shared
 * template-engine registry helper introduced in Phase 2.
 */
export const registry = createRegistry([hnTemplate]);

export const renderTemplate = (templateId, data) => {
  return renderTemplateById(registry, templateId, data);
};
