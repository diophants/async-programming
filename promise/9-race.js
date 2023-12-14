'use strict';

const { fetch } = require('./6-fetch.js');

const baseURL = 'http://localhost:3000';

const promises = [
  fetch(baseURL + '/person'),
  fetch(baseURL + '/'),
  fetch(baseURL + '/city'),
];
Promise.race(promises)
  .then((res) => console.log(res))
  .catch((err) => console.log(err));
