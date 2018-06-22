const path = require('path');

module.exports = {
    entry: './lib/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'falcon-benchmark.js',
        library: 'falcon',
        libraryTarget: 'umd',
    },
    devtool: 'eval-source-map',
};