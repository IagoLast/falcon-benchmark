// parameters: baseReporterDecorator, config, logger, helper, formatError
function FalconReporter(baseReporterDecorator) {
    baseReporterDecorator(this);

    this.onRunStart = function () {
        this._browsers = [];
    };

    this.specSuccess = function (browser, test) {
        const result = test.result;

        this.write(`\n${test.description}:\t ${result.avg}\t  Variance:\t ${result.variance}`);
    };

    // Parameters; browsers, results
    this.onRunComplete = function () {
        this.write('\n');
    };
}


FalconReporter.$inject = ['baseReporterDecorator', 'config', 'logger', 'helper', 'formatError'];

module.exports = {
    'reporter:falcon': ['type', FalconReporter]
};