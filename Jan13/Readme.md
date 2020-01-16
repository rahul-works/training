[Simple Iterable]
Design a simple iterable based on the below mentioned test cases

describe('simpleIterable', () => {
    test('should not be a generator function', () => {
      expect(simpleIterable.constructor.name).not.toBe('GeneratorFunction');
    });
  
    test('should have a Symbol.iterator method', () => {
      expect(typeof simpleIterable[Symbol.iterator]).toBe('function');
    });
  
    test('Symbol.iterator method creates an iterator', () => {
      const iterator = simpleIterable[Symbol.iterator]();
      expect(typeof iterator.next).toBe('function');
    });
  
    test('iterator.next returns an object with value and done properties', () => {
      const iterator = simpleIterable[Symbol.iterator]();
      expect(iterator.next()).toEqual({
        value: 1,
        done: false,
      });
    });
  
    test('iteration should finish after value is 5', () => {
      const iterator = simpleIterable[Symbol.iterator]();
      let value = iterator.next(); // 1
      value = iterator.next(); // 2
      value = iterator.next(); // 3
      value = iterator.next(); // 4
      value = iterator.next(); // 5
      expect(value).toEqual({ value: 5, done: false });
      expect(iterator.next()).toEqual({ value: undefined, done: true });
    });
});

