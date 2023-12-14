const { fetch } = require('./6-fetch.js');

fetch('http://localhost:3000')
  .then((data) => console.log({ data }))
  .catch((err) => console.log('Error'));
