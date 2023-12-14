'use strict';

const fs = require('fs');

const readFile = async (filename) => {
  fs.readFile(filename, (err, data) => {
    return data.toString();
  });
};
(async () => {
  let res = await readFile('./static/file1.txt');
  console.log(res);
})();
