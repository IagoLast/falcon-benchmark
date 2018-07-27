function FalconReporter(baseReporterDecorator, config, logger, helper, formatError) {
    baseReporterDecorator(this);

    this.onRunStart = function () {
        this._browsers = [];
    }

    this.specSuccess = function (browser, test) {
        const result = test.result;

        this.write(`\n${test.description}:\t ${result.avg}\t  Variance:\t ${result.variance}`);
    }

    this.onRunComplete = function (browsers, results) {
        this.write('\n');
    };
}


FalconReporter.$inject = ['baseReporterDecorator', 'config', 'logger', 'helper', 'formatError'];

module.exports = {
    'reporter:falcon': ['type', FalconReporter]
};