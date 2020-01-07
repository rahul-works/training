const alternatingCharacters = require('./AlternatingCharacters');

describe('alternatingCharacters', () => {
      it('should return addition of 2 arrays as a separate array', () => {
        expect(alternatingCharacters(['AAAA', 'BBBBB', 'ABABABAB', 'BABABA', 'AAABBB'])).toEqual([3, 4, 0, 0, 4]);
        expect(alternatingCharacters(['ABBABBAA'])).toEqual([3]);
      });
});