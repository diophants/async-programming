'use strict';

const promisify =
  (fn) =>
  (...args) => {
    return new Promise((resolve, reject) => {
      fn(...args, (err, res) => {
        if (err) reject(err);
        else resolve(res);
      });
    });
  };

const firstCallback = (x, callback) => {
  setTimeout(() => {
    const res = x * 2;
    callback(null, res);
  }, 0);
};
const firstPromise = promisify(firstCallback);

const secondCallback = (x, callback) => {
  setTimeout(() => {
    const res = x / 2;
    callback(null, res);
  }, 0);
};
const secondPromise = promisify(secondCallback);

firstCallback(20, (err, res) => {
  secondCallback(res, (err, res) => {
    console.log({ asyncCallback: res });
  });
});

firstPromise(20).then((res) =>
  secondPromise(res).then((res) =>
    console.log({ asyncPromise: res })
  )
);
