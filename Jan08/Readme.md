[Cycled]

Implement the below mentioned functionality
describe('Cycled', () => {
    const fixture = [1, 2, 3];
  
    test('.current()', () => {
      const c = new Cycled(fixture);
      expect(c.current()).toBe(1);
      c.next();
      expect(c.current()).toBe(2);
    });
  
    test('.next()', () => {
      const c = new Cycled(fixture);
      expect([c.next(), c.next(), c.next(), c.next()]).toEqual([2, 3, 1, 2]);
    });
  
    test('.previous()', () => {
      const c = new Cycled(fixture);
      expect([c.previous(), c.previous(), c.previous(), c.previous()]).toEqual([3, 2, 1, 3]);
    });
  
    test('.step()', () => {
      const c = new Cycled(fixture);
      expect(c.step(2)).toBe(3);
      expect(c.step(-2)).toBe(1);
    });
  
    test('.index', () => {
      const c = new Cycled(fixture);
      expect(c.index).toBe(0);
      c.index = 2;
      expect(c.index).toBe(2);
      expect(c.current()).toBe(3);
      c.index = -7;
      expect(c.index).toBe(2);
      expect(c.current()).toBe(3);
    });
  
    test('.reversed()', () => {
      const c = new Cycled(fixture);
      expect(c.reversed().next()).toBe(2);
    });
  
    test('.indexOf()', () => {
      const fixture = [1, 2, 3];
      const c = new Cycled(fixture);
      expect(c.indexOf(3)).toBe(2);
    });
  
    test('iterable', () => {
      const fixture = [1, 2, 3];
      const c = new Cycled(fixture);
      expect(c[Symbol.iterator]().next().value).toEqual(1);
    });
  
    test('iterations on destructuring', () => {
      const fixture = [1, 2, 3];
      const c = new Cycled(fixture);
      expect([...c]).toEqual(fixture);
      expect([...c]).toEqual(fixture);
      c.next();
      expect([...c]).toEqual([2, 3, 1]);
    });
  });

[Fibonacci]

Implement the below mentioned functionality
describe('fibonacciIter', () => {
    test('should be an iterable', () => {
      const iterator = fibonacciIter[Symbol.iterator]();
      expect(typeof fibonacciIter[Symbol.iterator]).toBe('function');
      expect(typeof iterator.next).toBe('function');
      expect(iterator.next()).toHaveProperty('value');
      expect(iterator.next()).toHaveProperty('done');
    });
  
    test('should return fibonacciIter series', () => {
      const iterator = fibonacciIter[Symbol.iterator]();
      expect(iterator.next().value).toBe(1);
      expect(iterator.next().value).toBe(2);
      expect(iterator.next().value).toBe(3);
      expect(iterator.next().value).toBe(5);
      expect(iterator.next().value).toBe(8);
      expect(iterator.next().value).toBe(13);
      expect(iterator.next().value).toBe(21);
      expect(iterator.next().value).toBe(34);
      expect(iterator.next().value).toBe(55);
      expect(iterator.next().value).toBe(89);
      expect(iterator.next().value).toBe(144);
    });
  });

[Range Iterable]

Implement the below mentioned functionality

describe('rangeIter', () => {
    it('if end value is greater than start value it produces values', () => {
      const iterable = rangeIter(-4, -1);
      expect([...iterable]).toEqual([-4, -3, -2, -1]);
    });
    it('if start value is greater than end value it does not produce values', () => {
      const iterable = rangeIter(3, -1);
      expect([...iterable]).toEqual([]);
    });
    it('if start value is equal to end value it produces one value', () => {
      const iterable = rangeIter(-2, -2);
      expect([...iterable]).toEqual([-2]);
    });
  
    describe('converting instance to array', () => {
      it('returns the same as converting [Symbol.iterator]() iterator to array', () => {
        const rangeIterable = rangeIter(2, 5);
        const iterator = rangeIterable[Symbol.iterator]();
        expect([...iterator]).toEqual([2, 3, 4, 5]);
      });
    });
  
    describe('bad arguments', () => {
      it('throws an exception when it is not passed any parameter', () => {
        expect( () => rangeIter().next()).toThrowError(TypeError, /undefined is not a number/);
      });
  
      it('throws an exception when it is not passed second parameter', () => {
        expect(() => rangeIter(2).next()).toThrowError(TypeError, /undefined is not a number/);
      });
  
      it('throws an exception when is not passed number as second parameter', () => {
        expect(() => rangeIter(2, 'a').next()).toThrowError(TypeError, /a is not a number/);
      });
    });
  });