import misc from 'atherdon-newsletter-js-layouts-misc';

// import { 
//     logoTop, logoBottom 
// } from 'atherdon-newsletter-js-layouts-body';

import body from 'atherdon-newsletter-js-layouts-body';

import { mainComponent } from './main'

import footer from './footer';

import { EmailTemplateBodyComponent } from './body'

const { 
        logoTop, logoBottom 
    } = body

    const { head, headComponent } = misc;

const generateTemplateComponent = () => {

    var bodyWithContent = EmailTemplateBodyComponent(footer, logoTop, logoBottom);

    return mainComponent(head, bodyWithContent);
}

export default generateTemplateComponent;