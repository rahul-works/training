const sumFibs = require('./sumoddfibs');

describe('sumoddfibs', () => {
    it('sumoddfibs', () => {
        expect(sumFibs(10)).toEqual(10);
    });
});