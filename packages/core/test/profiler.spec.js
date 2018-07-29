import profiler from '../lib/profiler.service';

describe('profiler.service', () => {
  const fn = () => {
    let arr = new Float32Array(5e3);
    arr.fill(100);
    arr = arr.map(e => Math.log(e));
  };

  describe('.profile', () => {
    it('should return the tame taken to execute a function', () => {
      const actual = profiler.profile(fn);

      expect(actual).toBeGreaterThan(0);
    });
  });

  describe('.getStats', () => {
    it('should return valid stats for a given execution', () => {
      const fakeExecutions = [100, 200, 300, 400, 500];
      const actual = profiler.getStats(fakeExecutions);
      const expected = {
        avg: 300,
        median: 300,
        max: 500,
        min: 100,
        variance: 20000,
        total: 1500
      };

      expect(actual).toEqual(expected);
    });
  });
});