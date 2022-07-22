import { displayFactoryTwo } from 'email-template-object';

// import MainComponent from '../components/mainComponent';

// import headString from '../display/displayHead';


import { 
    settings as bodySettings
 } from '../display/displayBody';

 import {
    settings as mainSettings
 } from '../display/displayMain';


// title must be passed from the outside
// const title = `The Secrets of High-Performing DevOps teams`;
//     const head = displayHead(title);

function displayTemplate(generated_content) {


    const BodyFactory = new displayFactoryTwo();

    bodySettings.params.content = generated_content;


    const BodyHTMLString = BodyFactory.create(bodySettings);
    
    // console.log(BodyHTMLString)
    // ------

    const MainFactory = new displayFactoryTwo();

    mainSettings.params.body = BodyHTMLString;

    let MainHTMLString = MainFactory.create(mainSettings);

    // console.log(MainHTMLString)

    return MainHTMLString;

    // const TemplateFactory = new displayFactoryTwo();
// let Template = TemplateFactory.create(settings);
// console.log(TemplateFactory.create(settings));
// export default Template;


};


export default displayTemplate;
