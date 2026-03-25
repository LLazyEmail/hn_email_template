import headComponent from '../../../components/headComponent/index';
import { createDisplaySection } from '../../core/createDisplaySection';
import { headModelDefaults } from './head.model';
import { buildHeadModel } from './head.mapper';

export const headSectionConfig = {
  sectionName: 'displayHead',
  requiredFields: ['title', 'headStyles', 'fonts'],
  defaults: headModelDefaults,
  mapToFactorySettings: buildHeadModel,
  render: (params) => headComponent(params),
};

export const displayHead = createDisplaySection(headSectionConfig);

const settings = {
  component: headComponent,
  params: { ...headModelDefaults },
};

const HeadHTMLString = displayHead();

export {
  settings,
  HeadHTMLString,
};
