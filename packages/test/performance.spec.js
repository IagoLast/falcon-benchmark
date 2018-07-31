benchmark('sync function', () => {
  this.array = new Float32Array(100);
  this.array.fill(100);
});

benchmark('async function', () => {
  return new Promise(function (resolve) {
    setTimeout(resolve, 20);
  });
}, { runs: 100 });

benchmark('failed function', () => {
  throw new Error('Error message');
});

xbenchmark('skipped function', () => {
  console.warn('Skipped!');
});

benchmark('async function initialization', () => {
  this.array.fill(100);
}, {
  runs: 100,
  before: () => {
    return new Promise(resolve => {
      this.array = new Float32Array(100);
      setTimeout(resolve, 0);
    });
  }
});