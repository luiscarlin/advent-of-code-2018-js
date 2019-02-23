const subject = require('./2')

describe('day2', () => {
  describe('getCountRepeated', () => {
    it('returns 1 when letter is repeated twice and requesting repeated twice', () => {
      const actual = subject.getCountRepeated('asda', 2)
      expect(actual).toBe(1)
    })
    it('returns 0 if there are NO letters that repeat twice and requesting repeated twice', () => {
      const actual = subject.getCountRepeated('asdmnb', 2)
      expect(actual).toBe(0)
    })
  })
})