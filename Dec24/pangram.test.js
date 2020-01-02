const isPangram = require('./pangram');

describe('pangram', () => {
    it('checking pangram', () => {
        expect(isPangram('the quick brown fox jumps over the lazy dog')).toBe(true);
        expect(isPangram('a quick of the enemy will jeopardize gunboats')).toBe(false);
    });
});