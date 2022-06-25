import objectAssign from 'object-assign';

const renderTemplate = (element, options, generateCustomTemplate) => {
  const bodyContent = ReactDOMServer.renderToStaticMarkup(element);
  const minifiedHeadCSS = new CleanCSS().minify(options.headCSS || '').styles;
  options = objectAssign({}, {
    lang: sanitizer.escape(options.lang),
    dir: sanitizer.escape(options.dir),
    title: sanitizer.escape(options.title),
    previewText: sanitizer.escape(options.previewText),
    headCSS: CSS.raiseOnUnsafeCSS(minifiedHeadCSS, 'headCSS'),
    bgColor: sanitizer.escape(options.bgColor)
  }, {bodyContent: bodyContent});
  return generateCustomTemplate ? (
    generateCustomTemplate(options)
  ) : HTML4.generateDefaultTemplate(options);
};
