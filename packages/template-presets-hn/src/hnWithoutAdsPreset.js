export const mapHnWithoutAdsInputToVariant = (input) => {
  if (input && typeof input === 'object' && input.data !== undefined) {
    return { variant: 'frontMatter', payload: input };
  }
  return { variant: 'simple', payload: input };
};

export const hnWithoutAdsPreset = {
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
  mapData: mapHnWithoutAdsInputToVariant,
};

export const createHnWithoutAdsPresetDefinition = (overrides = {}) => ({
  ...hnWithoutAdsPreset,
  ...overrides,
});

export default hnWithoutAdsPreset;
