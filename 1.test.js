const findTotal = require('./1')

describe('sumList', () => {
  it('calculates total sum of numbers in array with positive numbers and zeros', () => {
    expect(findTotal([3, 1, 2, 0])).toBe(6)
  })

  it('calculates total sum of numbers in array with negative numbers', () => {
    expect(findTotal([1, 5, -6, 0])).toBe(0)
  })
})