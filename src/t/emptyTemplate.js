// import body from 'atherdon-newsletter-js-layouts-body';

// const { 
//     logoTop, logoBottom 
// } = body

import headComponent from '../components/head';

import mainComponent from '../components/mainComponent'

import footer from '../components/footer';

import EmailTemplateBodyComponent from '../components/body'

const logoTop = '';const logoBottom = '';


const generateEmptyTemplateComponent = () => {

    var emptyContent = EmailTemplateBodyComponent(footer, logoTop, logoBottom);

    return mainComponent(headComponent, emptyContent);


}

export default generateEmptyTemplateComponent;