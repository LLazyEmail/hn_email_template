import { MainComponent } from '../components';
import { HeadHTMLString } from './displayHead';
import { BodyHTMLString } from './displayBody';
import { createDisplaySection } from './createDisplaySection';

const defaults = {
  head: HeadHTMLString,
  body: BodyHTMLString,
};

export const mainSectionConfig = {
  sectionName: 'displayMain',
  requiredFields: ['head', 'body'],
  defaults,
  mapToFactorySettings: (input) => ({
    head: input.head,
    body: input.body,
  }),
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
