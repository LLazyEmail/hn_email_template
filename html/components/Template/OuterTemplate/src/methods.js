import { writeHTML, generateTemplateName } from 'markup-generator'
//-----
import { displayMain, mainComponent} from './templates/main'

import { headComponent, displayHead } from './templates/head'

// and body
//----


import footer from './templates/footer'


import { EmailTemplateBodyComponent } from './templates/body'


const printMain = () => {

  
  return displayMain();
  // return mainComponent("xxx", "xxx");
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

const printHead = () => {
  return displayHead("Ziba Zyaba Zoooo");
  // return headComponent("Ziba Zyaba Zoooo", "xxx", "xxx");
}


const writingFile = (content) => {


  // const content  = generateEmptyTemplateComponent();
  const fileName = generateTemplateName('lit-empty');

  writeHTML(fileName, content);
}


export { 
  printMain, printFooter, printBody,
  printHead,

  checkingTitle, checkingBodyContent, checkingPreviewText,

  writingFile
 }
