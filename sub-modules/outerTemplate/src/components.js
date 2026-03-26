import bodyComponent from './components/body';
import headComponent from './components/head';
import mainComponent from './components/main';
import footerComponent from './components/footer';
import { renderTemplate } from './templates';
import { printTemplate, printTemplateData } from './methods';

const outerTemplateComponents = {
  bodyComponent,
  headComponent,
  mainComponent,
  footerComponent,
  renderTemplate,
  printTemplate,
  printTemplateData,
};

export default outerTemplateComponents;
