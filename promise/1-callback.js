'use strict';

const fs = require('fs');

fs.readFile('./static/file1.txt', 'utf-8', (err, data) => {
  console.log(err || data.toString());
  fs.readFile(
    './static/file2.txt',
    'utf-8',
    (err, data) => {
      console.log(err || data.toString());
      fs.readFile(
        './static/file3.txt',
        'utf-8',
        (err, data) => {
          console.log(err || data.toString());
        }
      );
    }
  );
});
