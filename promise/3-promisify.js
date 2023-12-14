'use strict';
const fs = require('fs');

const promisify =
  (fn) =>
  (...args) =>
    new Promise((res, rej) => {
      args.push((err, result) => {
        if (err) return rej(err);
        res(result);
      });
      fn(...args);
    });

const readFile = promisify(fs.readFile);

readFile('./static/file1.txt', 'utf-8')
  .then((data) => {
    console.log(data);
    return readFile('./static/file2.txt', 'utf-8');
  })
  .then((data) => {
    console.log(data);
    return readFile('./static/file3.txt', 'utf-8');
  })
  .then((data) => console.log(data))
  .catch((err) => console.log(err.message));

const util = require('util');
const readFile2 = util.promisify(fs.readFile);

readFile2('./static/file1.txt', 'utf-8')
  .then((data) => {
    console.log(data);
    return readFile('./static/file2.txt', 'utf-8');
  })
  .then((data) => {
    console.log(data);
    return readFile('./static/file3.txt', 'utf-8');
  })
  .then((data) => console.log(data))
  .catch((err) => console.log(err.message));
