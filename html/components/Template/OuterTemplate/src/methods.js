//-----
import { mainComponent } from './templates/main'

//import { head } from './head';

// and body
//----


import footer from './templates/footer'


import { EmailTemplateBodyComponent } from './templates/body'


function printMain = () => {
  mainComponent("", "");
//   mainComponent(head, bodyComponent);
}

function printFooter = () => {
  footer("","","","",);
  //
}

function printBody = () => {
  EmailTemplateBodyComponent(footer, "", "");
  //EmailTemplateBodyComponent(footer, logoTop, logoBottom)
}

export { printMain, printFooter, printBody }
