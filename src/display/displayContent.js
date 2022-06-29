import { displayFactoryTwo } from 'email-template-object';

import innerContentComponent from '../components/';

//variant one
const settings = {
  component: innerContentComponent,
  params: {},
};

const TemplateFactory = new displayFactoryTwo();
// console.log(TemplateFactory.create(settings));
export default TemplateFactory.create(settings);
