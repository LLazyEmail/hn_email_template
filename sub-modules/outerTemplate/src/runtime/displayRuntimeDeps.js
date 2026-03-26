import { renderDisplayTemplate, renderDisplayFrontMatterTemplate } from '../../../../Work/src/engine/display';
import { HeadHTMLString } from '../../../../Work/src/display/sections/head';
import { BodyHTMLString } from '../../../../Work/src/display/sections/body';
import { FooterHTMLString } from '../../../../Work/src/display/sections/footer';
import { MainHTMLString } from '../../../../Work/src/display/sections/main';
import { buildHnDefinition } from '../../../../Work/src/templates/definitions/hn-preset-adapters';

const displayDeps = {
  headString: HeadHTMLString,
  bodyString: BodyHTMLString,
  footerString: FooterHTMLString,
  mainString: MainHTMLString,
};

export {
  renderDisplayTemplate,
  renderDisplayFrontMatterTemplate,
  displayDeps,
  buildHnDefinition,
};
