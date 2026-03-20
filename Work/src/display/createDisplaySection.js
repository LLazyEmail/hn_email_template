import { validateInput } from './validation/validateInput';
import { runPipeline } from './pipeline/runPipeline';

/**
 * Creates a reusable display section function that encapsulates the common
 * display-layer pipeline:
 *
 *   input → normalize → validate → buildModel → render → postProcess (optional)
 *
 * Each stage is explicit and named, enabling clear error attribution and
 * individual testability.
 *
 * @param {object} config
 * @param {string} config.sectionName - Section name used in error messages.
 * @param {string[]} [config.requiredFields=[]] - Fields that must be non-null/non-empty.
 * @param {object} [config.defaults={}] - Default input values merged before validation.
 * @param {function} [config.mapToFactorySettings] - Maps normalized input to renderer params.
 * @param {function} config.render - Renderer/component callback that produces HTML.
 * @param {function} [config.postProcess] - Optional post-processing applied to rendered HTML.
 * @returns {function} A display section function that accepts optional input overrides.
 */
export function createDisplaySection({
  sectionName,
  requiredFields = [],
  defaults = {},
  mapToFactorySettings,
  render,
  postProcess,
}) {
  const stages = [
    {
      name: 'normalize',
      fn: (input) => ({ ...defaults, ...input }),
    },
    {
      name: 'validate',
      fn: (normalized) => {
        validateInput(sectionName, normalized, requiredFields);
        return normalized;
      },
    },
    {
      name: 'buildModel',
      fn: (normalized) =>
        mapToFactorySettings ? mapToFactorySettings(normalized) : normalized,
    },
    {
      name: 'render',
      fn: (model) => render(model),
    },
  ];

  if (postProcess) {
    stages.push({
      name: 'postProcess',
      fn: (html) => postProcess(html),
    });
  }

  return function displaySection(input = {}) {
    return runPipeline(stages, input, { sectionName });
  };
}
