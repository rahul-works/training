const pascalTriangle = require('./pascalTriangle');

describe('pascalTriangle', () => {
    it('pascalTriangle', () => {
        expect(pascalTriangle(3)).toStrictEqual([ [ 1 ], [ 1, 1 ], [ 1, 2, 1 ] ]);
        const twentieth = [
            1,
            19,
            171,
            969,
            3876,
            11628,
            27132,
            50388,
            75582,
            92378,
            92378,
            75582,
            50388,
            27132,
            11628,
            3876,
            969,
            171,
            19,
            1];
        expect(pascalTriangle(20)[19]).toStrictEqual(twentieth);
    });
});