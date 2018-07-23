const { add, sub, mul, div } = require('./calculator');

test('add 1 + 2 to equal 3', () => {
  expect(add(1, 2)).toBe(4);
});

test('sub 1 - 2 to equal -1', () => {
  expect(sub(1, 2)).toBe(-1);
});

test('mul 1 x 2 to equal 2', () => {
  expect(mul(1, 2)).toBe(2);
});

test('div 1 : 2 to equal 0.5', () => {
  expect(div(1, 2)).toBe(0.5);
});

test('can not div by zero', () => {
  expect(div(1, 0)).toBe("Can not divide by zero");
});
