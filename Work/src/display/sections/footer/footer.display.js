import footerComponent from '../../../components/footer/index';
import { createDisplaySection } from '../../core/createDisplaySection';
import { footerModelDefaults } from './footer.model';
import { buildFooterModel } from './footer.mapper';

export const footerSectionConfig = {
  sectionName: 'displayFooter',
  requiredFields: ['address', 'sponsor', 'copyright', 'unsubscribe'],
  defaults: footerModelDefaults,
  mapToFactorySettings: buildFooterModel,
  render: (params) => footerComponent(params),
};

export const displayFooter = createDisplaySection(footerSectionConfig);

const settings = {
  component: footerComponent,
  params: { ...footerModelDefaults },
};

const FooterHTMLString = displayFooter();

export {
  settings,
  FooterHTMLString,
};
