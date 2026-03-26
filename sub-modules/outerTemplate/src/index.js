import components from './components';
import { renderTemplate } from './templates';
import { registry } from './templates';
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

const outerTemplate = {
  ...components,
  registry,
  renderTemplate,
  methods,
  ...methods,
};

export { registry, renderTemplate, methods };
export default outerTemplate;
