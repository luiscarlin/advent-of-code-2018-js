const fs = require('fs')

let lines = fs.readFileSync('./1.in', 'utf8').split('\n')

const total = lines.filter(line => line)
  .map(num => parseInt(num))
  .reduce((total, num) => total + num)

console.log('part 1', total)
