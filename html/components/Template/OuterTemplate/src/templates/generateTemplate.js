import body from 'atherdon-newsletter-js-layouts-body';

import { headComponent } from './head';

import { mainComponent } from './main'

import footer from './footer';

import { EmailTemplateBodyComponent } from './body'

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
