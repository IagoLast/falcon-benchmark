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

  this.specFailure = function (browser, test) {
    this.write(`TEST FAILED: ${test.description}`);
    this.write('\n' + test.result.error.message);
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