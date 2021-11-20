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

export { printMain, printFooter, printBody }
