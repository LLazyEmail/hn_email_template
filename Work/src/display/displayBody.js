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

export const displayBody = createDisplaySection({
  sectionName: 'displayBody',
  requiredFields: ['footer', 'logoTop', 'logoBottom', 'content', 'previewText'],
  defaults,
  render: (params) => EmailTemplateBodyComponent(params),
});

// settings kept as a named export for backward compatibility
export const settings = {
  component: EmailTemplateBodyComponent,
  params: { ...defaults },
};

export const BodyHTMLString = displayBody();
