import { displayFactoryTwo } from 'email-template-object';
import { previewTextComponent } from '../../components';
import { settings as headSettings } from '../../display/sections/head';
import { settings as bodySettings } from '../../display/sections/body';
import { settings as mainSettings } from '../../display/sections/main';

const createSettings = (baseSettings, paramsOverrides = {}) => ({
  ...baseSettings,
  params: {
    ...baseSettings.params,
    ...paramsOverrides,
  },
});

export const renderDisplayTemplate = (generatedContent) => {
  const bodyRenderSettings = createSettings(bodySettings, {
    content: generatedContent,
  });
  const bodyFactory = new displayFactoryTwo();
  const bodyHTMLString = bodyFactory.create(bodyRenderSettings);

  const mainRenderSettings = createSettings(mainSettings, {
    body: bodyHTMLString,
  });
  const mainFactory = new displayFactoryTwo();
  return mainFactory.create(mainRenderSettings);
};

export const renderDisplayFrontMatterTemplate = ({
  string: generatedContent,
  data,
}) => {
  const headRenderSettings = createSettings(headSettings, {
    title: data.title,
  });
  const headFactory = new displayFactoryTwo();
  const headHTMLString = headFactory.create(headRenderSettings);

  const bodyRenderSettings = createSettings(bodySettings, {
    content: generatedContent,
    previewText: previewTextComponent(data.preview),
  });
  const bodyFactory = new displayFactoryTwo();
  const bodyHTMLString = bodyFactory.create(bodyRenderSettings);

  const mainRenderSettings = createSettings(mainSettings, {
    head: headHTMLString,
    body: bodyHTMLString,
  });
  const mainFactory = new displayFactoryTwo();
  return mainFactory.create(mainRenderSettings);
};
