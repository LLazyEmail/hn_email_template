import { mainComponent } from './templates/main'
import footer from './templates/footer'
import { EmailTemplateBodyComponent } from './templates/body'


function printMain = () => {
  mainComponent();
}

function printFooter = () => {
  footer();
}

function printBody = () => {
  EmailTemplateBodyComponent();
}

export { printMain, printFooter, printBody }
