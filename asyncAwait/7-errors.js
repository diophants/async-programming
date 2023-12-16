'use strict';

const fs = require('fs');
const { readFile } = fs.promises;
(async () => {
  const file1 = await readFile('1-prototype.js');
  const file2 = await readFile('2-sync').catch((err) => {
    console.error(err.message);
    return readFile('2-sync.js');
  });
  const file3 = await readFile('3-async.js');
  console.log([file1.length, file2.length, file3.length]);
})();
