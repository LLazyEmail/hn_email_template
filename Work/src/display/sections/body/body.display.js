// import { displayFactoryTwo, factoryFour } from 'email-template-object';
import { EmailTemplateBodyComponent } from '../../../components';
import { createDisplaySection } from '../../core/createDisplaySection';
import { bodyModelDefaults } from './body.model';
import { buildBodyModel } from './body.mapper';

export const bodySectionConfig = {
  sectionName: 'displayBody',
  requiredFields: ['footer', 'logoTop', 'logoBottom', 'content', 'previewText'],
  defaults: bodyModelDefaults,
  mapToFactorySettings: buildBodyModel,
  render: (params) => EmailTemplateBodyComponent(params),
};

export const displayBody = createDisplaySection(bodySectionConfig);

const settings = {
  component: EmailTemplateBodyComponent,
  params: { ...bodyModelDefaults },
};

const BodyHTMLString = displayBody();

export {
  settings,
  BodyHTMLString,
};
