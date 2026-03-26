import components from './components';
import { renderTemplate } from './templates';
import { registry } from './templates';
import { buildHnWithoutAdsDefinition } from './runtime/displayRuntimeDeps';
import {
  printMain,
  printFooter,
  printBody,
  printHead,
  printTemplate,
  printTemplateData,
} from './methods';

const methods = {
  printMain,
  printFooter,
  printBody,
  printHead,
  printTemplate,
  printTemplateData,
};

const templates = {
  renderTemplate,
  registry,
};

const outerTemplate = {
  ...components,
  ...templates,
  templates,
  methods,
  ...methods,
};

export { registry, renderTemplate, methods, buildHnWithoutAdsDefinition };
export default outerTemplate;
