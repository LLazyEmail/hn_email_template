import { MainComponent } from '../components';
import { HeadHTMLString } from './displayHead';
import { BodyHTMLString } from './displayBody';
import { createDisplaySection } from './createDisplaySection';

const defaults = {
  head: HeadHTMLString,
  body: BodyHTMLString,
};

export const displayMainFront = createDisplaySection({
  sectionName: 'displayMainFront',
  requiredFields: ['head', 'body'],
  defaults,
  render: (params) => MainComponent(params),
});

export const MainHTMLString = displayMainFront();
