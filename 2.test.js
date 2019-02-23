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

    it('returns 1 when letter is repeated 3 times and requesting repeated 3 times', () => {
      const actual = subject.getCountRepeated('asdaa', 3)
      expect(actual).toBe(1)
    })

    it('returns 2 when 2 letters repeat 3 times and requesting repeated 3 times', () => {
      const actual = subject.getCountRepeated('asdxaaxx', 3)
      expect(actual).toBe(2)
    })
  })
})