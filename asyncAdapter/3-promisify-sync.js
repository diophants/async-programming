'use strict';

const promisifySync =
  (fn) =>
  (...args) => {
    const data = fn(...args);
    return new Promise((res, rej) => {
      if (data instanceof Error) rej(data);
      else res(data);
    });
    if (res instanceof Error) return Promise.reject(res);
    else return Promise.resolve(res);
  };

const mult = (n) => n * 2;
const div = (n) => n / 2;

const multPromise = promisifySync(mult);
const divPromise = promisifySync(div);

multPromise(20)
  .then((res) => divPromise(res))
  .then((res) => console.log(res));
