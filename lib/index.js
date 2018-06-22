/**
 * Compute stats about the given function.
 * 
 * @param {string} name - Name of the benchmark
 * @param {function} fn - Function to benchmark
 * @param {object} options 
 * @param {number} options.runs - Number of cycles to execute the funcion 
 */
export function benchmark(name, fn, options = {}) {
    const { runs = 5e4 } = options;
    const executions = [];
    // First run to determine which function use
    const profileFn = _profile(fn) === 0 ? _profileAvg : _profile;

    for (let i = 0; i < runs; i++) {
        const time = profileFn(fn);
        executions.push(time);
    }

    const result = _getStats(executions);
    result.meta = { uns: runs, aprox: (profileFn === _profileAvg) };
    return result;
}

/**
 * Computes the time needed to run the function
 * @param {function} fn 
 */
function _profile(fn) {
    const start = performance.now();
    fn();
    const end = performance.now();
    return end - start;
}

/**
 * Computes the time needed to run the function as the avg time of 1000 runs.
 * This function is used when fn takes a small amout of time to be executed
 * @param {function} fn 
 */
function _profileAvg(fn) {
    const start = performance.now();
    for (let i = 0; i < 1000; i++) {
        fn();
    }
    const end = performance.now();
    return (end - start) / 1000;
}

/**
 * Computes statistical parameters from a time array.
 * @param {Array<number>} execution 
 */
function _getStats(execution = []) {
    const total = _sum(execution);
    const avg = _mean(execution);
    const variance = _variance(execution, avg);
    const min = _min(execution);
    const max = _max(execution);
    const median = execution.sort()[Math.floor(execution.length / 2)];

    return { avg, median, max, min, variance }
}

function _max(array) {
    return array.reduce((p, n) => p > n ? p : n, Number.NEGATIVE_INFINITY)
}

function _min(array) {
    return array.reduce((p, n) => p < n ? p : n, Number.POSITIVE_INFINITY)
}

function _variance(array, mean = _mean(array)) {
    return _mean(array.map(e => Math.pow(e - mean, 2)));
}

function _sum(array) {
    return array.reduce((p, n) => p + n, 0);
}

function _mean(array) {
    const sum = _sum(array);
    return sum / array.length;
}