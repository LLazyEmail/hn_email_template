import {
  renderDisplayTemplate,
  renderDisplayFrontMatterTemplate,
} from '../../engine/display';

/**
 * Declarative definition for the `hn-without-ads` template.
 *
 * Phase 1 introduces metadata + mapData while keeping existing rendering
 * behavior unchanged.
 */
const hnWithoutAdsDefinition = {
  id: 'hn-without-ads',
  sections: {
    head: 'displayHead',
    body: 'displayBody',
    footer: 'displayFooter',
    main: 'displayMain',
  },
  featureFlags: {
    ads: false,
    blocks: ['hero', 'image-grid'],
  },
  mapData: (input) => {
    if (input && typeof input === 'object' && input.data !== undefined) {
      return { variant: 'frontMatter', payload: input };
    }
    return { variant: 'simple', payload: input };
  },
  renderers: {
    simple: renderDisplayTemplate,
    frontMatter: renderDisplayFrontMatterTemplate,
  },
};

export default hnWithoutAdsDefinition;
