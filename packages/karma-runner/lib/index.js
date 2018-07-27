var path = require('path')

function createPattern(pattern) {
    return { pattern: pattern, included: true, served: true, watched: false }
}

function initFalcon(files) {
    const falconPath = path.dirname(require.resolve('falcon-benchmark'))
    files.unshift(createPattern(path.join(__dirname, '/adapter.js')))
    files.unshift(createPattern(falconPath + '/falcon-benchmark.js'))
}

initFalcon.$inject = ['config.files']

module.exports = {
    'framework:falcon-benchmark': ['factory', initFalcon]
}