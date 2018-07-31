(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["FalconBenchmark"] = factory();
	else
		root["FalconBenchmark"] = factory();
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

/***/ "./lib/FalconRunner.js":
/*!*****************************!*\
  !*** ./lib/FalconRunner.js ***!
  \*****************************/
/*! exports provided: FalconRunner, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FalconRunner", function() { return FalconRunner; });
/* harmony import */ var mitt__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mitt */ "./node_modules/mitt/dist/mitt.es.js");
/* harmony import */ var _profiler_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./profiler.service */ "./lib/profiler.service.js");
/* harmony import */ var _events__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./events */ "./lib/events.js");




class FalconRunner {
  constructor() {
    this._emitter = Object(mitt__WEBPACK_IMPORTED_MODULE_0__["default"])();
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
        this._emitter.emit(_events__WEBPACK_IMPORTED_MODULE_2__["default"].TEST_FAILED, { test, result });
      } else {
        this._emitter.emit(_events__WEBPACK_IMPORTED_MODULE_2__["default"].TEST_COMPLETE, { test, result });
      }
      results.push({ test, result });
    }
    this._emitter.emit(_events__WEBPACK_IMPORTED_MODULE_2__["default"].SUITE_COMPLETE, results);
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
        const time = await _profiler_service__WEBPACK_IMPORTED_MODULE_1__["default"].profile(fn, options);
        executions.push(time);
        this._emitter.emit(_events__WEBPACK_IMPORTED_MODULE_2__["default"].RUN_COMPLETE);
      }

      result = _profiler_service__WEBPACK_IMPORTED_MODULE_1__["default"].getStats(executions);
      result.meta = { runs };
    } catch (error) {
      return { error: { message: error.message, stack: error.stack } };
    }
    return result;
  }
}

/* harmony default export */ __webpack_exports__["default"] = (FalconRunner);

/***/ }),

/***/ "./lib/events.js":
/*!***********************!*\
  !*** ./lib/events.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  RUN_COMPLETE: 'run-complete',
  SUITE_COMPLETE: 'suite-complete',
  TEST_COMPLETE: 'test-complete',
  TEST_FAILED: 'test-failed'
});

/***/ }),

/***/ "./lib/index.js":
/*!**********************!*\
  !*** ./lib/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./FalconRunner */ "./lib/FalconRunner.js").FalconRunner;

/***/ }),

/***/ "./lib/profiler.service.js":
/*!*********************************!*\
  !*** ./lib/profiler.service.js ***!
  \*********************************/
/*! exports provided: profile, getStats, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "profile", function() { return profile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStats", function() { return getStats; });
/* harmony import */ var _utils_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils.service */ "./lib/utils.service.js");

const performance = _utils_service__WEBPACK_IMPORTED_MODULE_0__["default"].performance;


/**
 * Computes the time needed to run the function
 * @param {function} fn 
 */
async function profile(fn, options) {
  if (options && options.before) {
    await options.before.call(this);
  }
  const start = performance.now();
  await fn.call(this);
  const end = performance.now();
  if (options && options.after) {
    await options.after.call(this);
  }
  return end - start;
}

/**
* Computes statistical parameters from a time array.
* @param {Array<number>} execution 
*/
function getStats(execution = []) {
  const total = _sum(execution);
  const avg = _mean(execution);
  const variance = _variance(execution, avg);
  const min = _min(execution);
  const max = _max(execution);
  const median = execution.sort()[Math.floor(execution.length / 2)];

  return { avg, median, max, min, variance, total };
}

function _max(array) {
  return array.reduce((p, n) => p > n ? p : n, Number.NEGATIVE_INFINITY);
}

function _min(array) {
  return array.reduce((p, n) => p < n ? p : n, Number.POSITIVE_INFINITY);
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


/* harmony default export */ __webpack_exports__["default"] = ({
  getStats,
  profile
});

/***/ }),

/***/ "./lib/utils.service.js":
/*!******************************!*\
  !*** ./lib/utils.service.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
if (typeof window !== 'undefined') {
    var performance = window.performance;
} else {
    var { performance } = eval('require("perf_hooks")'); // eslint-disable-line
}

/* harmony default export */ __webpack_exports__["default"] = ({ performance });

/***/ }),

/***/ "./node_modules/mitt/dist/mitt.es.js":
/*!*******************************************!*\
  !*** ./node_modules/mitt/dist/mitt.es.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//      
// An event handler can take an optional event argument
// and should not return a value
                                          
                                                               

// An array of all currently registered event handlers for a type
                                            
                                                            
// A map of event types and their corresponding event handlers.
                        
                                 
                                   
  

/** Mitt: Tiny (~200b) functional event emitter / pubsub.
 *  @name mitt
 *  @returns {Mitt}
 */
function mitt(all                 ) {
	all = all || Object.create(null);

	return {
		/**
		 * Register an event handler for the given type.
		 *
		 * @param  {String} type	Type of event to listen for, or `"*"` for all events
		 * @param  {Function} handler Function to call in response to given event
		 * @memberOf mitt
		 */
		on: function on(type        , handler              ) {
			(all[type] || (all[type] = [])).push(handler);
		},

		/**
		 * Remove an event handler for the given type.
		 *
		 * @param  {String} type	Type of event to unregister `handler` from, or `"*"`
		 * @param  {Function} handler Handler function to remove
		 * @memberOf mitt
		 */
		off: function off(type        , handler              ) {
			if (all[type]) {
				all[type].splice(all[type].indexOf(handler) >>> 0, 1);
			}
		},

		/**
		 * Invoke all handlers for the given type.
		 * If present, `"*"` handlers are invoked after type-matched handlers.
		 *
		 * @param {String} type  The event type to invoke
		 * @param {Any} [evt]  Any value (object is recommended and powerful), passed to each handler
		 * @memberOf mitt
		 */
		emit: function emit(type        , evt     ) {
			(all[type] || []).slice().map(function (handler) { handler(evt); });
			(all['*'] || []).slice().map(function (handler) { handler(type, evt); });
		}
	};
}

/* harmony default export */ __webpack_exports__["default"] = (mitt);
//# sourceMappingURL=mitt.es.js.map


/***/ })

/******/ });
});
//# sourceMappingURL=falcon-benchmark.js.map