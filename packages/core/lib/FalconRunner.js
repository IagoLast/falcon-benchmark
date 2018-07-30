import mitt from 'mitt';
import profiler from './profiler.service';
import EVENTS from './events';

export class FalconRunner {
  constructor() {
    this._emitter = mitt();
    this._tests = [];
  }

  /**
 * 
 * @param {string} event 
 * @param {function} callback 
 */
  on(event, callback) {
    return this._emitter.on(event, callback);
  }

  /**
   * 
   * @param {string} event 
   * @param {function} callback 
   */
  off(event, callback) {
    return this._emitter.off(event, callback);
  }

  /**
   * Get the count of this._tests in the suite
   */
  getNumberOfTests() {
    return this._tests.length;
  }

  /**
   * Add a test to the test list.
   * 
   * @param {string} name - Name of the benchmark
   * @param {function} fn - Function to benchmark
   * @param {object} options 
   * @param {number} options.runs - Number of cycles to execute the funcion 
   */
  benchmark(name, fn, options = {}) {
    this._tests.push({ name, fn, options, skipped: false });
  }

  /**
   * Add a test that wont be executed to the test list
   */
  xbenchmark(name, fn, options = {}) {
    this._tests.push({ name, fn, options, skipped: true });
  }

  /**
   * Run all the specs
   */
  async run() {
    const results = [];
    while (this._tests.length) {
      const test = this._tests.shift();
      const result = test.skipped ? {} : await this.runBenchmark(test.name, test.fn, test.options);
      if (result.error) {
        this._emitter.emit(EVENTS.TEST_FAILED, { test, result });
      } else {
        this._emitter.emit(EVENTS.TEST_COMPLETE, { test, result });
      }
      results.push({ test, result });
    }
    this._emitter.emit(EVENTS.SUITE_COMPLETE, results);
  }

  /**
   * Compute stats about the given function.
   * 
   * @param {string} name - Name of the benchmark
   * @param {function} fn - Function to benchmark
   * @param {object} options 
   * @param {number} options.runs - Number of cycles to execute the funcion 
   */
  async runBenchmark(name, fn, options = {}) {
    let result;
    try {
      const { runs = 5000 } = options;
      const executions = [];

      for (let i = 0; i < runs; i++) {
        const time = await profiler.profile(fn, options);
        executions.push(time);
      }

      result = profiler.getStats(executions);
      result.meta = { runs };
    } catch (error) {
      return { error: { message: error.message, stack: error.stack } };
    }
    return result;
  }
}

export default FalconRunner;