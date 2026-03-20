import { MainComponent } from '../../../components';
import { createDisplaySection } from '../../core/createDisplaySection';
import { mainModelDefaults } from './main.model';
import { buildMainModel } from './main.mapper';

export const mainSectionConfig = {
  sectionName: 'displayMain',
  requiredFields: ['head', 'body'],
  defaults: mainModelDefaults,
  mapToFactorySettings: buildMainModel,
  render: (params) => MainComponent(params),
};

export const displayMain = createDisplaySection(mainSectionConfig);

const settings = {
  component: MainComponent,
  params: { ...mainModelDefaults },
};

const MainHTMLString = displayMain();

export {
  settings,
  MainHTMLString,
};
