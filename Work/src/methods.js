// import { writingFile } from 'markup-generator';
// import markdownData from './data';

import { HeadHTMLString } from './display/sections/head';

import { BodyHTMLString } from './display/sections/body';

// console.log(BodyHTMLString);

import { FooterHTMLString } from './display/sections/footer';

import { MainHTMLString } from './display/sections/main';

// import { TemplateWithAds, EmptyTemplate, Template } from './t';

// import {}

import outerTemplateModule from 'atherdon-newsletter-js-layouts-outertemplate';

const printHead = () => {
  return HeadHTMLString;
};

const printMain = () => {
  return MainHTMLString;
};

const printFooter = () => {
  return FooterHTMLString;
};

const printBody = () => {
  return BodyHTMLString;
};

const printTemplate = (string) => {
  return outerTemplateModule.printTemplate(string);
};

const printTemplateData = ({ string, data }) => {
  return outerTemplateModule.printTemplateData({ string, data });
};

const ERROR_BODY = '`bodyContent` is a required option for `renderTemplate`';

const checkingBodyContent = (bodyContent) => {
  if (!bodyContent) {
    throw new Error(ERROR_BODY);
  }
};

const ERROR_TITLE = '`title` is a required option for `renderTemplate`';

const checkingTitle = (title) => {
  if (!title) {
    throw new Error(ERROR_TITLE);
  }
};
// instead of importhing these methods we can run displayXXX.checks[xxx]

// import { checkingTitle,
//   checkingBodyContent,
//   checkingPreviewText
// } from './t/display'

export {
  printMain,
  printFooter,
  printBody,
  printHead,
  printTemplate,
  printTemplateData,
  // writingFile
};
