import { runPipeline } from '../../src/display/core/runDisplayPipeline';

// ---------------------------------------------------------------------------
// runPipeline — basic execution
// ---------------------------------------------------------------------------

describe('runPipeline — empty stages', () => {
  test('returns the input value unchanged when stages array is empty', () => {
    expect(runPipeline([], 'hello')).toBe('hello');
  });

  test('returns an object input unchanged when stages array is empty', () => {
    const input = { foo: 'bar' };
    expect(runPipeline([], input)).toBe(input);
  });
});

describe('runPipeline — single stage', () => {
  test('runs one stage and returns its output', () => {
    const double = { name: 'double', fn: (x) => x * 2 };
    expect(runPipeline([double], 3)).toBe(6);
  });

  test('stage receives the initial input value', () => {
    let received;
    const capture = { name: 'capture', fn: (v) => { received = v; return v; } };
    runPipeline([capture], 42);
    expect(received).toBe(42);
  });
});

describe('runPipeline — sequential chaining', () => {
  test('pipes output of each stage into the next', () => {
    const stages = [
      { name: 'add1', fn: (x) => x + 1 },
      { name: 'times2', fn: (x) => x * 2 },
      { name: 'minus3', fn: (x) => x - 3 },
    ];
    // (5 + 1) * 2 - 3 = 9
    expect(runPipeline(stages, 5)).toBe(9);
  });

  test('works with object values spread across stages', () => {
    const stages = [
      { name: 'addFoo', fn: (obj) => ({ ...obj, foo: 'bar' }) },
      { name: 'addBaz', fn: (obj) => ({ ...obj, baz: 'qux' }) },
    ];
    const result = runPipeline(stages, { existing: 1 });
    expect(result).toEqual({ existing: 1, foo: 'bar', baz: 'qux' });
  });

  test('each stage only sees the output of its predecessor', () => {
    const log = [];
    const stages = [
      { name: 's1', fn: (v) => { log.push(['s1', v]); return v + '-s1'; } },
      { name: 's2', fn: (v) => { log.push(['s2', v]); return v + '-s2'; } },
    ];
    runPipeline(stages, 'start');
    expect(log).toEqual([['s1', 'start'], ['s2', 'start-s1']]);
  });
});

// ---------------------------------------------------------------------------
// runPipeline — context passing
// ---------------------------------------------------------------------------

describe('runPipeline — context', () => {
  test('passes context as the second argument to every stage', () => {
    const ctx = { sectionName: 'mySection' };
    const capturedContexts = [];
    const stages = [
      { name: 's1', fn: (v, c) => { capturedContexts.push(c); return v; } },
      { name: 's2', fn: (v, c) => { capturedContexts.push(c); return v; } },
    ];
    runPipeline(stages, 'value', ctx);
    expect(capturedContexts).toHaveLength(2);
    expect(capturedContexts[0]).toBe(ctx);
    expect(capturedContexts[1]).toBe(ctx);
  });

  test('defaults context to {} when not provided', () => {
    let receivedCtx;
    const stages = [{ name: 'capture', fn: (v, c) => { receivedCtx = c; return v; } }];
    runPipeline(stages, 'x');
    expect(receivedCtx).toEqual({});
  });

  test('context is the same object reference throughout the pipeline', () => {
    const ctx = { count: 0 };
    const refs = [];
    const stages = [
      { name: 's1', fn: (v, c) => { refs.push(c); return v; } },
      { name: 's2', fn: (v, c) => { refs.push(c); return v; } },
    ];
    runPipeline(stages, null, ctx);
    expect(refs[0]).toBe(refs[1]);
  });
});

// ---------------------------------------------------------------------------
// runPipeline — error handling
// ---------------------------------------------------------------------------

describe('runPipeline — error propagation', () => {
  test('re-throws errors thrown inside a stage', () => {
    const stages = [
      { name: 'boom', fn: () => { throw new Error('stage error'); } },
    ];
    expect(() => runPipeline(stages, null)).toThrow('stage error');
  });

  test('stops execution at the failing stage', () => {
    const log = [];
    const stages = [
      { name: 's1', fn: (v) => { log.push('s1'); return v; } },
      { name: 's2', fn: () => { log.push('s2'); throw new Error('fail'); } },
      { name: 's3', fn: (v) => { log.push('s3'); return v; } },
    ];
    expect(() => runPipeline(stages, null)).toThrow('fail');
    expect(log).toEqual(['s1', 's2']);
  });
});

describe('runPipeline — error metadata enrichment', () => {
  test('adds pipelineStage to the thrown error', () => {
    const stages = [
      { name: 'validate', fn: () => { throw new Error('invalid'); } },
    ];
    let caught;
    try { runPipeline(stages, null); } catch (e) { caught = e; }
    expect(caught.pipelineStage).toBe('validate');
  });

  test('adds pipelineSection from context to the thrown error', () => {
    const stages = [
      { name: 'render', fn: () => { throw new Error('render failed'); } },
    ];
    let caught;
    try { runPipeline(stages, null, { sectionName: 'displayMain' }); } catch (e) { caught = e; }
    expect(caught.pipelineSection).toBe('displayMain');
  });

  test('does not override pipelineStage when already set on the error', () => {
    const err = new Error('already tagged');
    err.pipelineStage = 'innerStage';
    const stages = [
      { name: 'outerStage', fn: () => { throw err; } },
    ];
    let caught;
    try { runPipeline(stages, null); } catch (e) { caught = e; }
    expect(caught.pipelineStage).toBe('innerStage');
  });

  test('does not override pipelineSection when already set on the error', () => {
    const err = new Error('tagged');
    err.pipelineStage = 'innerStage';
    err.pipelineSection = 'innerSection';
    const stages = [
      { name: 'outerStage', fn: () => { throw err; } },
    ];
    let caught;
    try { runPipeline(stages, null, { sectionName: 'outerSection' }); } catch (e) { caught = e; }
    expect(caught.pipelineSection).toBe('innerSection');
  });

  test('does not mutate the error message', () => {
    const stages = [
      { name: 'normalize', fn: () => { throw new Error('original message'); } },
    ];
    let caught;
    try { runPipeline(stages, null, { sectionName: 'displayFooter' }); } catch (e) { caught = e; }
    expect(caught.message).toBe('original message');
  });

  test('does not set pipelineSection when context has no sectionName', () => {
    const stages = [
      { name: 'normalize', fn: () => { throw new Error('oops'); } },
    ];
    let caught;
    try { runPipeline(stages, null); } catch (e) { caught = e; }
    expect(caught.pipelineStage).toBe('normalize');
    expect('pipelineSection' in caught).toBe(false);
  });
});
