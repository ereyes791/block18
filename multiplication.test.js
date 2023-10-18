const mul = require('./multiplication');
test('multiplication 1 * 2 to equal 2', () => {
  expect(mul(1, 2)).toBe(2);
});
// Path: multiplication.test.js
test('multiplication 2 * -2 to equal 4', () => {
  expect(mul(2, -2)).toBe(-4);
});
test('multiplication 2 * 2 as string to equal null', () => {
    expect(mul(2, "2")).toBe(4);
});
