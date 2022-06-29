import { displayFactoryTwo } from 'email-template-object';

import MainComponent from '../components/mainComponent';

import headString from '../display/displayHead';

// import bodyString from '../display/displayBody';

import { string as bodyString } from '../display/displayBody';


// title must be passed from the outside
// const title = `The Secrets of High-Performing DevOps teams`;
//     const head = displayHead(title);

//variant one
const settings = {
  component: MainComponent,
  params: { head: headString, body: bodyString },
};

// const DM = displayFactory(settings);

const MainFactory = new displayFactoryTwo();

// MainFactory.create(settings);

let MainTemplate = MainFactory.create(settings);

// console.log(MainTemplate);
// console.log(DisplayBody);

// const fileName = generateTemplateName('lit-empty');
// writeHTML(fileName, MainTemplate);
export default MainTemplate;
