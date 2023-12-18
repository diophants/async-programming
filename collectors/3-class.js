'use strict';

// коллектор принимает число, и ожидает пока выполнятся определённое кол-во функций

class Collector {
  constructor(expected) {
    this.expectKey = Array.isArray(expected)
      ? new Set(expected)
      : null;
    this.expect = this.expectKey
      ? expected.length
      : expected;
    this.keys = new Set();
    this.count = 0;
    this.timer = null;
    this.doneCallback = () => {};
    this.finished = false;
    this.data = {};
  }

  collect(key, err, data) {
    if (this.finished) return this;
    if (err) {
      this.finished = true;
      this.finalize(err, this.data);
    }
    if (!this.keys.has(key)) this.count++;
    this.keys.add(key);
    this.data[key] = data;
    if (this.count === this.expect) {
      this.finished = true;
      this.finalize(null, this.data);
    }
    return this;
  }

  finalize(err, data) {
    this.doneCallback(err, data);
    clearTimeout(this.timer);
    this.timer = null;
    return this;
  }

  done(callback) {
    this.doneCallback = callback;
    return this;
  }
  timeout(ms) {
    if (this.timer) {
      clearTimeout(this.timer);
      this.timer = null;
    }
    const err = new Error('Collector is timeout');
    this.timer = setTimeout(() => {
      this.finished = true;
      this.finalize(err);
    }, ms);
    return this;
  }
  pick(key, data) {
    this.collect(key, null, data);
    return this;
  }
  take(key, fn, ...args) {
    fn((err, data) => {
      this.collect(key, err, data);
    }, ...args);
  }
}

const collectInst = (expected) => new Collector(expected);

const collector = collectInst(3)
  .timeout(1000)
  .done((err, data) => {
    console.log({ err, data });
  });

const callbackKey = (callback, ...args) => {
  const sum = args.reduce((acc, el) => acc + el);
  callback(null, sum);
};

collector.collect('key1', null, 1);
collector.pick('key2', 1);
collector.take('key3', callbackKey, 1, 2, 4);

const collector2 = collectInst(4)
  .timeout(200)
  .done((err, data) =>
    console.log('collector2: ', { err, data })
  );

collector2.pick('key1', 2);
collector2.pick('key4', 22);
collector2.pick('key5', 2122);
collector2.pick('key6', 22);
