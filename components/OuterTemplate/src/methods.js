import { writeHTML, generateTemplateName } from 'markup-generator'
//-----

// methods like displayMain, displayHead and others not working well, 
// because i decide to reorganize the folder structure
import { displayMain, mainComponent} from './templates/main'

import { headComponent, displayHead } from './templates/head'

// and body
//----


import { checkingTitle,
  checkingBodyContent,
  checkingPreviewText 
} from './t/display'

import footer from './templates/footer'


import { EmailTemplateBodyComponent } from './templates/body'



// not working anymore
const printMain = () => {

  

  
  return displayMain();
  // return mainComponent("xxx", "xxx");
//   mainComponent(head, bodyComponent);
}

// not working anymore
const printFooter = () => {


  return footer("","","","",);
  //
}

// not working anymore
const printBody = () => {
  return EmailTemplateBodyComponent(footer, "", "");
  //EmailTemplateBodyComponent(footer, logoTop, logoBottom)
}

// not working anymore
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


  writingFile
 }
