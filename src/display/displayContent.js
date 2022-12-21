import { displayFactoryTwo } from 'email-template-object';

import innerContentComponent from '../components/';

// import { buttonComponent } from 'atherdon-newsletter-js-layouts-typography';

// console.log(buttonComponent({href:'https://google.com', content: 'this is a link'}));

import { buttonComponent2 } from 'html-typography-tags';

const config = {id: '12', href: 'google.com'};

console.log(buttonComponent2(config));

//variant one
const settings = {
  component: innerContentComponent,
  params: {},
};

const TemplateFactory = new displayFactoryTwo();
// console.log(TemplateFactory.create(settings));
export default TemplateFactory.create(settings);
