const fs = require('fs');

const main = () => {
  let lines = fs.readFileSync('./2.in', 'utf8').split('\n');

  let numberDouble = 0;
  let numberTriple = 0;

  lines.forEach(line => {
    const count = {};

    line
      .split('')
      .forEach(
        letter => (count[letter] = count[letter] ? count[letter] + 1 : 1)
      );

    const values = Object.values(count);

    if (values.includes(2)) numberDouble++;
    if (values.includes(3)) numberTriple++;
  });

  console.log('part 1', numberDouble * numberTriple);
};

if (require.main == module) {
  main();
}
