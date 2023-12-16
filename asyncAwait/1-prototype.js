'use strict';

console.dir(Function);

const AsyncFunciton = (async () => {}).constructor;
console.log(AsyncFunciton);

const fn = () => {};
const afn = async () => {};
console.dir({ fn: typeof fn, afn: typeof afn });

console.log(fn instanceof Function);
console.log(afn instanceof Function);
console.log(afn instanceof AsyncFunciton);
console.log(
  fn instanceof AsyncFunciton,
  '-> fn it is not instanceof async Function'
);

const arr = [1, 2, 3];
const set = new Set(arr);

console.log(afn.__proto__.constructor);
console.log(afn.__proto__.__proto__.constructor);
console.log(afn.__proto__.__proto__.__proto__.constructor);
console.log(set.__proto__.constructor);

console.log(
  Object.getPrototypeOf(
    Object.getPrototypeOf(Object.getPrototypeOf(afn))
  ).constructor
);
