'use strict';

const { fetch } = require('./6-fetch');

const baseURL = 'http://localhost:3000';

const promises = [
  fetch(baseURL + '/'),
  fetch(baseURL + '/person'),
  fetch(baseURL + '/city'),
];

Promise.all(promises)
  .then((res) => console.log(res))
  .catch((err) => console.log(err));
