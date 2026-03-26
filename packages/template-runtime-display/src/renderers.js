export const createSettings = (baseSettings, paramsOverrides = {}) => ({
  ...baseSettings,
  params: {
    ...baseSettings.params,
    ...paramsOverrides,
  },
});

/**
 * Build the simple display template runtime.
 *
 * @param {object} deps
 * @param {Function} deps.createFactory
 * @param {object} deps.bodySettings
 * @param {object} deps.mainSettings
 * @returns {function(string): string}
 */
export const createDisplayTemplateRenderer = ({
  createFactory,
  bodySettings,
  mainSettings,
}) => {
  return (generatedContent) => {
    const bodyRenderSettings = createSettings(bodySettings, {
      content: generatedContent,
    });
    const bodyFactory = createFactory();
    const bodyHTMLString = bodyFactory.create(bodyRenderSettings);

    const mainRenderSettings = createSettings(mainSettings, {
      body: bodyHTMLString,
    });
    const mainFactory = createFactory();
    return mainFactory.create(mainRenderSettings);
  };
};

/**
 * Build the front-matter display template runtime.
 *
 * @param {object} deps
 * @param {Function} deps.createFactory
 * @param {Function} deps.previewTextComponent
 * @param {object} deps.headSettings
 * @param {object} deps.bodySettings
 * @param {object} deps.mainSettings
 * @returns {function({string: string, data: object}): string}
 */
export const createDisplayFrontMatterRenderer = ({
  createFactory,
  previewTextComponent,
  headSettings,
  bodySettings,
  mainSettings,
}) => {
  return ({ string: generatedContent, data }) => {
    const headRenderSettings = createSettings(headSettings, {
      title: data.title,
    });
    const headFactory = createFactory();
    const headHTMLString = headFactory.create(headRenderSettings);

    const bodyRenderSettings = createSettings(bodySettings, {
      content: generatedContent,
      previewText: previewTextComponent(data.preview),
    });
    const bodyFactory = createFactory();
    const bodyHTMLString = bodyFactory.create(bodyRenderSettings);

    const mainRenderSettings = createSettings(mainSettings, {
      head: headHTMLString,
      body: bodyHTMLString,
    });
    const mainFactory = createFactory();
    return mainFactory.create(mainRenderSettings);
  };
};
