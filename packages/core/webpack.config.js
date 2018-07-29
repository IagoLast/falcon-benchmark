const path = require('path');

module.exports = {
  entry: './lib/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'falcon-benchmark.js',
    library: 'FalconBenchmark',
    libraryTarget: 'umd',
  },
  devtool: 'source-map',
};