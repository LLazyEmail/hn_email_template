import body from 'atherdon-newsletter-js-layouts-body';

import { head, headComponent } from './head';

import { mainComponent } from './main'

import footer from './footer';

import { EmailTemplateBodyComponent } from './body'

const { 
        logoTop, logoBottom 
    } = body


const generateTemplateComponent = () => {


    var bodyWithContent = EmailTemplateBodyComponent(footer, logoTop, logoBottom);

    return mainComponent(head, bodyWithContent);
}

export default generateTemplateComponent;