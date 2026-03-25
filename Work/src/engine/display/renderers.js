import { displayFactoryTwo } from 'email-template-object';
import { previewTextComponent } from '../../components';
import { settings as headSettings } from '../../display/sections/head';
import { settings as bodySettings } from '../../display/sections/body';
import { settings as mainSettings } from '../../display/sections/main';

export const renderDisplayTemplate = (generatedContent) => {
  // Keep legacy mutation semantics for backward compatibility.
  const bodyFactory = new displayFactoryTwo();
  bodySettings.params.content = generatedContent;
  const bodyHTMLString = bodyFactory.create(bodySettings);

  const mainFactory = new displayFactoryTwo();
  mainSettings.params.body = bodyHTMLString;
  return mainFactory.create(mainSettings);
};

export const renderDisplayFrontMatterTemplate = ({ string: generatedContent, data }) => {
  // Keep legacy mutation semantics for backward compatibility.
  const headFactory = new displayFactoryTwo();
  headSettings.params.title = data.title;
  const headHTMLString = headFactory.create(headSettings);

  const bodyFactory = new displayFactoryTwo();
  bodySettings.params.content = generatedContent;
  bodySettings.params.previewText = previewTextComponent(data.preview);
  const bodyHTMLString = bodyFactory.create(bodySettings);

  const mainFactory = new displayFactoryTwo();
  mainSettings.params.head = headHTMLString;
  mainSettings.params.body = bodyHTMLString;
  return mainFactory.create(mainSettings);
};
