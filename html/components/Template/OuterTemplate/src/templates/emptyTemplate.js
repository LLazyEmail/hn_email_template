import { head } from 'atherdon-newsletter-js-layouts-misc'
import { 
    footer, logoTop, logoBottom 
} from 'atherdon-newsletter-js-layouts-body';

import { mainComponent } from './main'

import { EmailTemplateBodyComponent } from './body'



const generateEmptyTemplateComponent = () => {

    var emptyContent = EmailTemplateBodyComponent(footer, logoTop, logoBottom);

    return mainComponent(head, emptyContent);


}

export default generateEmptyTemplateComponent;