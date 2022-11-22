// import { writingFile } from 'markup-generator';

import HeadString from './display/displayHead';

import { BodyHTMLString } from './display/displayBody';

// console.log(BodyHTMLString);

import { FooterHTMLString } from './display/displayFooter';

import { MainHTMLString } from './display/displayMain';

// import { TemplateWithAds, EmptyTemplate, Template } from './t';

// import {}

import displayTemplate from './t/displayTemplate';

// import helloTemplate from 'lit-typography';

// const printLIT = () => { 

//   const element = document.createElement('div');
  
//   console.log(helloTemplate("Arthur"));
// }


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

const printTemplate = (string) => {
  return displayTemplate(string)
}

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
  printMain, printFooter, printBody, printHead, printTemplate,  
  // writingFile 
};
