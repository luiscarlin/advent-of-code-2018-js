const fs = require('fs')

let lines = fs.readFileSync('./1.in', 'utf8').split('\n')

let total = 0

lines.forEach(num => {
  if (num){
    total += parseInt(num)
  }
})

console.log('part 1', total)
