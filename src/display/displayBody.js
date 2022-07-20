import { displayFactoryTwo, factoryFour } from 'email-template-object';

// import previewTextComponent from '../components/previewText';

import bodySubComponents from 'atherdon-newsletter-js-layouts-body';

import {
  EmailTemplateBodyComponent,
  innerContentComponent,
  previewTextComponent
} from '../components';

import footerString from '../display/displayFooter';

const { logoBottomComponent, logoTopComponent } = bodySubComponents;



// note that footer param here is a subcomponent,
// so we passing footerDisplay instead of just a component

let addon1 = {
  footer: footerString,

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
  // params: { footerComponent, logoTop, logoBottom, content },
  params: addon1,
};

const BodyFactory = new displayFactoryTwo();
const string = BodyFactory.create(settings);
// console.log(BodyFactory.create(settings));

export {
  BodyFactory,
  settings,
  BodyHTMLString
} 

// BodyFactory.create(settings);
