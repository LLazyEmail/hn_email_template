import components from './components';
import { renderTemplate } from './templates';
import { registry } from './templates';
import { buildHnDefinition, buildHnWithoutAdsDefinition, configureOuterTemplateRuntime } from './runtime/displayRuntimeDeps';
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

const hnDefinition = buildHnDefinition();
const hnWithoutAdsDefinition = buildHnWithoutAdsDefinition();

export { registry, renderTemplate, methods, buildHnDefinition, buildHnWithoutAdsDefinition, configureOuterTemplateRuntime, hnDefinition, hnWithoutAdsDefinition };
export default outerTemplate;
