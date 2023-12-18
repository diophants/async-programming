'use strict';

const callbackify =
  (fn) =>
  (...args) => {
    const callback = args.pop();
    fn(...args)
      .then((res) => {
        callback(null, res);
      })
      .catch((err) => callback(err));
  };

const multPromise = (x) => Promise.resolve(x * 2);
const multCallback = callbackify(multPromise);

multCallback(20, (err, data) => console.log(data));
