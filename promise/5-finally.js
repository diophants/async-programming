'use strict';

const fs = require('fs');

const readFile = (filename, encode) =>
  fs.promises.readFile(filename, encode);

readFile('./static/file1.txt', 'utf8')
  .then((data) => {
    console.log(data);
    return readFile('./static/file2.txt1', 'utf8');
  })
  .then((data) => {
    console.log(data);
    return readFile('./static/file3.txt', 'utf8');
  })
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log('Error readFile: ', err);
  })
  .finally(() => {
    console.log('finally');
  });
