import body from 'atherdon-newsletter-js-layouts-body';

import { head, headComponent } from '../templates/head';

import { mainComponent } from '../templates/main'

import footer from '../templates/footer';

import { EmailTemplateBodyComponent } from '../templates/body'

const { 
    logoTop, logoBottom 
} = body


const generateEmptyTemplateComponent = () => {

    var emptyContent = EmailTemplateBodyComponent(footer, logoTop, logoBottom);

    return mainComponent(head, emptyContent);


}

export default generateEmptyTemplateComponent;