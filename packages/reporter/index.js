// parameters: baseReporterDecorator, config, logger, helper, formatError
function FalconReporter(baseReporterDecorator) {
  baseReporterDecorator(this);
  this.USE_COLORS = true;

  this.errors = [];

  this.onRunStart = function () {
    this._browsers = [];
  };

  this.onBrowserStart = function (browser) {
    this._browsers.push(browser);
  };

  this.specSuccess = function (browser, test) {
    const result = test.result;
    this.success(`\n\n✔  ${test.description}`);
    this.write(`\n\tAvg:\t${result.avg}\n\tVar:\t${result.variance}`);
  };

  this.specSkipped = function (browser, test) {
    this.info(`\n\n(skipped) ${test.description}`);
    this.write('\n\tAvg:\t....\n\tVar:\t....');
  };

  this.specFailure = function (browser, test) {
    this.error(`\n\n✖  ${test.description}`);
    this.write('\n\tAvg:\t....\n\tVar:\t....');
    this.errors.push(test.result.error);
  };

  this.onBrowserComplete = function (browser) {
    this.write('\n\n' + this.renderBrowser(browser) + '\n');
  };

  // Parameters; browsers, results
  this.onRunComplete = function (browsers, results) {
    this.write('\n\n');
    if (!results.failed) {
      this.write(this.TOTAL_SUCCESS, results.success);
    } else {
      this.write(this.TOTAL_FAILED, results.failed, results.success);

      this.errors.forEach(error => {
        this.write('\n');
        this.error(error.stack);
      });
      this.write('\n');
    }
  };

  this.success = function (text) {
    this.write(`\x1b[32m${text}\x1b[0m`);
  };

  this.info = function (text) {
    this.write(`\x1b[36m${text}\x1b[0m`);
  };

  this.warning = function (text) {
    this.write(`\x1b[33m${text}\x1b[0m`);
  };

  this.error = function (text) {
    this.write(`\x1b[31m${text}\x1b[0m`);
  };
}


FalconReporter.$inject = ['baseReporterDecorator', 'config', 'logger', 'helper', 'formatError'];

module.exports = {
  'reporter:falcon': ['type', FalconReporter]
};