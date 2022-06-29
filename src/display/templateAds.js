//---------------

import { displayFactoryTwo } from 'email-template-object';

//variant one
const settings = {
  component: "",
  params: {},
};

const TemplateFactory = new displayFactoryTwo();
// console.log(TemplateFactory.create(settings));
export default TemplateFactory.create(settings);
