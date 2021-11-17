import { mainComponent } from './main'

import { EmailTemplateBodyComponent } from './body'


import { head } from 'atherdon-newsletter-js-layouts-misc'



const generateTemplateComponent = () => {

    var bodyWithContent = EmailTemplateBodyComponent();

    return mainComponent(head, bodyWithContent);
}