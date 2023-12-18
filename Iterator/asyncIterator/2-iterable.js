const iterable = {
  [Symbol.asyncIterator]() {
    const iterator = {
      counter: 0,
      async next() {
        return {
          value: this.counter++,
          done: this.counter > 3,
        };
      },
    };
    return iterator;
  },
};

(async () => {
  const iterator = await iterable[Symbol.asyncIterator]();
  const step1 = await iterator.next();
  console.log(step1);
  iterator.next().then(console.log);
  iterator.next().then(console.log);
  iterator.next().then(console.log);
  iterator.next().then(console.log);

  for await (const i of iterable) {
    console.log(i);
  }
})();
