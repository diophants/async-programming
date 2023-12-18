class AsyncCounter {
  constructor(begin, end, step) {
    this.begin = begin;
    this.end = end;
    this.step = step;
  }

  [Symbol.asyncIterator]() {
    const step = this.step;
    const end = this.end;
    let begin = this.begin;
    const iterator = {
      async next() {
        return {
          value: (begin += step),
          done: begin > end,
        };
      },
    };
    return iterator;
  }
}

const iterable = new AsyncCounter(0, 150, 40);

const iterator = iterable[Symbol.asyncIterator]();

iterator.next().then(console.log);
iterator.next().then(console.log);
iterator.next().then(console.log);
iterator.next().then(console.log);
iterator.next().then(console.log);

(async () => {
  for await (const i of iterable) {
    console.log(i);
  }
})();
