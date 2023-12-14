'use strict';

//import
const async = require('async');
const fs = require('fs');

const INTERVAL = 10;
// async check file
let paths = new Array(1000).fill('./dir/index.txt');

paths = paths.map((el, i) => {
  if (i < 10) return el;
  return el + `${Math.random()}`;
});

// console.log(paths);

const checkFile = (path, callback) => {
  console.log(path);
  fs.access(path, (err) => {
    new Promise((res, rej) => {
      setTimeout(() => {
        if (!err) res(callback(null, true));
        else res(callback(null, false));
      }, 1000);
    });
  });
};

const begin = process.hrtime.bigint();
(async () => {
  try {
    console.log('start');
    let res = await async.someSeries(paths, checkFile);
    console.log(res);
    const deff =
      (process.hrtime.bigint() - begin) / 1000000n;
    console.log('Time(ms): ', deff.toString());
  } catch (err) {
    console.log('Error: ' + err.message);
  }
})();

//async iterator

const range = {
  start: 1,
  end: 1000,
  [Symbol.asyncIterator]() {
    let value = this.start;
    let time = Date.now();
    return {
      next: () => {
        let now = Date.now();
        let diff = now - time;
        if (diff > INTERVAL) {
          time = now;
          return new Promise((res, rej) => {
            setTimeout(() => {
              res({
                value,
                done: value++ === this.end + 1,
              });
            }, 0);
          });
        }
        return Promise.resolve({
          value,
          done: value++ === this.end + 1,
        });
      },
    };
  },
};

(async () => {
  for await (const number of range) {
    console.log(number);
  }
})();
