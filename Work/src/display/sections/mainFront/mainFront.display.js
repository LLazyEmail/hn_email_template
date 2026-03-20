import { MainComponent } from '../../../components';
import { createDisplaySection } from '../../core/createDisplaySection';
import { mainFrontModelDefaults } from './mainFront.model';
import { buildMainFrontModel } from './mainFront.mapper';

export const mainFrontSectionConfig = {
  sectionName: 'displayMainFront',
  requiredFields: ['head', 'body'],
  defaults: mainFrontModelDefaults,
  mapToFactorySettings: buildMainFrontModel,
  render: (params) => MainComponent(params),
};

export const displayMainFront = createDisplaySection(mainFrontSectionConfig);

export const MainHTMLString = displayMainFront();
