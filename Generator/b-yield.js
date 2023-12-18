'use strict';

function* generator(begin, end, step) {
  let value = begin;
  while (value < end) {
    value += step;
    if (value > end) return;
    const back = yield value;
    if (back) value += back;
  }
}

const c = generator(0, 50, 12);

const step1 = c.next();
const step2 = c.next();
const step3 = c.next(6);
const step4 = c.next();
const step5 = c.next();

console.log({ c, step1, step2, step3, step4, step5 });
