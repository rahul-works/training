const flatten_arr = require('./flatten_arr');

describe('Flatten Array', () => {
      it('flatten array', () => {
        expect(flatten_arr([1, 2, [3, 4, [5, 6]]])).toEqual([1, 2, 3, 4, 5, 6]);
      });
});