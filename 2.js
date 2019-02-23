function getCountRepeated(str, repated) {
  let count = {}
  str.split('').forEach(letter => count[letter] = letter in count ? count[letter] + 1 : 0)

  return Object.values(count).reduce((accumulator, current) => current == repated ? accumulator += 1: accumulator)
}

module.exports = { getCountRepeated }