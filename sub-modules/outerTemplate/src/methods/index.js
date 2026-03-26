import { renderTemplate } from '../templates';
import { displayDeps } from '../runtime/displayRuntimeDeps';

const printHead = () => {
  return displayDeps.headString;
};

const printMain = () => {
  return displayDeps.mainString;
};

const printFooter = () => {
  return displayDeps.footerString;
};

const printBody = () => {
  return displayDeps.bodyString;
};

const printTemplate = (string) => {
  return renderTemplate('hn', string);
};

const printTemplateData = ({ string, data }) => {
  return renderTemplate('hn', { string, data });
};

export {
  printMain,
  printFooter,
  printBody,
  printHead,
  printTemplate,
  printTemplateData,
};
