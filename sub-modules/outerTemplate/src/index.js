import components from './components';
import bodyComponent from './components/body';
import headComponent from './components/head';
import mainComponent from './components/main';
import footerComponent from './components/footer';
import headStylesComponent from './components/headStyles';
import { required, nonEmptyString, string } from './components/validation/rules';
import { validateInput } from './components/validation/validateInput';
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

export { registry, renderTemplate, methods, buildHnDefinition, buildHnWithoutAdsDefinition, configureOuterTemplateRuntime, hnDefinition, hnWithoutAdsDefinition, bodyComponent, headComponent, mainComponent, footerComponent, headStylesComponent, required, nonEmptyString, string, validateInput };
export default outerTemplate;
