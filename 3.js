const fs = require('fs');

const parseClaim = claim => {
  let parsedClaim = claim.split(' ');

  let id = parsedClaim[0];

  let [x, y] = parsedClaim[2].split(',');
  x = Number(x);
  y = Number(y.slice(0, -1));

  let [width, height] = parsedClaim[3].split('x');
  width = Number(width);
  height = Number(height);

  return { id, x, y, width, height };
};

const main = () => {
  let lines = fs.readFileSync('./3.in', 'utf8').split('\n');

  const coordinates = {};

  for (let line of lines) {
    const { id, x, y, width, height } = parseClaim(line);

    for (let dx of Array.from(Array(width).keys())) {
      for (let dy of Array.from(Array(height).keys())) {
        coordinates[[x + dx, y + dy]] = coordinates[[x + dx, y + dy]]
          ? coordinates[[x + dx, y + dy]] + 1
          : 1;
      }
    }
  }

  let sharedSquares = 0;

  for (let count of Object.values(coordinates)) {
    if (count > 1) sharedSquares++;
  }

  console.log('part 1', sharedSquares);
};

if (require.main == module) {
  main();
}
