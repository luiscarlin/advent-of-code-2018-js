const fs = require('fs');

const main = () => {
  let lines = fs.readFileSync('./2.in', 'utf8').split('\n');

  console.log(lines);
};

if (require.main == module) {
  main();
}
