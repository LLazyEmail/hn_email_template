/**
 * Render-agnostic metadata and mapping for the `hn` template.
 *
 * Renderer and validation wiring remain in Work for backward compatibility
 * during modularization.
 */
export const mapHnInputToVariant = (input) => {
  if (input && typeof input === 'object' && input.data !== undefined) {
    return { variant: 'frontMatter', payload: input };
  }
  return { variant: 'simple', payload: input };
};

export const hnPreset = {
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
  mapData: mapHnInputToVariant,
};

export const createHnPresetDefinition = ({
  renderers = {},
  validateInput = () => {},
  mapData = mapHnInputToVariant,
} = {}) => ({
  ...hnPreset,
  renderers,
  validateInput,
  mapData,
});

export default hnPreset;
