(function (window) {
  // Expose a new falcon instance in the global namespace.
  window.falcon = new window.FalconBenchmark();
  // Expose "benchmark" function in the global namespace.
  window.benchmark = window.falcon.benchmark.bind(window.falcon);

  function createStartFn(karma) {
    return function () {
      karma.info({
        total: window.falcon.getNumberOfTests(),
      });

      window.falcon.on('test-complete', function ({ test, result }) {
        karma.result({
          id: 'test',
          description: test.name,
          suite: [],
          success: true,
          log: [], // Log with errors while running the test
          skipped: test.skipped,
          time: 1000,
          result: result,
        });
      });

      window.falcon.on('test-failed', function ({ test, result }) {
        karma.result({
          id: 'test',
          description: test.name,
          suite: [],
          success: false,
          log: [result.error], // Log with errors while running the test
          skipped: test.skipped,
          time: 1000,
          result: result,
        });
      });

      window.falcon.on('suite-complete', function () {
        karma.complete({
          order: 1,
          coverage: window.__coverage__
        });
      });

      window.falcon.on('run-complete', function () {
        karma.info('completed run');
      });


      window.falcon.run();
    };
  }


  window.__karma__.start = createStartFn(window.__karma__);

})(typeof window !== 'undefined' ? window : global);