import { displayFactoryTwo } from 'email-template-object';

import innerContentComponent from '../components/';

// import { buttonComponent } from 'atherdon-newsletter-js-layouts-typography';

// console.log(buttonComponent({href:'https://google.com', content: 'this is a link'}));


//variant one
const settings = {
  component: innerContentComponent,
  params: {},
};

const TemplateFactory = new displayFactoryTwo();
// console.log(TemplateFactory.create(settings));
export default TemplateFactory.create(settings);
