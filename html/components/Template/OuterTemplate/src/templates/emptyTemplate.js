import body from 'atherdon-newsletter-js-layouts-body';

import { head, headComponent } from './head';

import { mainComponent } from './main'

import footer from './footer';

import { EmailTemplateBodyComponent } from './body'

const { 
    logoTop, logoBottom 
} = body


const generateEmptyTemplateComponent = () => {

    var emptyContent = EmailTemplateBodyComponent(footer, logoTop, logoBottom);

    return mainComponent(head, emptyContent);


}

export default generateEmptyTemplateComponent;