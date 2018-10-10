const calculator = require('../app/calculator');

test('adds 1 + 2 to equal 3', () => {
  expect(calculator.add(1, 2)).toBe(3);
});

test('adds 2 - 1 to equal 1', () => {
  expect(calculator.subtract(2, 1)).toBe(1);
});

test('adds 7 * 2 to equal 14', () => {
  expect(calculator.multiply(7, 2)).toBe(14);
});