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
/*! exports provided: benchmark */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"benchmark\", function() { return benchmark; });\n/**\n * Compute stats about the given function.\n * \n * @param {string} name - Name of the benchmark\n * @param {function} fn - Function to benchmark\n * @param {object} options \n * @param {number} options.runs - Number of cycles to execute the funcion \n */\nfunction benchmark(name, fn, options = {}) {\n    const { runs = 5e4 } = options;\n    const executions = [];\n    // First run to determine which function use\n    const profileFn = _profile(fn) === 0 ? _profileAvg : _profile;\n\n    for (let i = 0; i < runs; i++) {\n        const time = profileFn(fn);\n        executions.push(time);\n    }\n\n    const result = _getStats(executions);\n    result.meta = { uns: runs, aprox: (profileFn === _profileAvg) };\n    return result;\n}\n\n/**\n * Computes the time needed to run the function\n * @param {function} fn \n */\nfunction _profile(fn) {\n    const start = performance.now();\n    fn();\n    const end = performance.now();\n    return end - start;\n}\n\n/**\n * Computes the time needed to run the function as the avg time of 1000 runs.\n * This function is used when fn takes a small amout of time to be executed\n * @param {function} fn \n */\nfunction _profileAvg(fn) {\n    const start = performance.now();\n    for (let i = 0; i < 1000; i++) {\n        fn();\n    }\n    const end = performance.now();\n    return (end - start) / 1000;\n}\n\n/**\n * Computes statistical parameters from a time array.\n * @param {Array<number>} execution \n */\nfunction _getStats(execution = []) {\n    const total = _sum(execution);\n    const avg = _mean(execution);\n    const variance = _variance(execution, avg);\n    const min = _min(execution);\n    const max = _max(execution);\n    const median = execution.sort()[Math.floor(execution.length / 2)];\n\n    return { avg, median, max, min, variance }\n}\n\nfunction _max(array) {\n    return array.reduce((p, n) => p > n ? p : n, Number.NEGATIVE_INFINITY)\n}\n\nfunction _min(array) {\n    return array.reduce((p, n) => p < n ? p : n, Number.POSITIVE_INFINITY)\n}\n\nfunction _variance(array, mean = _mean(array)) {\n    return _mean(array.map(e => Math.pow(e - mean, 2)));\n}\n\nfunction _sum(array) {\n    return array.reduce((p, n) => p + n, 0);\n}\n\nfunction _mean(array) {\n    const sum = _sum(array);\n    return sum / array.length;\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mYWxjb24vLi9saWIvaW5kZXguanM/OWIwYSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsV0FBVyxTQUFTO0FBQ3BCLFdBQVcsT0FBTztBQUNsQixXQUFXLE9BQU87QUFDbEI7QUFDQSx5Q0FBZ0Q7QUFDaEQsV0FBVyxhQUFhO0FBQ3hCO0FBQ0E7QUFDQTs7QUFFQSxtQkFBbUIsVUFBVTtBQUM3QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxtQkFBbUI7QUFDbkI7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsV0FBVyxTQUFTO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsU0FBUztBQUNwQjtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsVUFBVTtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxXQUFXLGNBQWM7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxZQUFZO0FBQ1o7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6Ii4vbGliL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBDb21wdXRlIHN0YXRzIGFib3V0IHRoZSBnaXZlbiBmdW5jdGlvbi5cbiAqIFxuICogQHBhcmFtIHtzdHJpbmd9IG5hbWUgLSBOYW1lIG9mIHRoZSBiZW5jaG1hcmtcbiAqIEBwYXJhbSB7ZnVuY3Rpb259IGZuIC0gRnVuY3Rpb24gdG8gYmVuY2htYXJrXG4gKiBAcGFyYW0ge29iamVjdH0gb3B0aW9ucyBcbiAqIEBwYXJhbSB7bnVtYmVyfSBvcHRpb25zLnJ1bnMgLSBOdW1iZXIgb2YgY3ljbGVzIHRvIGV4ZWN1dGUgdGhlIGZ1bmNpb24gXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBiZW5jaG1hcmsobmFtZSwgZm4sIG9wdGlvbnMgPSB7fSkge1xuICAgIGNvbnN0IHsgcnVucyA9IDVlNCB9ID0gb3B0aW9ucztcbiAgICBjb25zdCBleGVjdXRpb25zID0gW107XG4gICAgLy8gRmlyc3QgcnVuIHRvIGRldGVybWluZSB3aGljaCBmdW5jdGlvbiB1c2VcbiAgICBjb25zdCBwcm9maWxlRm4gPSBfcHJvZmlsZShmbikgPT09IDAgPyBfcHJvZmlsZUF2ZyA6IF9wcm9maWxlO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBydW5zOyBpKyspIHtcbiAgICAgICAgY29uc3QgdGltZSA9IHByb2ZpbGVGbihmbik7XG4gICAgICAgIGV4ZWN1dGlvbnMucHVzaCh0aW1lKTtcbiAgICB9XG5cbiAgICBjb25zdCByZXN1bHQgPSBfZ2V0U3RhdHMoZXhlY3V0aW9ucyk7XG4gICAgcmVzdWx0Lm1ldGEgPSB7IHVuczogcnVucywgYXByb3g6IChwcm9maWxlRm4gPT09IF9wcm9maWxlQXZnKSB9O1xuICAgIHJldHVybiByZXN1bHQ7XG59XG5cbi8qKlxuICogQ29tcHV0ZXMgdGhlIHRpbWUgbmVlZGVkIHRvIHJ1biB0aGUgZnVuY3Rpb25cbiAqIEBwYXJhbSB7ZnVuY3Rpb259IGZuIFxuICovXG5mdW5jdGlvbiBfcHJvZmlsZShmbikge1xuICAgIGNvbnN0IHN0YXJ0ID0gcGVyZm9ybWFuY2Uubm93KCk7XG4gICAgZm4oKTtcbiAgICBjb25zdCBlbmQgPSBwZXJmb3JtYW5jZS5ub3coKTtcbiAgICByZXR1cm4gZW5kIC0gc3RhcnQ7XG59XG5cbi8qKlxuICogQ29tcHV0ZXMgdGhlIHRpbWUgbmVlZGVkIHRvIHJ1biB0aGUgZnVuY3Rpb24gYXMgdGhlIGF2ZyB0aW1lIG9mIDEwMDAgcnVucy5cbiAqIFRoaXMgZnVuY3Rpb24gaXMgdXNlZCB3aGVuIGZuIHRha2VzIGEgc21hbGwgYW1vdXQgb2YgdGltZSB0byBiZSBleGVjdXRlZFxuICogQHBhcmFtIHtmdW5jdGlvbn0gZm4gXG4gKi9cbmZ1bmN0aW9uIF9wcm9maWxlQXZnKGZuKSB7XG4gICAgY29uc3Qgc3RhcnQgPSBwZXJmb3JtYW5jZS5ub3coKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEwMDA7IGkrKykge1xuICAgICAgICBmbigpO1xuICAgIH1cbiAgICBjb25zdCBlbmQgPSBwZXJmb3JtYW5jZS5ub3coKTtcbiAgICByZXR1cm4gKGVuZCAtIHN0YXJ0KSAvIDEwMDA7XG59XG5cbi8qKlxuICogQ29tcHV0ZXMgc3RhdGlzdGljYWwgcGFyYW1ldGVycyBmcm9tIGEgdGltZSBhcnJheS5cbiAqIEBwYXJhbSB7QXJyYXk8bnVtYmVyPn0gZXhlY3V0aW9uIFxuICovXG5mdW5jdGlvbiBfZ2V0U3RhdHMoZXhlY3V0aW9uID0gW10pIHtcbiAgICBjb25zdCB0b3RhbCA9IF9zdW0oZXhlY3V0aW9uKTtcbiAgICBjb25zdCBhdmcgPSBfbWVhbihleGVjdXRpb24pO1xuICAgIGNvbnN0IHZhcmlhbmNlID0gX3ZhcmlhbmNlKGV4ZWN1dGlvbiwgYXZnKTtcbiAgICBjb25zdCBtaW4gPSBfbWluKGV4ZWN1dGlvbik7XG4gICAgY29uc3QgbWF4ID0gX21heChleGVjdXRpb24pO1xuICAgIGNvbnN0IG1lZGlhbiA9IGV4ZWN1dGlvbi5zb3J0KClbTWF0aC5mbG9vcihleGVjdXRpb24ubGVuZ3RoIC8gMildO1xuXG4gICAgcmV0dXJuIHsgYXZnLCBtZWRpYW4sIG1heCwgbWluLCB2YXJpYW5jZSB9XG59XG5cbmZ1bmN0aW9uIF9tYXgoYXJyYXkpIHtcbiAgICByZXR1cm4gYXJyYXkucmVkdWNlKChwLCBuKSA9PiBwID4gbiA/IHAgOiBuLCBOdW1iZXIuTkVHQVRJVkVfSU5GSU5JVFkpXG59XG5cbmZ1bmN0aW9uIF9taW4oYXJyYXkpIHtcbiAgICByZXR1cm4gYXJyYXkucmVkdWNlKChwLCBuKSA9PiBwIDwgbiA/IHAgOiBuLCBOdW1iZXIuUE9TSVRJVkVfSU5GSU5JVFkpXG59XG5cbmZ1bmN0aW9uIF92YXJpYW5jZShhcnJheSwgbWVhbiA9IF9tZWFuKGFycmF5KSkge1xuICAgIHJldHVybiBfbWVhbihhcnJheS5tYXAoZSA9PiBNYXRoLnBvdyhlIC0gbWVhbiwgMikpKTtcbn1cblxuZnVuY3Rpb24gX3N1bShhcnJheSkge1xuICAgIHJldHVybiBhcnJheS5yZWR1Y2UoKHAsIG4pID0+IHAgKyBuLCAwKTtcbn1cblxuZnVuY3Rpb24gX21lYW4oYXJyYXkpIHtcbiAgICBjb25zdCBzdW0gPSBfc3VtKGFycmF5KTtcbiAgICByZXR1cm4gc3VtIC8gYXJyYXkubGVuZ3RoO1xufSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./lib/index.js\n");

/***/ })

/******/ });
});