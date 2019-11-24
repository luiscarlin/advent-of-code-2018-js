const fs = require('fs');
const { rangeWithStart } = require('./utils');

function main() {
  let idByMinute = {};
  let minsAsleep = {};

  let lines = fs.readFileSync('./4.in', 'utf8').split('\n');
  lines.sort();

  let id = 0;
  let start = 0;
  let end = 0;

  for (let line of lines) {
    words = line.split(' ');

    if (line.includes('Guard')) {
      id = words[3];
      id = id.slice(1);
      continue;
    }

    minute = Number(words[1].split(':')[1].slice(0, -1));

    if (line.includes('falls asleep')) {
      start = minute;
      continue;
    }

    if (line.includes('wakes up')) {
      end = minute;
    }

    for (let time of rangeWithStart(start, end)) {
      idByMinute[[id, time]] = idByMinute[[id, time]]
        ? idByMinute[[id, time]] + 1
        : 1;
      minsAsleep[id] = minsAsleep[id] ? minsAsleep[id] + 1 : 1;
    }
  }

  const idMostSleeping = Object.keys(minsAsleep).reduce((a, b) =>
    minsAsleep[a] > minsAsleep[b] ? a : b
  );

  let filteredIdByMinute = {};
  for (let [key, val] of Object.entries(idByMinute)) {
    if (key.split(',').includes(idMostSleeping)) {
      filteredIdByMinute[key] = val;
    }
  }

  const mostPopulatMinute = Object.keys(filteredIdByMinute).reduce((a, b) =>
    filteredIdByMinute[a] > filteredIdByMinute[b] ? a : b
  );

  const [first, second] = mostPopulatMinute.split(',');

  console.log('part 1', first * second);
}

if (require.main == module) {
  main();
}
