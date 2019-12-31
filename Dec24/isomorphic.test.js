const isomorphic = require('./isomorphic');

describe('isomorphic', () => {
    it('isomorphic test', () => {
        expect(isomorphic(['egg', 'add'])).toBe(true);
        expect(isomorphic(['foo', 'bar'])).toBe(false);
        expect(isomorphic(['asdfghjkl', 'qwertyuio'])).toBe(true);
        expect(isomorphic(['asdfgsjkl', 'qwertyuio'])).toBe(false);
        expect(isomorphic(['better', 'fetter'])).toBe(true);
    });
});