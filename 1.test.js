const findTotal = require('./1')

describe('sumList', () => {
  it('calculates total sum of numbers in array', () => {
    expect(findTotal([0, 1, 2])).toBe(3)
  })
})