!function(n,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.falcon=t():n.falcon=t()}(window,function(){return function(n){var t={};function e(c){if(t[c])return t[c].exports;var I=t[c]={i:c,l:!1,exports:{}};return n[c].call(I.exports,I,I.exports,e),I.l=!0,I.exports}return e.m=n,e.c=t,e.d=function(n,t,c){e.o(n,t)||Object.defineProperty(n,t,{enumerable:!0,get:c})},e.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},e.t=function(n,t){if(1&t&&(n=e(n)),8&t)return n;if(4&t&&"object"==typeof n&&n&&n.__esModule)return n;var c=Object.create(null);if(e.r(c),Object.defineProperty(c,"default",{enumerable:!0,value:n}),2&t&&"string"!=typeof n)for(var I in n)e.d(c,I,function(t){return n[t]}.bind(null,I));return c},e.n=function(n){var t=n&&n.__esModule?function(){return n.default}:function(){return n};return e.d(t,"a",t),t},e.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)},e.p="",e(e.s=1)}([function(module,__webpack_exports__,__webpack_require__){"use strict";eval("if (typeof window !== 'undefined') {\n  var performance = window.performance\n} else {\n  var { performance } = eval('require(\"perf_hooks\")'); // eslint-disable-line\n}\n\n/* harmony default export */ __webpack_exports__[\"a\"] = ({ performance });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mYWxjb24vLi9saWIvdXRpbHMuc2VydmljZS5qcz8wNDE3Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsT0FBTyxjQUFjLGlDQUFpQztBQUN0RDs7QUFFQSwwREFBZ0IsYyIsImZpbGUiOiIwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gIHZhciBwZXJmb3JtYW5jZSA9IHdpbmRvdy5wZXJmb3JtYW5jZVxufSBlbHNlIHtcbiAgdmFyIHsgcGVyZm9ybWFuY2UgfSA9IGV2YWwoJ3JlcXVpcmUoXCJwZXJmX2hvb2tzXCIpJyk7IC8vIGVzbGludC1kaXNhYmxlLWxpbmVcbn1cblxuZXhwb3J0IGRlZmF1bHQgeyBwZXJmb3JtYW5jZSB9Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///0\n")},function(module,__webpack_exports__,__webpack_require__){"use strict";eval('__webpack_require__.r(__webpack_exports__);\n\n// CONCATENATED MODULE: ./node_modules/mitt/dist/mitt.es.js\n//      \n// An event handler can take an optional event argument\n// and should not return a value\n                                          \n                                                               \n\n// An array of all currently registered event handlers for a type\n                                            \n                                                            \n// A map of event types and their corresponding event handlers.\n                        \n                                 \n                                   \n  \n\n/** Mitt: Tiny (~200b) functional event emitter / pubsub.\n *  @name mitt\n *  @returns {Mitt}\n */\nfunction mitt(all                 ) {\n\tall = all || Object.create(null);\n\n\treturn {\n\t\t/**\n\t\t * Register an event handler for the given type.\n\t\t *\n\t\t * @param  {String} type\tType of event to listen for, or `"*"` for all events\n\t\t * @param  {Function} handler Function to call in response to given event\n\t\t * @memberOf mitt\n\t\t */\n\t\ton: function on(type        , handler              ) {\n\t\t\t(all[type] || (all[type] = [])).push(handler);\n\t\t},\n\n\t\t/**\n\t\t * Remove an event handler for the given type.\n\t\t *\n\t\t * @param  {String} type\tType of event to unregister `handler` from, or `"*"`\n\t\t * @param  {Function} handler Handler function to remove\n\t\t * @memberOf mitt\n\t\t */\n\t\toff: function off(type        , handler              ) {\n\t\t\tif (all[type]) {\n\t\t\t\tall[type].splice(all[type].indexOf(handler) >>> 0, 1);\n\t\t\t}\n\t\t},\n\n\t\t/**\n\t\t * Invoke all handlers for the given type.\n\t\t * If present, `"*"` handlers are invoked after type-matched handlers.\n\t\t *\n\t\t * @param {String} type  The event type to invoke\n\t\t * @param {Any} [evt]  Any value (object is recommended and powerful), passed to each handler\n\t\t * @memberOf mitt\n\t\t */\n\t\temit: function emit(type        , evt     ) {\n\t\t\t(all[type] || []).slice().map(function (handler) { handler(evt); });\n\t\t\t(all[\'*\'] || []).slice().map(function (handler) { handler(type, evt); });\n\t\t}\n\t};\n}\n\n/* harmony default export */ var mitt_es = (mitt);\n//# sourceMappingURL=mitt.es.js.map\n\n// EXTERNAL MODULE: ./lib/utils.service.js\nvar utils_service = __webpack_require__(0);\n\n// CONCATENATED MODULE: ./lib/profiler.service.js\n\nconst performance = utils_service["a" /* default */].performance;\n\n\n/**\n * Computes the time needed to run the function\n * @param {function} fn \n */\nfunction profile(fn) {\n  const start = performance.now();\n  fn();\n  const end = performance.now();\n  return end - start;\n}\n\n/**\n* Computes the time needed to run the function as the avg time of 1000 runs.\n* This function is used when fn takes a small amout of time to be executed\n* @param {function} fn \n*/\nfunction profileAvg(fn) {\n  const start = performance.now();\n  for (let i = 0; i < 1000; i++) {\n    fn();\n  }\n  const end = performance.now();\n  return (end - start) / 1000;\n}\n\n/**\n* Computes statistical parameters from a time array.\n* @param {Array<number>} execution \n*/\nfunction getStats(execution = []) {\n  const total = _sum(execution);\n  const avg = _mean(execution);\n  const variance = _variance(execution, avg);\n  const min = _min(execution);\n  const max = _max(execution);\n  const median = execution.sort()[Math.floor(execution.length / 2)];\n\n  return { avg, median, max, min, variance }\n}\n\nfunction _max(array) {\n  return array.reduce((p, n) => p > n ? p : n, Number.NEGATIVE_INFINITY)\n}\n\nfunction _min(array) {\n  return array.reduce((p, n) => p < n ? p : n, Number.POSITIVE_INFINITY)\n}\n\nfunction _variance(array, mean = _mean(array)) {\n  return _mean(array.map(e => Math.pow(e - mean, 2)));\n}\n\nfunction _sum(array) {\n  return array.reduce((p, n) => p + n, 0);\n}\n\nfunction _mean(array) {\n  const sum = _sum(array);\n  return sum / array.length;\n}\n\n\n/* harmony default export */ var profiler_service = ({\n  getStats,\n  profile,\n  profileAvg\n});\n// CONCATENATED MODULE: ./lib/index.js\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "on", function() { return on; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "off", function() { return off; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getNumberOfTests", function() { return getNumberOfTests; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "benchmark", function() { return benchmark; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "xbenchmark", function() { return xbenchmark; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "run", function() { return run; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "runBenchmark", function() { return runBenchmark; });\n\n\n\nconst EVENTS = {\n    TEST_COMPLETE: \'test-complete\',\n    SUITE_COMPLETE: \'suite-complete\'\n}\nconst emitter = mitt_es();\nconst tests = [];\n\n/**\n * \n * @param {string} event \n * @param {function} callback \n */\nfunction on(event, callback) {\n    return emitter.on(event, callback);\n}\n\n/**\n * \n * @param {string} event \n * @param {function} callback \n */\nfunction off(event, callback) {\n    return emitter.off(event, callback);\n}\n\n/**\n * Get the count of tests in the suite\n */\nfunction getNumberOfTests() {\n    return tests.length;\n}\n\n/**\n * Add a test to the test list.\n * \n * @param {string} name - Name of the benchmark\n * @param {function} fn - Function to benchmark\n * @param {object} options \n * @param {number} options.runs - Number of cycles to execute the funcion \n */\nfunction benchmark(name, fn, options = {}) {\n    tests.push({ name, fn, options, skipped: false });\n}\n\n/**\n * Add a test that wont be executed to the test list\n */\nfunction xbenchmark(name, fn, options = {}) {\n    tests.push({ name, fn, options, skipped: true });\n}\n\n/**\n * Run all the specs\n */\nfunction run() {\n    const results = [];\n    while (tests.length) {\n        const test = tests.shift();\n        const result = test.skipped ? {} : runBenchmark(test.name, test.fn, test.options);\n        emitter.emit(EVENTS.TEST_COMPLETE, { test, result });\n        results.push({ test, result });\n    }\n    emitter.emit(EVENTS.SUITE_COMPLETE, results);\n}\n\n/**\n * Compute stats about the given function.\n * \n * @param {string} name - Name of the benchmark\n * @param {function} fn - Function to benchmark\n * @param {object} options \n * @param {number} options.runs - Number of cycles to execute the funcion \n */\nfunction runBenchmark(name, fn, options = {}) {\n    const { runs = 5e4 } = options;\n    const executions = [];\n    // First run to determine which function use\n    const profileFn = profiler_service.profile(fn) === 0 ? profiler_service.profileAvg : profiler_service.profile;\n\n    for (let i = 0; i < runs; i++) {\n        const time = profileFn(fn);\n        executions.push(time);\n    }\n\n    const result = profiler_service.getStats(executions);\n    result.meta = { uns: runs, aprox: (profileFn === profiler_service.profileAvg) };\n    return result;\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mYWxjb24vLi9ub2RlX21vZHVsZXMvbWl0dC9kaXN0L21pdHQuZXMuanM/MTRiNyIsIndlYnBhY2s6Ly9mYWxjb24vLi9saWIvcHJvZmlsZXIuc2VydmljZS5qcz8zY2RkIiwid2VicGFjazovL2ZhbGNvbi8uL2xpYi9pbmRleC5qcz85YjBhIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBO0FBQ0E7QUFDQTs7OztBQUlBOzs7QUFHQTs7Ozs7O0FBTUE7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjLE9BQU87QUFDckIsY0FBYyxTQUFTO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQSxjQUFjLE9BQU87QUFDckIsY0FBYyxTQUFTO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLE9BQU87QUFDcEIsYUFBYSxJQUFJO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBLHFEQUFxRCxjQUFjLEVBQUU7QUFDckUsb0RBQW9ELG9CQUFvQixFQUFFO0FBQzFFO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7QUMvREE7QUFDQTs7O0FBR0E7QUFDQTtBQUNBLFdBQVcsU0FBUztBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxVQUFVLFNBQVM7QUFDbkI7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLFVBQVU7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsVUFBVSxjQUFjO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsVUFBVTtBQUNWOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDOzs7Ozs7Ozs7QUN0RUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixXQUFXLFNBQVM7QUFDcEI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixXQUFXLFNBQVM7QUFDcEI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixXQUFXLFNBQVM7QUFDcEIsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsT0FBTztBQUNsQjtBQUNBLHlDQUFnRDtBQUNoRCxnQkFBZ0Isb0NBQW9DO0FBQ3BEOztBQUVBO0FBQ0E7QUFDQTtBQUNBLDBDQUFpRDtBQUNqRCxnQkFBZ0IsbUNBQW1DO0FBQ25EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0NBQXdDO0FBQ3hDLDRDQUE0QyxlQUFlO0FBQzNELHNCQUFzQixlQUFlO0FBQ3JDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsV0FBVyxTQUFTO0FBQ3BCLFdBQVcsT0FBTztBQUNsQixXQUFXLE9BQU87QUFDbEI7QUFDQSw0Q0FBbUQ7QUFDbkQsV0FBVyxhQUFhO0FBQ3hCO0FBQ0E7QUFDQTs7QUFFQSxtQkFBbUIsVUFBVTtBQUM3QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxtQkFBbUI7QUFDbkI7QUFDQSIsImZpbGUiOiIxLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gICAgICBcbi8vIEFuIGV2ZW50IGhhbmRsZXIgY2FuIHRha2UgYW4gb3B0aW9uYWwgZXZlbnQgYXJndW1lbnRcbi8vIGFuZCBzaG91bGQgbm90IHJldHVybiBhIHZhbHVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuXG4vLyBBbiBhcnJheSBvZiBhbGwgY3VycmVudGx5IHJlZ2lzdGVyZWQgZXZlbnQgaGFuZGxlcnMgZm9yIGEgdHlwZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuLy8gQSBtYXAgb2YgZXZlbnQgdHlwZXMgYW5kIHRoZWlyIGNvcnJlc3BvbmRpbmcgZXZlbnQgaGFuZGxlcnMuXG4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgXG5cbi8qKiBNaXR0OiBUaW55ICh+MjAwYikgZnVuY3Rpb25hbCBldmVudCBlbWl0dGVyIC8gcHVic3ViLlxuICogIEBuYW1lIG1pdHRcbiAqICBAcmV0dXJucyB7TWl0dH1cbiAqL1xuZnVuY3Rpb24gbWl0dChhbGwgICAgICAgICAgICAgICAgICkge1xuXHRhbGwgPSBhbGwgfHwgT2JqZWN0LmNyZWF0ZShudWxsKTtcblxuXHRyZXR1cm4ge1xuXHRcdC8qKlxuXHRcdCAqIFJlZ2lzdGVyIGFuIGV2ZW50IGhhbmRsZXIgZm9yIHRoZSBnaXZlbiB0eXBlLlxuXHRcdCAqXG5cdFx0ICogQHBhcmFtICB7U3RyaW5nfSB0eXBlXHRUeXBlIG9mIGV2ZW50IHRvIGxpc3RlbiBmb3IsIG9yIGBcIipcImAgZm9yIGFsbCBldmVudHNcblx0XHQgKiBAcGFyYW0gIHtGdW5jdGlvbn0gaGFuZGxlciBGdW5jdGlvbiB0byBjYWxsIGluIHJlc3BvbnNlIHRvIGdpdmVuIGV2ZW50XG5cdFx0ICogQG1lbWJlck9mIG1pdHRcblx0XHQgKi9cblx0XHRvbjogZnVuY3Rpb24gb24odHlwZSAgICAgICAgLCBoYW5kbGVyICAgICAgICAgICAgICApIHtcblx0XHRcdChhbGxbdHlwZV0gfHwgKGFsbFt0eXBlXSA9IFtdKSkucHVzaChoYW5kbGVyKTtcblx0XHR9LFxuXG5cdFx0LyoqXG5cdFx0ICogUmVtb3ZlIGFuIGV2ZW50IGhhbmRsZXIgZm9yIHRoZSBnaXZlbiB0eXBlLlxuXHRcdCAqXG5cdFx0ICogQHBhcmFtICB7U3RyaW5nfSB0eXBlXHRUeXBlIG9mIGV2ZW50IHRvIHVucmVnaXN0ZXIgYGhhbmRsZXJgIGZyb20sIG9yIGBcIipcImBcblx0XHQgKiBAcGFyYW0gIHtGdW5jdGlvbn0gaGFuZGxlciBIYW5kbGVyIGZ1bmN0aW9uIHRvIHJlbW92ZVxuXHRcdCAqIEBtZW1iZXJPZiBtaXR0XG5cdFx0ICovXG5cdFx0b2ZmOiBmdW5jdGlvbiBvZmYodHlwZSAgICAgICAgLCBoYW5kbGVyICAgICAgICAgICAgICApIHtcblx0XHRcdGlmIChhbGxbdHlwZV0pIHtcblx0XHRcdFx0YWxsW3R5cGVdLnNwbGljZShhbGxbdHlwZV0uaW5kZXhPZihoYW5kbGVyKSA+Pj4gMCwgMSk7XG5cdFx0XHR9XG5cdFx0fSxcblxuXHRcdC8qKlxuXHRcdCAqIEludm9rZSBhbGwgaGFuZGxlcnMgZm9yIHRoZSBnaXZlbiB0eXBlLlxuXHRcdCAqIElmIHByZXNlbnQsIGBcIipcImAgaGFuZGxlcnMgYXJlIGludm9rZWQgYWZ0ZXIgdHlwZS1tYXRjaGVkIGhhbmRsZXJzLlxuXHRcdCAqXG5cdFx0ICogQHBhcmFtIHtTdHJpbmd9IHR5cGUgIFRoZSBldmVudCB0eXBlIHRvIGludm9rZVxuXHRcdCAqIEBwYXJhbSB7QW55fSBbZXZ0XSAgQW55IHZhbHVlIChvYmplY3QgaXMgcmVjb21tZW5kZWQgYW5kIHBvd2VyZnVsKSwgcGFzc2VkIHRvIGVhY2ggaGFuZGxlclxuXHRcdCAqIEBtZW1iZXJPZiBtaXR0XG5cdFx0ICovXG5cdFx0ZW1pdDogZnVuY3Rpb24gZW1pdCh0eXBlICAgICAgICAsIGV2dCAgICAgKSB7XG5cdFx0XHQoYWxsW3R5cGVdIHx8IFtdKS5zbGljZSgpLm1hcChmdW5jdGlvbiAoaGFuZGxlcikgeyBoYW5kbGVyKGV2dCk7IH0pO1xuXHRcdFx0KGFsbFsnKiddIHx8IFtdKS5zbGljZSgpLm1hcChmdW5jdGlvbiAoaGFuZGxlcikgeyBoYW5kbGVyKHR5cGUsIGV2dCk7IH0pO1xuXHRcdH1cblx0fTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgbWl0dDtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPW1pdHQuZXMuanMubWFwXG4iLCJpbXBvcnQgdXRpbHMgZnJvbSAnLi91dGlscy5zZXJ2aWNlJztcbmNvbnN0IHBlcmZvcm1hbmNlID0gdXRpbHMucGVyZm9ybWFuY2U7XG5cblxuLyoqXG4gKiBDb21wdXRlcyB0aGUgdGltZSBuZWVkZWQgdG8gcnVuIHRoZSBmdW5jdGlvblxuICogQHBhcmFtIHtmdW5jdGlvbn0gZm4gXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBwcm9maWxlKGZuKSB7XG4gIGNvbnN0IHN0YXJ0ID0gcGVyZm9ybWFuY2Uubm93KCk7XG4gIGZuKCk7XG4gIGNvbnN0IGVuZCA9IHBlcmZvcm1hbmNlLm5vdygpO1xuICByZXR1cm4gZW5kIC0gc3RhcnQ7XG59XG5cbi8qKlxuKiBDb21wdXRlcyB0aGUgdGltZSBuZWVkZWQgdG8gcnVuIHRoZSBmdW5jdGlvbiBhcyB0aGUgYXZnIHRpbWUgb2YgMTAwMCBydW5zLlxuKiBUaGlzIGZ1bmN0aW9uIGlzIHVzZWQgd2hlbiBmbiB0YWtlcyBhIHNtYWxsIGFtb3V0IG9mIHRpbWUgdG8gYmUgZXhlY3V0ZWRcbiogQHBhcmFtIHtmdW5jdGlvbn0gZm4gXG4qL1xuZXhwb3J0IGZ1bmN0aW9uIHByb2ZpbGVBdmcoZm4pIHtcbiAgY29uc3Qgc3RhcnQgPSBwZXJmb3JtYW5jZS5ub3coKTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDAwOyBpKyspIHtcbiAgICBmbigpO1xuICB9XG4gIGNvbnN0IGVuZCA9IHBlcmZvcm1hbmNlLm5vdygpO1xuICByZXR1cm4gKGVuZCAtIHN0YXJ0KSAvIDEwMDA7XG59XG5cbi8qKlxuKiBDb21wdXRlcyBzdGF0aXN0aWNhbCBwYXJhbWV0ZXJzIGZyb20gYSB0aW1lIGFycmF5LlxuKiBAcGFyYW0ge0FycmF5PG51bWJlcj59IGV4ZWN1dGlvbiBcbiovXG5leHBvcnQgZnVuY3Rpb24gZ2V0U3RhdHMoZXhlY3V0aW9uID0gW10pIHtcbiAgY29uc3QgdG90YWwgPSBfc3VtKGV4ZWN1dGlvbik7XG4gIGNvbnN0IGF2ZyA9IF9tZWFuKGV4ZWN1dGlvbik7XG4gIGNvbnN0IHZhcmlhbmNlID0gX3ZhcmlhbmNlKGV4ZWN1dGlvbiwgYXZnKTtcbiAgY29uc3QgbWluID0gX21pbihleGVjdXRpb24pO1xuICBjb25zdCBtYXggPSBfbWF4KGV4ZWN1dGlvbik7XG4gIGNvbnN0IG1lZGlhbiA9IGV4ZWN1dGlvbi5zb3J0KClbTWF0aC5mbG9vcihleGVjdXRpb24ubGVuZ3RoIC8gMildO1xuXG4gIHJldHVybiB7IGF2ZywgbWVkaWFuLCBtYXgsIG1pbiwgdmFyaWFuY2UgfVxufVxuXG5mdW5jdGlvbiBfbWF4KGFycmF5KSB7XG4gIHJldHVybiBhcnJheS5yZWR1Y2UoKHAsIG4pID0+IHAgPiBuID8gcCA6IG4sIE51bWJlci5ORUdBVElWRV9JTkZJTklUWSlcbn1cblxuZnVuY3Rpb24gX21pbihhcnJheSkge1xuICByZXR1cm4gYXJyYXkucmVkdWNlKChwLCBuKSA9PiBwIDwgbiA/IHAgOiBuLCBOdW1iZXIuUE9TSVRJVkVfSU5GSU5JVFkpXG59XG5cbmZ1bmN0aW9uIF92YXJpYW5jZShhcnJheSwgbWVhbiA9IF9tZWFuKGFycmF5KSkge1xuICByZXR1cm4gX21lYW4oYXJyYXkubWFwKGUgPT4gTWF0aC5wb3coZSAtIG1lYW4sIDIpKSk7XG59XG5cbmZ1bmN0aW9uIF9zdW0oYXJyYXkpIHtcbiAgcmV0dXJuIGFycmF5LnJlZHVjZSgocCwgbikgPT4gcCArIG4sIDApO1xufVxuXG5mdW5jdGlvbiBfbWVhbihhcnJheSkge1xuICBjb25zdCBzdW0gPSBfc3VtKGFycmF5KTtcbiAgcmV0dXJuIHN1bSAvIGFycmF5Lmxlbmd0aDtcbn1cblxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGdldFN0YXRzLFxuICBwcm9maWxlLFxuICBwcm9maWxlQXZnXG59IiwiaW1wb3J0IG1pdHQgZnJvbSAnbWl0dCdcbmltcG9ydCBwcm9maWxlciBmcm9tICcuL3Byb2ZpbGVyLnNlcnZpY2UnO1xuXG5jb25zdCBFVkVOVFMgPSB7XG4gICAgVEVTVF9DT01QTEVURTogJ3Rlc3QtY29tcGxldGUnLFxuICAgIFNVSVRFX0NPTVBMRVRFOiAnc3VpdGUtY29tcGxldGUnXG59XG5jb25zdCBlbWl0dGVyID0gbWl0dCgpO1xuY29uc3QgdGVzdHMgPSBbXTtcblxuLyoqXG4gKiBcbiAqIEBwYXJhbSB7c3RyaW5nfSBldmVudCBcbiAqIEBwYXJhbSB7ZnVuY3Rpb259IGNhbGxiYWNrIFxuICovXG5leHBvcnQgZnVuY3Rpb24gb24oZXZlbnQsIGNhbGxiYWNrKSB7XG4gICAgcmV0dXJuIGVtaXR0ZXIub24oZXZlbnQsIGNhbGxiYWNrKTtcbn1cblxuLyoqXG4gKiBcbiAqIEBwYXJhbSB7c3RyaW5nfSBldmVudCBcbiAqIEBwYXJhbSB7ZnVuY3Rpb259IGNhbGxiYWNrIFxuICovXG5leHBvcnQgZnVuY3Rpb24gb2ZmKGV2ZW50LCBjYWxsYmFjaykge1xuICAgIHJldHVybiBlbWl0dGVyLm9mZihldmVudCwgY2FsbGJhY2spO1xufVxuXG4vKipcbiAqIEdldCB0aGUgY291bnQgb2YgdGVzdHMgaW4gdGhlIHN1aXRlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXROdW1iZXJPZlRlc3RzKCkge1xuICAgIHJldHVybiB0ZXN0cy5sZW5ndGg7XG59XG5cbi8qKlxuICogQWRkIGEgdGVzdCB0byB0aGUgdGVzdCBsaXN0LlxuICogXG4gKiBAcGFyYW0ge3N0cmluZ30gbmFtZSAtIE5hbWUgb2YgdGhlIGJlbmNobWFya1xuICogQHBhcmFtIHtmdW5jdGlvbn0gZm4gLSBGdW5jdGlvbiB0byBiZW5jaG1hcmtcbiAqIEBwYXJhbSB7b2JqZWN0fSBvcHRpb25zIFxuICogQHBhcmFtIHtudW1iZXJ9IG9wdGlvbnMucnVucyAtIE51bWJlciBvZiBjeWNsZXMgdG8gZXhlY3V0ZSB0aGUgZnVuY2lvbiBcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGJlbmNobWFyayhuYW1lLCBmbiwgb3B0aW9ucyA9IHt9KSB7XG4gICAgdGVzdHMucHVzaCh7IG5hbWUsIGZuLCBvcHRpb25zLCBza2lwcGVkOiBmYWxzZSB9KTtcbn1cblxuLyoqXG4gKiBBZGQgYSB0ZXN0IHRoYXQgd29udCBiZSBleGVjdXRlZCB0byB0aGUgdGVzdCBsaXN0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB4YmVuY2htYXJrKG5hbWUsIGZuLCBvcHRpb25zID0ge30pIHtcbiAgICB0ZXN0cy5wdXNoKHsgbmFtZSwgZm4sIG9wdGlvbnMsIHNraXBwZWQ6IHRydWUgfSk7XG59XG5cbi8qKlxuICogUnVuIGFsbCB0aGUgc3BlY3NcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJ1bigpIHtcbiAgICBjb25zdCByZXN1bHRzID0gW107XG4gICAgd2hpbGUgKHRlc3RzLmxlbmd0aCkge1xuICAgICAgICBjb25zdCB0ZXN0ID0gdGVzdHMuc2hpZnQoKTtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gdGVzdC5za2lwcGVkID8ge30gOiBydW5CZW5jaG1hcmsodGVzdC5uYW1lLCB0ZXN0LmZuLCB0ZXN0Lm9wdGlvbnMpO1xuICAgICAgICBlbWl0dGVyLmVtaXQoRVZFTlRTLlRFU1RfQ09NUExFVEUsIHsgdGVzdCwgcmVzdWx0IH0pO1xuICAgICAgICByZXN1bHRzLnB1c2goeyB0ZXN0LCByZXN1bHQgfSk7XG4gICAgfVxuICAgIGVtaXR0ZXIuZW1pdChFVkVOVFMuU1VJVEVfQ09NUExFVEUsIHJlc3VsdHMpO1xufVxuXG4vKipcbiAqIENvbXB1dGUgc3RhdHMgYWJvdXQgdGhlIGdpdmVuIGZ1bmN0aW9uLlxuICogXG4gKiBAcGFyYW0ge3N0cmluZ30gbmFtZSAtIE5hbWUgb2YgdGhlIGJlbmNobWFya1xuICogQHBhcmFtIHtmdW5jdGlvbn0gZm4gLSBGdW5jdGlvbiB0byBiZW5jaG1hcmtcbiAqIEBwYXJhbSB7b2JqZWN0fSBvcHRpb25zIFxuICogQHBhcmFtIHtudW1iZXJ9IG9wdGlvbnMucnVucyAtIE51bWJlciBvZiBjeWNsZXMgdG8gZXhlY3V0ZSB0aGUgZnVuY2lvbiBcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJ1bkJlbmNobWFyayhuYW1lLCBmbiwgb3B0aW9ucyA9IHt9KSB7XG4gICAgY29uc3QgeyBydW5zID0gNWU0IH0gPSBvcHRpb25zO1xuICAgIGNvbnN0IGV4ZWN1dGlvbnMgPSBbXTtcbiAgICAvLyBGaXJzdCBydW4gdG8gZGV0ZXJtaW5lIHdoaWNoIGZ1bmN0aW9uIHVzZVxuICAgIGNvbnN0IHByb2ZpbGVGbiA9IHByb2ZpbGVyLnByb2ZpbGUoZm4pID09PSAwID8gcHJvZmlsZXIucHJvZmlsZUF2ZyA6IHByb2ZpbGVyLnByb2ZpbGU7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJ1bnM7IGkrKykge1xuICAgICAgICBjb25zdCB0aW1lID0gcHJvZmlsZUZuKGZuKTtcbiAgICAgICAgZXhlY3V0aW9ucy5wdXNoKHRpbWUpO1xuICAgIH1cblxuICAgIGNvbnN0IHJlc3VsdCA9IHByb2ZpbGVyLmdldFN0YXRzKGV4ZWN1dGlvbnMpO1xuICAgIHJlc3VsdC5tZXRhID0geyB1bnM6IHJ1bnMsIGFwcm94OiAocHJvZmlsZUZuID09PSBwcm9maWxlci5wcm9maWxlQXZnKSB9O1xuICAgIHJldHVybiByZXN1bHQ7XG59Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///1\n')}])});