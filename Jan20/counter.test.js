const newCounter = require('./counter');

describe('counter', () => {
    it('counter', () => {
        expect(newCounter()).toEqual(1);
        expect(newCounter()).toEqual(2);
    });
});