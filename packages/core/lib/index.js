import mitt from 'mitt';
import profiler from './profiler.service';

const EVENTS = {
    TEST_COMPLETE: 'test-complete',
    SUITE_COMPLETE: 'suite-complete'
};
const emitter = mitt();
const tests = [];

/**
 * 
 * @param {string} event 
 * @param {function} callback 
 */
export function on(event, callback) {
    return emitter.on(event, callback);
}

/**
 * 
 * @param {string} event 
 * @param {function} callback 
 */
export function off(event, callback) {
    return emitter.off(event, callback);
}

/**
 * Get the count of tests in the suite
 */
export function getNumberOfTests() {
    return tests.length;
}

/**
 * Add a test to the test list.
 * 
 * @param {string} name - Name of the benchmark
 * @param {function} fn - Function to benchmark
 * @param {object} options 
 * @param {number} options.runs - Number of cycles to execute the funcion 
 */
export function benchmark(name, fn, options = {}) {
    tests.push({ name, fn, options, skipped: false });
}

/**
 * Add a test that wont be executed to the test list
 */
export function xbenchmark(name, fn, options = {}) {
    tests.push({ name, fn, options, skipped: true });
}

/**
 * Run all the specs
 */
export function run() {
    const results = [];
    while (tests.length) {
        const test = tests.shift();
        const result = test.skipped ? {} : runBenchmark(test.name, test.fn, test.options);
        emitter.emit(EVENTS.TEST_COMPLETE, { test, result });
        results.push({ test, result });
    }
    emitter.emit(EVENTS.SUITE_COMPLETE, results);
}

/**
 * Compute stats about the given function.
 * 
 * @param {string} name - Name of the benchmark
 * @param {function} fn - Function to benchmark
 * @param {object} options 
 * @param {number} options.runs - Number of cycles to execute the funcion 
 */
export function runBenchmark(name, fn, options = {}) {
    const { runs = 5e4 } = options;
    const executions = [];
    // First run to determine which function use
    const profileFn = profiler.profile(fn) === 0 ? profiler.profileAvg : profiler.profile;

    for (let i = 0; i < runs; i++) {
        const time = profileFn(fn);
        executions.push(time);
    }

    const result = profiler.getStats(executions);
    result.meta = { uns: runs, aprox: (profileFn === profiler.profileAvg) };
    return result;
}