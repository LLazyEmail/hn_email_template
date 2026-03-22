import { displayFactoryTwo } from 'email-template-object';

// import MainComponent from '../components/mainComponent';

// import headString from '../display/displayHead';


import { 
    settings as bodySettings
 } from '../display/sections/body';

 import {
    settings as mainSettings
 } from '../display/sections/main';


// title must be passed from the outside
// const title = `The Secrets of High-Performing DevOps teams`;
//     const head = displayHead(title);

function displayTemplate(generatedContent) {


    const BodyFactory = new displayFactoryTwo();

    bodySettings.params.content = generatedContent;


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
