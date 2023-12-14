'use strict';

// nextTick => Promise => setTimeout => SetImmediate => I/O

const promise1 = new Promise((res, rej) => {
  setImmediate(() => {
    res({ promise1: 'value1' });
  });
});

console.log({ promise1 });
promise1.then(console.log);

const promise2 = Promise.reject({ promise2: 'err' });

console.log({ promise2 });
promise2.then(console.log).catch(console.log);

console.log('End parallel code.');
setImmediate(() => console.log('setImmediate'));
// I/O

const fs = require('fs');

const readFile = (filename, encode) => {
  return new Promise((res, rej) => {
    fs.readFile(filename, (err, data) => {
      if (err) return rej(err);
      res(data.toString());
    });
  });
};

readFile('./static/file1.txt')
  .then((data) => {
    console.log('readFile: ', data);
    return readFile('./static/file2.txt');
  })
  .then((data) => {
    console.log('readFile: ', data);
    return readFile('./static/file3.txt');
  })
  .then((data) => console.log('readFile: ', data))
  .catch((err) => console.log(err.message));
