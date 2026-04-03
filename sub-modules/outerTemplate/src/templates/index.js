import { createRegistry, renderTemplate as renderTemplateById } from '@llazyemail/template-engine';
import hnTemplate from './hn';
import hnWithoutAdsTemplate from './hn-without-ads';
export const registry = createRegistry([hnTemplate, hnWithoutAdsTemplate]);

export const renderTemplate = (templateId, data) => {
  return renderTemplateById(registry, templateId, data);
};
