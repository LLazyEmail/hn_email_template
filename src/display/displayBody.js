// import factory from './factory';
import displayFactoryTwo from './factoryTwo';

import previewTextComponent from "../components/previewText";

import EmailTemplateBodyComponent from '../components/body';


import footerString from '../display/displayFooter';


const ERROR_BODY = '`bodyContent` is a required option for `renderTemplate`';

const checkingBodyContent = (bodyContent) => {
    if (!bodyContent) {
        throw new Error(ERROR_BODY);
    }
}

let logoTop = 'http://placekitten.com/200/300';
let logoBottom = 'http://placekitten.com/200/300';
let content = '{THIS IS PLACE FOR A CONTENT INSIDE}';
let previewText = '{AMA PREVIEW TEXT}' 


// note that footer param here is a subcomponent, 
// so we passing footerDisplay instead of just a component

previewTextComponent


let addon1 = {
    footer: footerString,

    logoTop, logoBottom, content,
    previewText

}


//variant one
const settings = {
    component: EmailTemplateBodyComponent,
    // params: { footerComponent, logoTop, logoBottom, content },
    params: addon1,
    subcomponents: {  }
    
}

const BodyFactory = new displayFactoryTwo();

export default BodyFactory.create(settings);

// export default DDDDM;