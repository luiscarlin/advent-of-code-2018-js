const rangeWithStart = (start, end) => [...Array(end).keys()].slice(start);
const range = end => [...Array(end).keys()];

module.exports = { range, rangeWithStart };
