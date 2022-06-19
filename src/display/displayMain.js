import displayFactory from './factory';
import displayFactoryTwo from './factoryTwo';



import { writeHTML, generateTemplateName } from 'markup-generator'




// partials
// import DisplayHead from './displayHead';
// import DisplayBody from './displayBody';


import headString from '../display/displayHead';

import bodyString from '../display/displayBody';

import MainComponent from '../components/mainComponent';

// note that head and body params are actually `displayHead` & `displayBody` 
// methods for sub-components




// const title = `The Secrets of High-Performing DevOps teams`;


//variant one
const settings = {
  component: MainComponent,
  params: { head: headString, body: bodyString  },
  subcomponents: {  }
  
}

// const DM = displayFactory(settings);




const DDDDM = new displayFactoryTwo();

// DDDDM.create(settings);

let FULLLL = DDDDM.create(settings);

// console.log(FULLLL);
// console.log(DisplayBody);


const fileName = generateTemplateName('lit-empty');

  writeHTML(fileName, FULLLL);



// const displayMain = () => {
  
//     const head = displayHead(title);
//     const body = displayBody();
    
//     return mainComponent(head, body);
// }

