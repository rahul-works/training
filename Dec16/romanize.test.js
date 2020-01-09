const convertIntToRoman = require('./romanize');

describe('romanize', () => {
    it('romanize', () => {
        expect(convertIntToRoman(12)).toEqual('XII');
    });
});