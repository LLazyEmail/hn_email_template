/**
 * Creates a reusable display section function that encapsulates the common
 * display-layer flow: merging defaults, validating required fields, mapping
 * input to renderer settings, and invoking the renderer.
 *
 * @param {object} config
 * @param {string} config.sectionName - Section name used in error messages.
 * @param {string[]} [config.requiredFields=[]] - Fields that must be non-null/non-empty.
 * @param {object} [config.defaults={}] - Default input values merged before validation.
 * @param {function} [config.mapToFactorySettings] - Maps normalized input to renderer params.
 * @param {function} config.render - Renderer/component callback that produces HTML.
 * @returns {function} A display section function that accepts optional input overrides.
 */
export function createDisplaySection({
  sectionName,
  requiredFields = [],
  defaults = {},
  mapToFactorySettings,
  render,
}) {
  return function displaySection(input = {}) {
    const normalized = { ...defaults, ...input };

    for (const field of requiredFields) {
      const value = normalized[field];
      if (value === undefined || value === null || value === '') {
        throw new Error(`[${sectionName}] missing required field: ${field}`);
      }
    }

    const settings = mapToFactorySettings
      ? mapToFactorySettings(normalized)
      : normalized;

    return render(settings);
  };
}
