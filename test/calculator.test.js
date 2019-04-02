const calculator = require('../app/calculator');

test('adds 1 + 2 to equal 3', () => {
  expect(calculator.add(1, 2)).toBe(3);
});
test('subtracts 3 - 2 to equal 1', () => {
  expect(calculator.subtract(3, 2)).toBe(1);
});
test('multiplies 3 * 2 to equal 6', () => {
  expect(calculator.multiply(3, 2)).toBe(6);
});
test('isOdd = 5', () => {
  expect(calculator.isOdd(5)).toBe(true);
 });
 test('isEven = 4', () => {
  expect(calculator.isEven(4)).toBe(true);
 });
 test('isDivisibleBy = 2', () => {
  expect(calculator.isDivisibleBy(10, 2)).toBe(true); 
  expect(calculator.isDivisibleBy(13, 7)).toBe(false);
 });