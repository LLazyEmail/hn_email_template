import { displayFactoryTwo } from 'email-template-object';

// import MainComponent from '../components/mainComponent';
import {
  
    previewTextComponent
} from '../components';

import { settings as headSettings } from '../display/displayHead';

import { 
    settings as bodySettings
 } from '../display/displayBody';

 import {
    settings as mainSettings
 } from '../display/displayMain';


// title must be passed from the outside
// const title = `The Secrets of High-Performing DevOps teams`;
//     const head = displayHead(title);

function displayTemplate({ generated_content, data }) {

    const HeadFactory = new displayFactoryTwo();
    headSettings.params.title = data.title;


    // ----------------
    const BodyFactory = new displayFactoryTwo();

    bodySettings.params.content = generated_content;
    bodySettings.params.previewText = previewTextComponent(data.preview);

    

    const BodyHTMLString = BodyFactory.create(bodySettings);
    // -------------
    // console.log(BodyHTMLString)
    // ------

    const MainFactory = new displayFactoryTwo();

    mainSettings.params.body = BodyHTMLString;

    let MainHTMLString = MainFactory.create(mainSettings);



    return MainHTMLString;


};


export default displayTemplate;
