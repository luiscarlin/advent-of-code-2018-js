const fs = require('fs')

let lines = fs.readFileSync('./1.in', 'utf8').split('\n')

console.log('part 1', sumList(lines))

function sumList(lines) {
  return lines
    .filter(line => line)
    .map(num => parseInt(num))
    .reduce((total, num) => total + num)
}

module.exports = (sumList)