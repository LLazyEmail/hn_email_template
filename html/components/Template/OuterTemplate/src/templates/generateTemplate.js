import { head } from 'atherdon-newsletter-js-layouts-misc'
import { 
    footer, logoTop, logoBottom 
} from 'atherdon-newsletter-js-layouts-body';

import { mainComponent } from './main'

import { EmailTemplateBodyComponent } from './body'


const generateTemplateComponent = () => {

    var bodyWithContent = EmailTemplateBodyComponent(footer, logoTop, logoBottom);

    return mainComponent(head, bodyWithContent);
}

export default generateTemplateComponent;