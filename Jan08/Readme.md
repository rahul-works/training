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
});

[Fibonacci]

Implement the below mentioned functionality
describe('fibonacciIter', () => {
    test('should be an iterable', () => {
      const iterator = fibonacciIter();
      expect(typeof iterator.next).toBe('function');
      expect(iterator.next()).toHaveProperty('value');
      expect(iterator.next()).toHaveProperty('done');
    });
  
    test('should return fibonacciIter series', () => {
      const iterator = fibonacciIter();
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