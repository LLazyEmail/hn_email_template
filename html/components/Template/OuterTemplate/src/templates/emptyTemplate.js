import misc from 'atherdon-newsletter-js-layouts-misc';

import body from 'atherdon-newsletter-js-layouts-body';

import { mainComponent } from './main'

import footer from './footer';

import { EmailTemplateBodyComponent } from './body'

const { 
    logoTop, logoBottom 
} = body

const { head, headComponent } = misc;

const generateEmptyTemplateComponent = () => {

    var emptyContent = EmailTemplateBodyComponent(footer, logoTop, logoBottom);

    return mainComponent(head, emptyContent);


}

export default generateEmptyTemplateComponent;