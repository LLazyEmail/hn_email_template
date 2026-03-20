// import { displayFactoryTwo } from 'email-template-object';
import { innerContentComponent } from '../components';
import { buttonComponent2 } from 'html-typography-tags';
import { createDisplaySection } from './createDisplaySection';

const config = { id: '12', href: 'google.com' };

console.log(buttonComponent2(config));

export const displayContent = createDisplaySection({
  sectionName: 'displayContent',
  render: () => innerContentComponent(),
});

export const ContentHTMLString = displayContent();

export default ContentHTMLString;
