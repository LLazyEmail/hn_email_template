// import displayFactory from './factory';
import displayFactoryTwo from './factoryTwo';

import headString from '../display/displayHead';

import bodyString from '../display/displayBody';

import MainComponent from '../components/mainComponent';



// import { writeHTML, generateTemplateName } from 'markup-generator'






// const title = `The Secrets of High-Performing DevOps teams`;
//     const head = displayHead(title);

//variant one
const settings = {
  component: MainComponent,
  params: { head: headString, body: bodyString  },

  
}

// const DM = displayFactory(settings);




const DDDDM = new displayFactoryTwo();

// DDDDM.create(settings);

let FULLLL = DDDDM.create(settings);

// console.log(FULLLL);
// console.log(DisplayBody);


// const fileName = generateTemplateName('lit-empty');
// writeHTML(fileName, FULLLL);
