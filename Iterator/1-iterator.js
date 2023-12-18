'use strict';

const iterator = {
  counter: 1,
  end: 3,
  done: false,
  next() {
    if (this.counter > this.end) this.done = true;
    if (this.done)
      return { value: undefined, done: this.done };
    return { value: this.counter++, done: this.done };
  },
};

const step1 = iterator.next();
const step2 = iterator.next();
const step3 = iterator.next();
const step4 = iterator.next();

console.log({ step1, step2, step3, step4 });
