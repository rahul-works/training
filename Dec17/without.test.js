const without = require('./without');

test('without([1, 2], [1, 2, 1, 4, 5])', () => {
  expect(without([1, 2], [1, 2, 1, 4, 5])).toStrictEqual([4, 5]);
});
test('without([0], [-0]).length', () => {
  expect(without([0], [-0]).length).toStrictEqual(1);
});
test('without([1, 2], [1, 2, 1, 3, 4])', () => {
  expect(without([1, 2], [1, 2, 1, 3, 4])).toStrictEqual([3, 4]);
});
