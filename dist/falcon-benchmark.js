(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["falcon"] = factory();
	else
		root["falcon"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./lib/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./lib/index.js":
/*!**********************!*\
  !*** ./lib/index.js ***!
  \**********************/
/*! exports provided: on, off, getNumberOfTests, benchmark, xbenchmark, run, runBenchmark */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"on\", function() { return on; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"off\", function() { return off; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getNumberOfTests\", function() { return getNumberOfTests; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"benchmark\", function() { return benchmark; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"xbenchmark\", function() { return xbenchmark; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"run\", function() { return run; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"runBenchmark\", function() { return runBenchmark; });\n/* harmony import */ var mitt__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mitt */ \"./node_modules/mitt/dist/mitt.es.js\");\n\n\nconst EVENTS = {\n    TEST_COMPLETE: 'test-complete',\n    SUITE_COMPLETE: 'suite-complete'\n}\nconst emitter = Object(mitt__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\nconst tests = [];\n\n/**\n * \n * @param {string} event \n * @param {function} callback \n */\nfunction on(event, callback) {\n    return emitter.on(event, callback);\n}\n\n/**\n * \n * @param {string} event \n * @param {function} callback \n */\nfunction off(event, callback) {\n    return emitter.off(event, callback);\n}\n\n/**\n * Get the count of tests in the suite\n */\nfunction getNumberOfTests() {\n    return tests.length;\n}\n\n/**\n * Add a test to the test list.\n * \n * @param {string} name - Name of the benchmark\n * @param {function} fn - Function to benchmark\n * @param {object} options \n * @param {number} options.runs - Number of cycles to execute the funcion \n */\nfunction benchmark(name, fn, options = {}) {\n    tests.push({ name, fn, options, skipped: false });\n}\n\n/**\n * Add a test that wont be executed to the test list\n */\nfunction xbenchmark(name, fn, options = {}) {\n    tests.push({ name, fn, options, skipped: true });\n}\n\n/**\n * Run all the specs\n */\nfunction run() {\n    const results = [];\n    while (tests.length) {\n        const test = tests.shift();\n        const result = test.skipped ? {} : runBenchmark(test.name, test.fn, test.options);\n        emitter.emit(EVENTS.TEST_COMPLETE, { test, result });\n        results.push({ test, result });\n    }\n    emitter.emit(EVENTS.SUITE_COMPLETE, results);\n}\n\n/**\n * Compute stats about the given function.\n * \n * @param {string} name - Name of the benchmark\n * @param {function} fn - Function to benchmark\n * @param {object} options \n * @param {number} options.runs - Number of cycles to execute the funcion \n */\nfunction runBenchmark(name, fn, options = {}) {\n    const { runs = 5e4 } = options;\n    const executions = [];\n    // First run to determine which function use\n    const profileFn = _profile(fn) === 0 ? _profileAvg : _profile;\n\n    for (let i = 0; i < runs; i++) {\n        const time = profileFn(fn);\n        executions.push(time);\n    }\n\n    const result = _getStats(executions);\n    result.meta = { uns: runs, aprox: (profileFn === _profileAvg) };\n    return result;\n}\n\n/**\n * Computes the time needed to run the function\n * @param {function} fn \n */\nfunction _profile(fn) {\n    const start = performance.now();\n    fn();\n    const end = performance.now();\n    return end - start;\n}\n\n/**\n * Computes the time needed to run the function as the avg time of 1000 runs.\n * This function is used when fn takes a small amout of time to be executed\n * @param {function} fn \n */\nfunction _profileAvg(fn) {\n    const start = performance.now();\n    for (let i = 0; i < 1000; i++) {\n        fn();\n    }\n    const end = performance.now();\n    return (end - start) / 1000;\n}\n\n/**\n * Computes statistical parameters from a time array.\n * @param {Array<number>} execution \n */\nfunction _getStats(execution = []) {\n    const total = _sum(execution);\n    const avg = _mean(execution);\n    const variance = _variance(execution, avg);\n    const min = _min(execution);\n    const max = _max(execution);\n    const median = execution.sort()[Math.floor(execution.length / 2)];\n\n    return { avg, median, max, min, variance }\n}\n\nfunction _max(array) {\n    return array.reduce((p, n) => p > n ? p : n, Number.NEGATIVE_INFINITY)\n}\n\nfunction _min(array) {\n    return array.reduce((p, n) => p < n ? p : n, Number.POSITIVE_INFINITY)\n}\n\nfunction _variance(array, mean = _mean(array)) {\n    return _mean(array.map(e => Math.pow(e - mean, 2)));\n}\n\nfunction _sum(array) {\n    return array.reduce((p, n) => p + n, 0);\n}\n\nfunction _mean(array) {\n    const sum = _sum(array);\n    return sum / array.length;\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mYWxjb24vLi9saWIvaW5kZXguanM/OWIwYSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixXQUFXLFNBQVM7QUFDcEI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixXQUFXLFNBQVM7QUFDcEI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixXQUFXLFNBQVM7QUFDcEIsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsT0FBTztBQUNsQjtBQUNBLHlDQUFnRDtBQUNoRCxnQkFBZ0Isb0NBQW9DO0FBQ3BEOztBQUVBO0FBQ0E7QUFDQTtBQUNBLDBDQUFpRDtBQUNqRCxnQkFBZ0IsbUNBQW1DO0FBQ25EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0NBQXdDO0FBQ3hDLDRDQUE0QyxlQUFlO0FBQzNELHNCQUFzQixlQUFlO0FBQ3JDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsV0FBVyxTQUFTO0FBQ3BCLFdBQVcsT0FBTztBQUNsQixXQUFXLE9BQU87QUFDbEI7QUFDQSw0Q0FBbUQ7QUFDbkQsV0FBVyxhQUFhO0FBQ3hCO0FBQ0E7QUFDQTs7QUFFQSxtQkFBbUIsVUFBVTtBQUM3QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxtQkFBbUI7QUFDbkI7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsV0FBVyxTQUFTO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsU0FBUztBQUNwQjtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsVUFBVTtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxXQUFXLGNBQWM7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxZQUFZO0FBQ1o7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6Ii4vbGliL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1pdHQgZnJvbSAnbWl0dCdcblxuY29uc3QgRVZFTlRTID0ge1xuICAgIFRFU1RfQ09NUExFVEU6ICd0ZXN0LWNvbXBsZXRlJyxcbiAgICBTVUlURV9DT01QTEVURTogJ3N1aXRlLWNvbXBsZXRlJ1xufVxuY29uc3QgZW1pdHRlciA9IG1pdHQoKTtcbmNvbnN0IHRlc3RzID0gW107XG5cbi8qKlxuICogXG4gKiBAcGFyYW0ge3N0cmluZ30gZXZlbnQgXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBjYWxsYmFjayBcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG9uKGV2ZW50LCBjYWxsYmFjaykge1xuICAgIHJldHVybiBlbWl0dGVyLm9uKGV2ZW50LCBjYWxsYmFjayk7XG59XG5cbi8qKlxuICogXG4gKiBAcGFyYW0ge3N0cmluZ30gZXZlbnQgXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBjYWxsYmFjayBcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG9mZihldmVudCwgY2FsbGJhY2spIHtcbiAgICByZXR1cm4gZW1pdHRlci5vZmYoZXZlbnQsIGNhbGxiYWNrKTtcbn1cblxuLyoqXG4gKiBHZXQgdGhlIGNvdW50IG9mIHRlc3RzIGluIHRoZSBzdWl0ZVxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0TnVtYmVyT2ZUZXN0cygpIHtcbiAgICByZXR1cm4gdGVzdHMubGVuZ3RoO1xufVxuXG4vKipcbiAqIEFkZCBhIHRlc3QgdG8gdGhlIHRlc3QgbGlzdC5cbiAqIFxuICogQHBhcmFtIHtzdHJpbmd9IG5hbWUgLSBOYW1lIG9mIHRoZSBiZW5jaG1hcmtcbiAqIEBwYXJhbSB7ZnVuY3Rpb259IGZuIC0gRnVuY3Rpb24gdG8gYmVuY2htYXJrXG4gKiBAcGFyYW0ge29iamVjdH0gb3B0aW9ucyBcbiAqIEBwYXJhbSB7bnVtYmVyfSBvcHRpb25zLnJ1bnMgLSBOdW1iZXIgb2YgY3ljbGVzIHRvIGV4ZWN1dGUgdGhlIGZ1bmNpb24gXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBiZW5jaG1hcmsobmFtZSwgZm4sIG9wdGlvbnMgPSB7fSkge1xuICAgIHRlc3RzLnB1c2goeyBuYW1lLCBmbiwgb3B0aW9ucywgc2tpcHBlZDogZmFsc2UgfSk7XG59XG5cbi8qKlxuICogQWRkIGEgdGVzdCB0aGF0IHdvbnQgYmUgZXhlY3V0ZWQgdG8gdGhlIHRlc3QgbGlzdFxuICovXG5leHBvcnQgZnVuY3Rpb24geGJlbmNobWFyayhuYW1lLCBmbiwgb3B0aW9ucyA9IHt9KSB7XG4gICAgdGVzdHMucHVzaCh7IG5hbWUsIGZuLCBvcHRpb25zLCBza2lwcGVkOiB0cnVlIH0pO1xufVxuXG4vKipcbiAqIFJ1biBhbGwgdGhlIHNwZWNzXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBydW4oKSB7XG4gICAgY29uc3QgcmVzdWx0cyA9IFtdO1xuICAgIHdoaWxlICh0ZXN0cy5sZW5ndGgpIHtcbiAgICAgICAgY29uc3QgdGVzdCA9IHRlc3RzLnNoaWZ0KCk7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHRlc3Quc2tpcHBlZCA/IHt9IDogcnVuQmVuY2htYXJrKHRlc3QubmFtZSwgdGVzdC5mbiwgdGVzdC5vcHRpb25zKTtcbiAgICAgICAgZW1pdHRlci5lbWl0KEVWRU5UUy5URVNUX0NPTVBMRVRFLCB7IHRlc3QsIHJlc3VsdCB9KTtcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgdGVzdCwgcmVzdWx0IH0pO1xuICAgIH1cbiAgICBlbWl0dGVyLmVtaXQoRVZFTlRTLlNVSVRFX0NPTVBMRVRFLCByZXN1bHRzKTtcbn1cblxuLyoqXG4gKiBDb21wdXRlIHN0YXRzIGFib3V0IHRoZSBnaXZlbiBmdW5jdGlvbi5cbiAqIFxuICogQHBhcmFtIHtzdHJpbmd9IG5hbWUgLSBOYW1lIG9mIHRoZSBiZW5jaG1hcmtcbiAqIEBwYXJhbSB7ZnVuY3Rpb259IGZuIC0gRnVuY3Rpb24gdG8gYmVuY2htYXJrXG4gKiBAcGFyYW0ge29iamVjdH0gb3B0aW9ucyBcbiAqIEBwYXJhbSB7bnVtYmVyfSBvcHRpb25zLnJ1bnMgLSBOdW1iZXIgb2YgY3ljbGVzIHRvIGV4ZWN1dGUgdGhlIGZ1bmNpb24gXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBydW5CZW5jaG1hcmsobmFtZSwgZm4sIG9wdGlvbnMgPSB7fSkge1xuICAgIGNvbnN0IHsgcnVucyA9IDVlNCB9ID0gb3B0aW9ucztcbiAgICBjb25zdCBleGVjdXRpb25zID0gW107XG4gICAgLy8gRmlyc3QgcnVuIHRvIGRldGVybWluZSB3aGljaCBmdW5jdGlvbiB1c2VcbiAgICBjb25zdCBwcm9maWxlRm4gPSBfcHJvZmlsZShmbikgPT09IDAgPyBfcHJvZmlsZUF2ZyA6IF9wcm9maWxlO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBydW5zOyBpKyspIHtcbiAgICAgICAgY29uc3QgdGltZSA9IHByb2ZpbGVGbihmbik7XG4gICAgICAgIGV4ZWN1dGlvbnMucHVzaCh0aW1lKTtcbiAgICB9XG5cbiAgICBjb25zdCByZXN1bHQgPSBfZ2V0U3RhdHMoZXhlY3V0aW9ucyk7XG4gICAgcmVzdWx0Lm1ldGEgPSB7IHVuczogcnVucywgYXByb3g6IChwcm9maWxlRm4gPT09IF9wcm9maWxlQXZnKSB9O1xuICAgIHJldHVybiByZXN1bHQ7XG59XG5cbi8qKlxuICogQ29tcHV0ZXMgdGhlIHRpbWUgbmVlZGVkIHRvIHJ1biB0aGUgZnVuY3Rpb25cbiAqIEBwYXJhbSB7ZnVuY3Rpb259IGZuIFxuICovXG5mdW5jdGlvbiBfcHJvZmlsZShmbikge1xuICAgIGNvbnN0IHN0YXJ0ID0gcGVyZm9ybWFuY2Uubm93KCk7XG4gICAgZm4oKTtcbiAgICBjb25zdCBlbmQgPSBwZXJmb3JtYW5jZS5ub3coKTtcbiAgICByZXR1cm4gZW5kIC0gc3RhcnQ7XG59XG5cbi8qKlxuICogQ29tcHV0ZXMgdGhlIHRpbWUgbmVlZGVkIHRvIHJ1biB0aGUgZnVuY3Rpb24gYXMgdGhlIGF2ZyB0aW1lIG9mIDEwMDAgcnVucy5cbiAqIFRoaXMgZnVuY3Rpb24gaXMgdXNlZCB3aGVuIGZuIHRha2VzIGEgc21hbGwgYW1vdXQgb2YgdGltZSB0byBiZSBleGVjdXRlZFxuICogQHBhcmFtIHtmdW5jdGlvbn0gZm4gXG4gKi9cbmZ1bmN0aW9uIF9wcm9maWxlQXZnKGZuKSB7XG4gICAgY29uc3Qgc3RhcnQgPSBwZXJmb3JtYW5jZS5ub3coKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEwMDA7IGkrKykge1xuICAgICAgICBmbigpO1xuICAgIH1cbiAgICBjb25zdCBlbmQgPSBwZXJmb3JtYW5jZS5ub3coKTtcbiAgICByZXR1cm4gKGVuZCAtIHN0YXJ0KSAvIDEwMDA7XG59XG5cbi8qKlxuICogQ29tcHV0ZXMgc3RhdGlzdGljYWwgcGFyYW1ldGVycyBmcm9tIGEgdGltZSBhcnJheS5cbiAqIEBwYXJhbSB7QXJyYXk8bnVtYmVyPn0gZXhlY3V0aW9uIFxuICovXG5mdW5jdGlvbiBfZ2V0U3RhdHMoZXhlY3V0aW9uID0gW10pIHtcbiAgICBjb25zdCB0b3RhbCA9IF9zdW0oZXhlY3V0aW9uKTtcbiAgICBjb25zdCBhdmcgPSBfbWVhbihleGVjdXRpb24pO1xuICAgIGNvbnN0IHZhcmlhbmNlID0gX3ZhcmlhbmNlKGV4ZWN1dGlvbiwgYXZnKTtcbiAgICBjb25zdCBtaW4gPSBfbWluKGV4ZWN1dGlvbik7XG4gICAgY29uc3QgbWF4ID0gX21heChleGVjdXRpb24pO1xuICAgIGNvbnN0IG1lZGlhbiA9IGV4ZWN1dGlvbi5zb3J0KClbTWF0aC5mbG9vcihleGVjdXRpb24ubGVuZ3RoIC8gMildO1xuXG4gICAgcmV0dXJuIHsgYXZnLCBtZWRpYW4sIG1heCwgbWluLCB2YXJpYW5jZSB9XG59XG5cbmZ1bmN0aW9uIF9tYXgoYXJyYXkpIHtcbiAgICByZXR1cm4gYXJyYXkucmVkdWNlKChwLCBuKSA9PiBwID4gbiA/IHAgOiBuLCBOdW1iZXIuTkVHQVRJVkVfSU5GSU5JVFkpXG59XG5cbmZ1bmN0aW9uIF9taW4oYXJyYXkpIHtcbiAgICByZXR1cm4gYXJyYXkucmVkdWNlKChwLCBuKSA9PiBwIDwgbiA/IHAgOiBuLCBOdW1iZXIuUE9TSVRJVkVfSU5GSU5JVFkpXG59XG5cbmZ1bmN0aW9uIF92YXJpYW5jZShhcnJheSwgbWVhbiA9IF9tZWFuKGFycmF5KSkge1xuICAgIHJldHVybiBfbWVhbihhcnJheS5tYXAoZSA9PiBNYXRoLnBvdyhlIC0gbWVhbiwgMikpKTtcbn1cblxuZnVuY3Rpb24gX3N1bShhcnJheSkge1xuICAgIHJldHVybiBhcnJheS5yZWR1Y2UoKHAsIG4pID0+IHAgKyBuLCAwKTtcbn1cblxuZnVuY3Rpb24gX21lYW4oYXJyYXkpIHtcbiAgICBjb25zdCBzdW0gPSBfc3VtKGFycmF5KTtcbiAgICByZXR1cm4gc3VtIC8gYXJyYXkubGVuZ3RoO1xufSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./lib/index.js\n");

/***/ }),

/***/ "./node_modules/mitt/dist/mitt.es.js":
/*!*******************************************!*\
  !*** ./node_modules/mitt/dist/mitt.es.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n//      \n// An event handler can take an optional event argument\n// and should not return a value\n                                          \n                                                               \n\n// An array of all currently registered event handlers for a type\n                                            \n                                                            \n// A map of event types and their corresponding event handlers.\n                        \n                                 \n                                   \n  \n\n/** Mitt: Tiny (~200b) functional event emitter / pubsub.\n *  @name mitt\n *  @returns {Mitt}\n */\nfunction mitt(all                 ) {\n\tall = all || Object.create(null);\n\n\treturn {\n\t\t/**\n\t\t * Register an event handler for the given type.\n\t\t *\n\t\t * @param  {String} type\tType of event to listen for, or `\"*\"` for all events\n\t\t * @param  {Function} handler Function to call in response to given event\n\t\t * @memberOf mitt\n\t\t */\n\t\ton: function on(type        , handler              ) {\n\t\t\t(all[type] || (all[type] = [])).push(handler);\n\t\t},\n\n\t\t/**\n\t\t * Remove an event handler for the given type.\n\t\t *\n\t\t * @param  {String} type\tType of event to unregister `handler` from, or `\"*\"`\n\t\t * @param  {Function} handler Handler function to remove\n\t\t * @memberOf mitt\n\t\t */\n\t\toff: function off(type        , handler              ) {\n\t\t\tif (all[type]) {\n\t\t\t\tall[type].splice(all[type].indexOf(handler) >>> 0, 1);\n\t\t\t}\n\t\t},\n\n\t\t/**\n\t\t * Invoke all handlers for the given type.\n\t\t * If present, `\"*\"` handlers are invoked after type-matched handlers.\n\t\t *\n\t\t * @param {String} type  The event type to invoke\n\t\t * @param {Any} [evt]  Any value (object is recommended and powerful), passed to each handler\n\t\t * @memberOf mitt\n\t\t */\n\t\temit: function emit(type        , evt     ) {\n\t\t\t(all[type] || []).slice().map(function (handler) { handler(evt); });\n\t\t\t(all['*'] || []).slice().map(function (handler) { handler(type, evt); });\n\t\t}\n\t};\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (mitt);\n//# sourceMappingURL=mitt.es.js.map\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mYWxjb24vLi9ub2RlX21vZHVsZXMvbWl0dC9kaXN0L21pdHQuZXMuanM/MTRiNyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQ0E7QUFDQTs7OztBQUlBOzs7QUFHQTs7Ozs7O0FBTUE7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjLE9BQU87QUFDckIsY0FBYyxTQUFTO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQSxjQUFjLE9BQU87QUFDckIsY0FBYyxTQUFTO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLE9BQU87QUFDcEIsYUFBYSxJQUFJO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBLHFEQUFxRCxjQUFjLEVBQUU7QUFDckUsb0RBQW9ELG9CQUFvQixFQUFFO0FBQzFFO0FBQ0E7QUFDQTs7QUFFQTtBQUNBIiwiZmlsZSI6Ii4vbm9kZV9tb2R1bGVzL21pdHQvZGlzdC9taXR0LmVzLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gICAgICBcbi8vIEFuIGV2ZW50IGhhbmRsZXIgY2FuIHRha2UgYW4gb3B0aW9uYWwgZXZlbnQgYXJndW1lbnRcbi8vIGFuZCBzaG91bGQgbm90IHJldHVybiBhIHZhbHVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuXG4vLyBBbiBhcnJheSBvZiBhbGwgY3VycmVudGx5IHJlZ2lzdGVyZWQgZXZlbnQgaGFuZGxlcnMgZm9yIGEgdHlwZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuLy8gQSBtYXAgb2YgZXZlbnQgdHlwZXMgYW5kIHRoZWlyIGNvcnJlc3BvbmRpbmcgZXZlbnQgaGFuZGxlcnMuXG4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgXG5cbi8qKiBNaXR0OiBUaW55ICh+MjAwYikgZnVuY3Rpb25hbCBldmVudCBlbWl0dGVyIC8gcHVic3ViLlxuICogIEBuYW1lIG1pdHRcbiAqICBAcmV0dXJucyB7TWl0dH1cbiAqL1xuZnVuY3Rpb24gbWl0dChhbGwgICAgICAgICAgICAgICAgICkge1xuXHRhbGwgPSBhbGwgfHwgT2JqZWN0LmNyZWF0ZShudWxsKTtcblxuXHRyZXR1cm4ge1xuXHRcdC8qKlxuXHRcdCAqIFJlZ2lzdGVyIGFuIGV2ZW50IGhhbmRsZXIgZm9yIHRoZSBnaXZlbiB0eXBlLlxuXHRcdCAqXG5cdFx0ICogQHBhcmFtICB7U3RyaW5nfSB0eXBlXHRUeXBlIG9mIGV2ZW50IHRvIGxpc3RlbiBmb3IsIG9yIGBcIipcImAgZm9yIGFsbCBldmVudHNcblx0XHQgKiBAcGFyYW0gIHtGdW5jdGlvbn0gaGFuZGxlciBGdW5jdGlvbiB0byBjYWxsIGluIHJlc3BvbnNlIHRvIGdpdmVuIGV2ZW50XG5cdFx0ICogQG1lbWJlck9mIG1pdHRcblx0XHQgKi9cblx0XHRvbjogZnVuY3Rpb24gb24odHlwZSAgICAgICAgLCBoYW5kbGVyICAgICAgICAgICAgICApIHtcblx0XHRcdChhbGxbdHlwZV0gfHwgKGFsbFt0eXBlXSA9IFtdKSkucHVzaChoYW5kbGVyKTtcblx0XHR9LFxuXG5cdFx0LyoqXG5cdFx0ICogUmVtb3ZlIGFuIGV2ZW50IGhhbmRsZXIgZm9yIHRoZSBnaXZlbiB0eXBlLlxuXHRcdCAqXG5cdFx0ICogQHBhcmFtICB7U3RyaW5nfSB0eXBlXHRUeXBlIG9mIGV2ZW50IHRvIHVucmVnaXN0ZXIgYGhhbmRsZXJgIGZyb20sIG9yIGBcIipcImBcblx0XHQgKiBAcGFyYW0gIHtGdW5jdGlvbn0gaGFuZGxlciBIYW5kbGVyIGZ1bmN0aW9uIHRvIHJlbW92ZVxuXHRcdCAqIEBtZW1iZXJPZiBtaXR0XG5cdFx0ICovXG5cdFx0b2ZmOiBmdW5jdGlvbiBvZmYodHlwZSAgICAgICAgLCBoYW5kbGVyICAgICAgICAgICAgICApIHtcblx0XHRcdGlmIChhbGxbdHlwZV0pIHtcblx0XHRcdFx0YWxsW3R5cGVdLnNwbGljZShhbGxbdHlwZV0uaW5kZXhPZihoYW5kbGVyKSA+Pj4gMCwgMSk7XG5cdFx0XHR9XG5cdFx0fSxcblxuXHRcdC8qKlxuXHRcdCAqIEludm9rZSBhbGwgaGFuZGxlcnMgZm9yIHRoZSBnaXZlbiB0eXBlLlxuXHRcdCAqIElmIHByZXNlbnQsIGBcIipcImAgaGFuZGxlcnMgYXJlIGludm9rZWQgYWZ0ZXIgdHlwZS1tYXRjaGVkIGhhbmRsZXJzLlxuXHRcdCAqXG5cdFx0ICogQHBhcmFtIHtTdHJpbmd9IHR5cGUgIFRoZSBldmVudCB0eXBlIHRvIGludm9rZVxuXHRcdCAqIEBwYXJhbSB7QW55fSBbZXZ0XSAgQW55IHZhbHVlIChvYmplY3QgaXMgcmVjb21tZW5kZWQgYW5kIHBvd2VyZnVsKSwgcGFzc2VkIHRvIGVhY2ggaGFuZGxlclxuXHRcdCAqIEBtZW1iZXJPZiBtaXR0XG5cdFx0ICovXG5cdFx0ZW1pdDogZnVuY3Rpb24gZW1pdCh0eXBlICAgICAgICAsIGV2dCAgICAgKSB7XG5cdFx0XHQoYWxsW3R5cGVdIHx8IFtdKS5zbGljZSgpLm1hcChmdW5jdGlvbiAoaGFuZGxlcikgeyBoYW5kbGVyKGV2dCk7IH0pO1xuXHRcdFx0KGFsbFsnKiddIHx8IFtdKS5zbGljZSgpLm1hcChmdW5jdGlvbiAoaGFuZGxlcikgeyBoYW5kbGVyKHR5cGUsIGV2dCk7IH0pO1xuXHRcdH1cblx0fTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgbWl0dDtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPW1pdHQuZXMuanMubWFwXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/mitt/dist/mitt.es.js\n");

/***/ })

/******/ });
});