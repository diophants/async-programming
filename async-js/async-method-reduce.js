'use strict';

const async = require('async');
const fs = require('fs');

const fileList = [
  './dir/file1.txt',
  './dir/file2.txt',
  './dir/file3.txt',
];
const whithMissingFileList = [
  './dir/file1.txt',
  './dir/file2.txt',
  './dir/file4.txt',
  './dir/file3.txt',
];

const getBites = (memo, el, callback) => {
  fs.stat(el, (err, stat) => {
    if (err) {
      return callback(err);
    }
    callback(null, memo + stat.size);
  });
};

(async () => {
  try {
    let res = await async.reduce(
      whithMissingFileList,
      0,
      getBites
    );
    console.log(res);
  } catch (err) {
    console.log(err.message);
  }
})();
