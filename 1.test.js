const one = require('./1')
// const getFirstRepeatedFreq = require('./1').getFirstRepeatedFreq

describe('day1', () => {
  describe('sumList', () => {
    it('calculates total sum of numbers in array with positive numbers and zeros', () => {
      expect(one.sumList([3, 1, 2, 0])).toBe(6)
    })

    it('calculates total sum of numbers in array with negative numbers', () => {
      expect(one.sumList([1, 5, -6, 0])).toBe(0)
    })
  })

  describe('getFirstRepeatedFreq', () => {
    it('retruns first repeated frequency', () => {
      expect(one.getFirstRepeatedFreq([2, 3, -3])).toBe(2)
    })
  })
})
