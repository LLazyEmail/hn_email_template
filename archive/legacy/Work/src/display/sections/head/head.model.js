import misc from 'atherdon-newsletter-js-layouts-misc';
import { headStylesComponent } from 'atherdon-newsletter-js-layouts-outertemplate';

const { fontsComponent } = misc;

export const headModelDefaults = {
  title: 'The Secrets of High-Performing DevOps teams',
  headStyles: headStylesComponent(),
  fonts: fontsComponent(),
};
