//---------------

import { displayFactoryTwo } from 'email-template-object';

import innerContentComponent from '../components/footer';

//variant one
const settings = {
  component: footerComponent,
  params: {},
};

const TemplateFactory = new displayFactoryTwo();
// console.log(TemplateFactory.create(settings));
export default TemplateFactory.create(settings);
