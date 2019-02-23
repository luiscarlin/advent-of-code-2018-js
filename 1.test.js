const subject = require('./1')

describe('day1', () => {
  describe('sumList', () => {
    it('calculates total sum of numbers in array with positive numbers and zeros', () => {
      expect(subject.sumList([3, 1, 2, 0])).toBe(6)
    })

    it('calculates total sum of numbers in array with negative numbers', () => {
      expect(subject.sumList([1, 5, -6, 0])).toBe(0)
    })
  })

  describe('getFirstRepeatedFreq', () => {
    it('retruns first repeated frequency', () => {
      expect(subject.getFirstRepeatedFreq([2, 3, -3])).toBe(2)
    })
  })
})
