const cacheFunction = require('./cache');

describe('cacheFunction', () => {
    it('should return a function', () => {
      expect(typeof cacheFunction()).toBe('function');
    });
});