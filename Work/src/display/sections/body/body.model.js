import bodySubComponents from 'atherdon-newsletter-js-layouts-body';
import {
  innerContentComponent,
  previewTextComponent,
} from '../../../components';
import { FooterHTMLString } from '../footer';

const { logoBottomComponent, logoTopComponent } = bodySubComponents;

export const bodyModelDefaults = {
  footer: FooterHTMLString,
  logoTop: logoTopComponent(),
  logoBottom: logoBottomComponent(),
  content: innerContentComponent(),
  previewText: previewTextComponent('[AMA PREVIEW TEXT]'),
};
