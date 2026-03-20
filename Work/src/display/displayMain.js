import { MainComponent } from '../components';
import { HeadHTMLString } from './displayHead';
import { BodyHTMLString } from './displayBody';
import { createDisplaySection } from './createDisplaySection';

const defaults = {
  head: HeadHTMLString,
  body: BodyHTMLString,
};

export const displayMain = createDisplaySection({
  sectionName: 'displayMain',
  requiredFields: ['head', 'body'],
  defaults,
  render: (params) => MainComponent(params),
});

const settings = {
  component: MainComponent,
  params: { ...defaults },
};

const MainHTMLString = displayMain();

export {
  settings,
  MainHTMLString,
};
