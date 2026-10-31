import './configureOuterTemplateRuntime';
import outerTemplateModule from 'atherdon-newsletter-js-layouts-outertemplate';

const printHead = () => outerTemplateModule.printHead();
const printMain = () => outerTemplateModule.printMain();
const printFooter = () => outerTemplateModule.printFooter();
const printBody = () => outerTemplateModule.printBody();

const printTemplate = (string) => {
  return outerTemplateModule.printTemplate(string);
};

const printTemplateData = ({ string, data }) => {
  return outerTemplateModule.printTemplateData({ string, data });
};

export {
  printMain,
  printFooter,
  printBody,
  printHead,
  printTemplate,
  printTemplateData,
};
