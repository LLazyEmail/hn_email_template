import { displayFactoryTwo, factoryFour } from 'email-template-object';

import bodySubComponents from 'atherdon-newsletter-js-layouts-body';

import {
  EmailTemplateBodyComponent,
  innerContentComponent,
  previewTextComponent
} from '../components';

import { FooterHTMLString } from '../display/displayFooter';

const { logoBottomComponent, logoTopComponent } = bodySubComponents;



// note that footer param here is a subcomponent,
// so we passing footerDisplay instead of just a component

let addon = {
  footer: FooterHTMLString,

  logoTop: logoTopComponent(),
  logoBottom: logoBottomComponent(),

  // theese two variuables must beeing passed from the outside

  content: innerContentComponent(),
  // content: '[[THIS IS PLACE FOR A CONTENT INSIDE]',
  previewText: previewTextComponent('[AMA PREVIEW TEXT]'),
};

//variant one
const settings = {
  component: EmailTemplateBodyComponent,
 
  params: addon,
};

// console.log( settings );

const BodyFactory = new displayFactoryTwo();
const BodyHTMLString = BodyFactory.create(settings);

// console.log( BodyHTMLString );

export {
  BodyFactory,
  settings,
  BodyHTMLString
} 
