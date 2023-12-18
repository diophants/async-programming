const iterator = {
  counter: 0,
  async next() {
    return {
      value: this.counter++,
      done: this.counter > 3,
    };
  },
};

iterator.next().then(console.log);
iterator.next().then(console.log);
