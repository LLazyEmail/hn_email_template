import {
  renderDisplayTemplate,
  renderDisplayFrontMatterTemplate,
} from '../../engine/display';

/**
 * Declarative definition for the `hn` template.
 *
 * Phase 1 keeps behavior parity while moving template configuration into
 * first-class definition files.
 */
const hnDefinition = {
  id: 'hn',
  sections: {
    head: 'displayHead',
    body: 'displayBody',
    footer: 'displayFooter',
    main: 'displayMain',
  },
  featureFlags: {
    ads: true,
    blocks: ['hero', 'ads', 'image-grid'],
  },
  renderers: {
    simple: renderDisplayTemplate,
    frontMatter: renderDisplayFrontMatterTemplate,
  },
  mapData: (input) => {
    if (input && typeof input === 'object' && input.data !== undefined) {
      return { variant: 'frontMatter', payload: input };
    }
    return { variant: 'simple', payload: input };
  },
};

export default hnDefinition;
