// import body from 'atherdon-newsletter-js-layouts-body';


import headComponent from '../components/head';

import mainComponent from '../components/main'

import footer from '../components/footer';

import EmailTemplateBodyComponent from '../components/body'

const { 
    logoTop, logoBottom 
} = body


const generateEmptyTemplateComponent = () => {

    var emptyContent = EmailTemplateBodyComponent(footer, logoTop, logoBottom);

    return mainComponent(head, emptyContent);


}

export default generateEmptyTemplateComponent;