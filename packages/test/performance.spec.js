benchmark('.function', () => {
  this.array.fill(100);
},
{
  before: () => {
    console.log('Before');
    this.array = new Float32Array(100);
  },
  after: () => {
    this.array = undefined;
    console.log('After');
  }
});