/**
 * Core pipeline runner for the display layer.
 *
 * Executes a sequence of named stages, piping the output of each
 * stage into the input of the next.  Errors thrown inside a stage
 * are enriched with `pipelineStage` and `pipelineSection` metadata
 * so that callers and tests can identify exactly where a failure
 * occurred without altering the original error message.
 *
 * Stage signature: `(value, context) => nextValue`
 *
 * @param {Array<{name: string, fn: function}>} stages
 *   Ordered list of named pipeline stages.
 * @param {*} input
 *   Initial value fed into the first stage.
 * @param {object} [context={}]
 *   Shared read-only context forwarded to every stage (e.g. `{ sectionName }`).
 * @returns {*} The value produced by the last stage.
 */
export function runPipeline(stages, input, context = {}) {
  let value = input;
  for (const { name, fn } of stages) {
    try {
      value = fn(value, context);
    } catch (err) {
      if (!err.pipelineStage) {
        err.pipelineStage = name;
        if (context.sectionName) {
          err.pipelineSection = context.sectionName;
        }
      }
      throw err;
    }
  }
  return value;
}
