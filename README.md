# Falcon Benchmark

Falcon Benchmark is a suite of javascript libraries created to benchmark javascript code and is composed of the following packages:


| package |  version | description |
|---|---|---|
[falcon-benchmark]()  | [![npm version](https://badge.fury.io/js/falcon-benchmark.svg)](https://badge.fury.io/js/falcon-benchmark)  | Core utilities to meassure javascript speed |
[karma-falcon-benchmark]()  | [![npm version](https://badge.fury.io/js/karma-falcon-benchmark.svg)](https://badge.fury.io/js/karma-falcon-benchmark)  | Karma adapter |
[karma-falcon-benchmark-reporter]()  | [![npm version](https://badge.fury.io/js/karma-falcon-benchmark-reporter.svg)](https://badge.fury.io/js/karma-falcon-benchmark-reporter)  | Karma reporter |


## Getting Started

Install the required dependences


```bash
  npm i karma karma-falcon-benchmark karma-falcon-benchmark-reporter --save-dev
```

Create or edit your [karma.conf.js](http://karma-runner.github.io/2.0/config/configuration-file.html) file to use falcon benchmark.


```js
module.exports = function (config) {
  config.set({
    // ... 
    frameworks: ['falcon-benchmark'],
    reporters: ['falcon'],
    // ...
```

Create your test files:

```js
// falcon.spec.js

// Basic test
benchmark('sync function', () => {
  this.array = new Float32Array(100);
  this.array.fill(100);
});

// Test an async function
benchmark('async function', () => {
  return new Promise(function (resolve) {
    setTimeout(resolve, 20);
  });
}, { runs: 100 });

// Skipped test
xbenchmark('skipped function', () => {
  console.warn('Skipped!');
});
```


Run your tests

```bash
karma start  --single-run --browsers Chrome karma.conf.js
```


## API

### `benchmark(name, fn, [options])`

Meassure the performance of the given function. `benchmark` will run the given `fn` several times meassuring the time required for every execution.

- **name:** `(string)` An alias given to the benchmark.
- **fn**: `(function)` The function that is going to be meassured.
- **options**: `(object)` [optional]
  - **before:** `(function)` A function to be called before the benchmarked function. Both functions will share the same javascript context.
  - **after:** `(function)` A function to be called after the benchmarked function. Both functions will share the same javascript context.
  - **runs:** `(number)` The number of times the function will be executed in the benchmark. Default 5000.


### `xbenchmark(name, fn, [options])`

Mark a benchmark as pending, so it wont be executed.