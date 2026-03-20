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

export const displayHead = createDisplaySection({
  sectionName: 'displayHead',
  requiredFields: ['title', 'headStyles', 'fonts'],
  defaults,
  render: (params) => headComponent(params),
});

const settings = {
  component: headComponent,
  params: { ...defaults },
};

const HeadHTMLString = displayHead();

export {
  settings,
  HeadHTMLString,
};
