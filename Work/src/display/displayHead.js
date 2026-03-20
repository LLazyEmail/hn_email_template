import misc from 'atherdon-newsletter-js-layouts-misc';
import headStylesComponent from '../components/headStyles';
import headComponent from '../components/headComponent';
import { createDisplaySection } from './createDisplaySection';
import { buildHeadModel } from './models/buildHeadModel';

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
  mapToFactorySettings: buildHeadModel,
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
