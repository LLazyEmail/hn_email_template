import { displayFactoryTwo } from 'email-template-object';

// import MainComponent from '../components/mainComponent';
import {
  
    previewTextComponent
} from '../components';

import { settings as headSettings } from '../display/sections/head';

import { 
    settings as bodySettings
 } from '../display/sections/body';

 import {
    settings as mainSettings
 } from '../display/sections/main';


// title must be passed from the outside
// const title = `The Secrets of High-Performing DevOps teams`;
//     const head = displayHead(title);

function displayFrontMatterTemplate({ string: generatedContent, data }) {

    const HeadFactory = new displayFactoryTwo();
    headSettings.params.title = data.title;
    const HeadHTMLString = HeadFactory.create(headSettings);

    // ----------------
    const BodyFactory = new displayFactoryTwo();

    bodySettings.params.content = generatedContent;
    bodySettings.params.previewText = previewTextComponent(data.preview);  

    const BodyHTMLString = BodyFactory.create(bodySettings);
    // -------------
    // console.log(BodyHTMLString)
    // ------

    const MainFactory = new displayFactoryTwo();

    mainSettings.params.head = HeadHTMLString;
    mainSettings.params.body = BodyHTMLString;

    let MainHTMLString = MainFactory.create(mainSettings);



    return MainHTMLString;


};


export default displayFrontMatterTemplate;
