if (typeof window !== 'undefined') {
    var performance = window.performance;
} else {
  var { performance } = eval('require("perf_hooks")'); // eslint-disable-line
}

export default { performance };