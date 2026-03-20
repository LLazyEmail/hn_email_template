// import { displayFactoryTwo, factoryFour } from 'email-template-object';
import bodySubComponents from 'atherdon-newsletter-js-layouts-body';
import {
  EmailTemplateBodyComponent,
  innerContentComponent,
  previewTextComponent,
} from '../components';
import { FooterHTMLString } from './displayFooter';
import { createDisplaySection } from './createDisplaySection';

const { logoBottomComponent, logoTopComponent } = bodySubComponents;

const defaults = {
  footer: FooterHTMLString,
  logoTop: logoTopComponent(),
  logoBottom: logoBottomComponent(),
  content: innerContentComponent(),
  previewText: previewTextComponent('[AMA PREVIEW TEXT]'),
};

export const bodySectionConfig = {
  sectionName: 'displayBody',
  requiredFields: ['footer', 'logoTop', 'logoBottom', 'content', 'previewText'],
  defaults,
  mapToFactorySettings: (input) => ({
    footer: input.footer,
    logoTop: input.logoTop,
    logoBottom: input.logoBottom,
    content: input.content,
    previewText: input.previewText,
  }),
  render: (params) => EmailTemplateBodyComponent(params),
};

export const displayBody = createDisplaySection(bodySectionConfig);

const settings = {
  component: EmailTemplateBodyComponent,
  params: { ...defaults },
};

const BodyHTMLString = displayBody();

export {
  settings,
  BodyHTMLString,
};
