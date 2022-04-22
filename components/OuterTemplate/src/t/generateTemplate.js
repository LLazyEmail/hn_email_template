import body from 'atherdon-newsletter-js-layouts-body';

import { headComponent } from '../templates/head';

import { mainComponent } from '../templates/main'

import footer from '../templates/footer';

import { EmailTemplateBodyComponent } from '../templates/body'

const { 
        logoTop, logoBottom 
    } = body



const fakeTitleGenerator = () => {
  return Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 5);
}

const generateTemplateComponent = () => {
        
    var title = fakeTitleGenerator();
        
    var TemplateHead = headComponent(title);
        
    // is it with content or doesnt?
    var bodyWithContent = EmailTemplateBodyComponent(footer, logoTop, logoBottom);

    return mainComponent(TemplateHead, bodyWithContent);
}

export default generateTemplateComponent;
