const subject = require('./2')

describe('day2', () => {
  describe('getCountRepeatedTwice', () => {
    it('returns 1 if a letter is repeated twice', () => {
      const actual = subject.getCountRepeatedTwice('asda')
      expect(actual).toBe(1)
    })
    it('returns 0 if there are NO letters that repeat twice', () => {
      const actual = subject.getCountRepeatedTwice('asdmnb')
      expect(actual).toBe(0)
    })
  })
})