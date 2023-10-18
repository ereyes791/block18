const concatOdds = require('./concantOdds');
test('concatOdds([3, 2, 1], [9, 1, 1, 1, 4, 15, -1]) to equal [-1, 1, 3, 9, 15]', () => {
  expect(concatOdds([3, 2, 1], [9, 1, 1, 1, 4, 15, -1])).toEqual([-1, 1, 3, 9, 15]);
});
test('concatOdds([3, 2, 1], 0) to equal [3,2,1]]', () => {
    expect(concatOdds([3, 2, 1], 0)).toEqual([3,1]);
});