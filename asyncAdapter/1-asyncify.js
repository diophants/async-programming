'use strict';

const asyncify =
  (fn) =>
  (...args) => {
    setTimeout(() => {
      const callback = args.pop();
      const res = fn(...args);
      if (res instanceof Error) callback(res);
      else callback(null, res);
    }, 0);
  };

const mult = (n) => n * 2;
const div = (n) => n / 2;

console.log({ sync: div(mult(20)) });

const multAsync = asyncify(mult);
const divAsync = asyncify(div);

multAsync(20, (err, data) => {
  divAsync(data, (err, res) => {
    console.log({ async: res });
  });
});
