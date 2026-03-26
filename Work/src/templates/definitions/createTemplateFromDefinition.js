/**
 * Build a renderable template from a declarative template definition.
 *
 * @param {object} definition
 * @param {string} definition.id
 * @param {function(*): void} [definition.validateInput]
 * @param {function(*): {variant: string, payload: *}} [definition.mapData]
 * @param {Object.<string, function(*): string>} definition.renderers
 * @returns {{ id: string, render: function(*): string }}
 */
export const createTemplateFromDefinition = (definition) => {
  const {
    id,
    validateInput = () => {},
    mapData = (input) => ({ variant: 'simple', payload: input }),
    renderers,
  } = definition;

  return {
    id,
    render: (input) => {
      validateInput(input);
      const { variant, payload } = mapData(input);
      const renderer = renderers[variant];

      if (typeof renderer !== 'function') {
        throw new Error(
          `[template:${id}] unsupported render variant: ${variant}`
        );
      }

      return renderer(payload);
    },
  };
};
