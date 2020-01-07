const aperture = require('./Aperture');

describe('Aperture', () => {
      it('Aperture', () => {
        expect(aperture(2, [1, 2, 3, 4, 5])).toEqual([[1, 2], [2, 3], [3, 4], [4, 5]]);
        expect(aperture(3, [1, 2, 3, 4, 5])).toEqual([[1, 2, 3], [2, 3, 4], [3, 4, 5]]);
        expect(aperture(7, [1, 2, 3, 4, 5])).toEqual([]);
      });
});