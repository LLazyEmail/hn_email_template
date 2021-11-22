//-----
import { mainComponent } from './templates/main'

//import { head } from './head';

// and body
//----


import footer from './templates/footer'


import { EmailTemplateBodyComponent } from './templates/body'


const printMain = () => {

  

  return mainComponent("xxx", "xxx");
//   mainComponent(head, bodyComponent);
}

const printFooter = () => {
  return footer("","","","",);
  //
}

const printBody = () => {
  return EmailTemplateBodyComponent(footer, "", "");
  //EmailTemplateBodyComponent(footer, logoTop, logoBottom)
}



// const ERROR_TITLE = '`title` is a required option for `renderTemplate`'
const checkingTitle = (title) => {
  if (!title) {
    throw new Error('`title` is a required option for `renderTemplate`');
  }
}

// const ERROR_BODY = '`bodyContent` is a required option for `renderTemplate`';
const checkingBodyContent = (bodyContent) => {
  if (!bodyContent) {
    throw new Error('`bodyContent` is a required option for `renderTemplate`');
  }
}

//const ERROR_PREVIEW = '`previewText` is a required option for `renderTemplate`';
const checkingPreviewText = (previewText) => {
  if (!previewText) {
    throw new Error('`previewText` is a required option for `renderTemplate`');
  }
}



export { 
  printMain, printFooter, printBody,

  checkingTitle, checkingBodyContent, checkingPreviewText
 }
