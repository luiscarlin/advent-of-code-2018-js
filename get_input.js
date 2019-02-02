const axios = require('axios')

require('dotenv').config()

const cookie = process.env.COOKIE
const day = '1'
const year = process.env.YEAR

axios.get(`https://adventofcode.com/${year}/day/${day}/input`, { headers: { Cookie: `session=${cookie};`} })
  .then(response => {
    console.log(response.data)
  })
  .catch(error => {
    console.log(error);
  });
