import { MainComponent } from '../components';
import { HeadHTMLString } from './displayHead';
import { BodyHTMLString } from './displayBody';
import { createDisplaySection } from './createDisplaySection';

const defaults = {
  head: HeadHTMLString,
  body: BodyHTMLString,
};

export const mainFrontSectionConfig = {
  sectionName: 'displayMainFront',
  requiredFields: ['head', 'body'],
  defaults,
  mapToFactorySettings: (input) => ({
    head: input.head,
    body: input.body,
  }),
  render: (params) => MainComponent(params),
};

export const displayMainFront = createDisplaySection(mainFrontSectionConfig);

export const MainHTMLString = displayMainFront();
