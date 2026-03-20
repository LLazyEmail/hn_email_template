import misc from 'atherdon-newsletter-js-layouts-misc';
import headStylesComponent from '../components/headStyles';
import headComponent from '../components/headComponent';
import { createDisplaySection } from './createDisplaySection';

const { fontsComponent } = misc;

const defaults = {
  title: 'The Secrets of High-Performing DevOps teams',
  headStyles: headStylesComponent(),
  fonts: fontsComponent(),
};

export const headSectionConfig = {
  sectionName: 'displayHead',
  requiredFields: ['title', 'headStyles', 'fonts'],
  defaults,
  mapToFactorySettings: (input) => ({
    title: input.title,
    headStyles: input.headStyles,
    fonts: input.fonts,
  }),
  render: (params) => headComponent(params),
};

export const displayHead = createDisplaySection(headSectionConfig);

const settings = {
  component: headComponent,
  params: { ...defaults },
};

const HeadHTMLString = displayHead();

export {
  settings,
  HeadHTMLString,
};
