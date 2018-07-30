benchmark('sync function', () => {
  this.array = new Float32Array(100);
  this.array.fill(100);
});


benchmark('async function', () => {
  return new Promise(function (resolve) {
    setTimeout(resolve, 20);
  });
}, { runs: 100 });