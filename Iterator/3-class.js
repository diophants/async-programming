class Counter {
  constructor(begin, end, step = 1) {
    this.begin = begin;
    this.end = end;
    this.step = step;
  }

  [Symbol.iterator]() {
    const step = this.step;
    const end = this.end;
    let i = this.begin;
    let nextValue = 0;
    const iterator = {
      next() {
        i = nextValue;
        nextValue += step;
        return {
          value: i,
          done: nextValue > end,
        };
      },
    };
    return iterator;
  }
}

const iterable = new Counter(0, 5);

const iterator = iterable[Symbol.iterator]();

const step1 = iterator.next();
const step2 = iterator.next();
// console.log({ step1, step2 });

for (const i of iterable) {
  console.log(i);
}

console.log(...iterable);
