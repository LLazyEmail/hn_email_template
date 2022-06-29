// ---------------
// import { writeHTML, generateTemplateName } from 'markup-generator'
import { displayFactoryTwo } from 'email-template-object';

import headString from '../display/displayHead';
import bodyString from '../display/displayBody';

import MainComponent from '../components/mainComponent';

// title must be passed from the outside
// const title = `The Secrets of High-Performing DevOps teams`;
//     const head = displayHead(title);

//variant one
const settings = {
  component: MainComponent,
  params: { head: headString, body: bodyString },
};

const EmptyTemplateFactory = new displayFactoryTwo();

let EmptyTemplate = EmptyTemplateFactory.create(settings);

export default EmptyTemplate;
