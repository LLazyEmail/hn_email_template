import { createRegistry, renderTemplate as renderTemplateById } from '@llazyemail/template-engine';
import hnTemplate from './hn';
export const registry = createRegistry([hnTemplate]);

export const renderTemplate = (templateId, data) => {
  return renderTemplateById(registry, templateId, data);
};
