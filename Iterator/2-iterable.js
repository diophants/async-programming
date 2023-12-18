const iterable = {
  [Symbol.iterator]() {
    const iterator = {
      counter: 0,
      next() {
        return {
          value: this.counter++,
          done: this.counter > 3,
        };
      },
    };
    return iterator;
  },
};

const iterator = iterable[Symbol.iterator]();

const step1 = iterator.next();
const step2 = iterator.next();
const step3 = iterator.next();
const step4 = iterator.next();

console.log({ step1, step2, step3, step4 });

(async () => {
  for (const i of iterable) {
    console.log(i);
  }
})();

console.log(...iterable);
