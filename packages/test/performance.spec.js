benchmark('.function', () => {
  this.array.fill(100);
},
{
  before: () => {
    this.array = new Float32Array(100);
  },
  after: () => {
    this.array = undefined;
  }
});