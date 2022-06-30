import { writeHTML, generateTemplateName } from 'markup-generator';

import HeadString from './display/displayHead';

import { string as BodyString } from './display/displayBody';

import FooterString from './display/displayFooter';

import MainString from './display/displayMain';

import { TemplateWithAds, EmptyTemplate, Template } from './t';

const printHead = () => {
  return HeadString;
};

const printMain = () => {
  return MainString;
};

const printFooter = () => {
  return FooterString;
};

const printBody = () => {
  return BodyString;
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
