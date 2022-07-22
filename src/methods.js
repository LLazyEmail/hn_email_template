import { writeHTML, generateTemplateName } from 'markup-generator';

import HeadString from './display/displayHead';

import { BodyHTMLString } from './display/displayBody';

// console.log(BodyHTMLString);

import { FooterHTMLString } from './display/displayFooter';

import { MainHTMLString } from './display/displayMain';

// import { TemplateWithAds, EmptyTemplate, Template } from './t';

// import {}


const printHead = () => {
  return HeadString;
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

const writingFile = (content) => {
  if (!content) {
    throw new Error('no content was passed into writingFile method');
  }
  
  const fileName = generateTemplateName('lit-empty');

  try {
    writeHTML(fileName, content);
  } catch (err) {
    //console.log(err);
    //console.log(content);
  }
};

export { printMain, printFooter, printBody, printHead, writingFile };
