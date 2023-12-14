'use strict';

const fs = require('fs');

const readFile = (filename, encode) =>
  fs.promises.readFile(filename, encode);

const chunks = [];

readFile('./static/file1.txt')
  .then(
    (data) => {
      chunks.push(data);
      return readFile('./static/file2.txt');
    },
    (err) => {
      console.log('second then arg: ', err);
      return readFile('./static/file2.txt');
    }
  )
  .then((data) => {
    chunks.push(data);
    return readFile('./static/file3.txt');
  })
  .catch((err) => {
    console.log('catch 1: ', err);
    return readFile('./static/file3.txt');
  })
  .then((data) => {
    chunks.push(data);
  })
  .catch((err) => console.log('catch 2: ', err))
  .finally(() => {
    const json = Buffer.concat(chunks).toString();
    try {
      const obj = JSON.parse(json);
      console.log(obj);
    } catch (err) {
      console.log('err');
    }
  });
