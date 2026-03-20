import { MainComponent } from '../components';
import { HeadHTMLString } from './displayHead';
import { BodyHTMLString } from './displayBody';
import { createDisplaySection } from './createDisplaySection';
import { buildMainModel } from './models/buildMainModel';

const defaults = {
  head: HeadHTMLString,
  body: BodyHTMLString,
};

export const mainSectionConfig = {
  sectionName: 'displayMain',
  requiredFields: ['head', 'body'],
  defaults,
  mapToFactorySettings: buildMainModel,
  render: (params) => MainComponent(params),
};

export const displayMain = createDisplaySection(mainSectionConfig);

const settings = {
  component: MainComponent,
  params: { ...defaults },
};

const MainHTMLString = displayMain();

export {
  settings,
  MainHTMLString,
};
