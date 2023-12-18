'use strict';

const callbackify = (promise) => (callback) => {
  promise.then((res) => {
    if (res instanceof Error) callback(res);
    else callback(null, res);
  });
};

const promise = new Promise((res, rej) => {
  res(20);
});
const callback = callbackify(promise);

callback((err, data) => console.log(data * 2));
