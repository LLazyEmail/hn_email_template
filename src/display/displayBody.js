// import factory from './factory';
import displayFactoryTwo from './factoryTwo';


import EmailTemplateBodyComponent from '../components/body';



// import footerComponent from '../components/footer';
import footerFactory from '../display/displayFooter';


const ERROR_BODY = '`bodyContent` is a required option for `renderTemplate`';

const checkingBodyContent = (bodyContent) => {
    if (!bodyContent) {
        throw new Error(ERROR_BODY);
    }
}

let logoTop = '';
let logoBottom = '';
let content = '';



// note that footer param here is a subcomponent, 
// so we passing footerDisplay instead of just a component


let addon1 = {
    footer: footerFactory.partial,

    logoTop, logoBottom, content

}

//variant one
const settings = {
    component: EmailTemplateBodyComponent,
    // params: { footerComponent, logoTop, logoBottom, content },
    params: addon1,
    subcomponents: {  }
    
}

const DDDDM = new displayFactoryTwo();

DDDDM.create(settings);

export default DDDDM;