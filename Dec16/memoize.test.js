const memoize = require('./memoize');

describe('memoize', () => {
    it('memoize', () => {
        expect(memoize()).toEqual(22);
        expect(memoize()).toEqual(22);
    });
});