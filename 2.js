function getCountRepeated(str, repeated) {
  let count = {}
  str.split('').forEach(letter => count[letter] = letter in count ? count[letter] + 1 : 1)

  return Object.values(count).reduce((accumulator, current) => (current == repeated ? accumulator + 1: accumulator), initalValue = 0)
}

module.exports = { getCountRepeated }