(function (window) {

    function createStartFn(karma) {
        return function () {
            karma.info({
                total: falcon.getNumberOfTests(),
            })

            window.falcon.on('test-complete', function ({ test, result }) {
                karma.result({
                    id: 'test',
                    description: test.name,
                    suite: [],
                    success: true,
                    log: undefined, // Log with errors while running the test
                    skipped: test.skipped,
                    time: 1000,
                    result: result,
                });
            });

            window.falcon.on('suite-complete', function (suiteResult) {
                karma.complete({
                    order: 1,
                    coverage: window.__coverage__
                });
            });


            window.falcon.run();
        };
    }


    window.__karma__.start = createStartFn(window.__karma__)

})(typeof window !== 'undefined' ? window : global);