const fs = require('fs')

let lines = fs.readFileSync('./1.in', 'utf8').split('\n')

console.log('part 1', sumList(lines))
console.log('part 2', getFirstRepeatedFreq(lines))

function sumList(lines) {
  return lines
    .filter(line => line)
    .map(num => parseInt(num))
    .reduce((total, num) => total + num)
}

function getFirstRepeatedFreq(lines) {
  let seen = []
  let sum = 0

  let numbers = lines
    .filter(line => line)
    .map(num => parseInt(num))

  while(true) {
    for(let num of numbers) {
      sum += num
      if (seen.includes(sum)) {
        return sum
      }
      else {
        seen.push(sum)
      }
    }
  }
}

module.exports = { sumList, getFirstRepeatedFreq }