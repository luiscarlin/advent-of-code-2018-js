const fs = require('fs');

const isOffByOne = (line1, line2) => {
  let offBy = 0;
  let same = [];

  for (let i = 0; i < line1.length; i++) {
    if (line1[i] != line2[i]) offBy++;
    else {
      same.push(line1[i]);
    }
  }

  return offBy === 1
    ? { offByOne: true, same: same.join('') }
    : { offByOne: false, same: same.join('') };
};

const part1 = () => {
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

  return numberDouble * numberTriple;
};

const part2 = () => {
  let lines = fs.readFileSync('./2.in', 'utf8').split('\n');

  for (let line of lines) {
    for (let otherLine of lines) {
      const { offByOne, same } = isOffByOne(line, otherLine);

      if (offByOne) {
        return same;
      }
    }
  }
};

const main = () => {
  console.log('part1', part1());
  console.log('part2', part2());
};

if (require.main == module) {
  main();
}
