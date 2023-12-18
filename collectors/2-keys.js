'use strict';

const KeysCollector = function (
  expected,
  timeout,
  callback
) {
  this.expected = new Set(expected);
  this.keys = new Set();
  this.doneCallback = callback;
  this.finished = false;
  this.data = {};
  this.errors = {};
  this.timer = setTimeout(() => {
    if (this.timer) clearTimeout(this.timer);
    const error = new Error('Collector time out');
    this.errors.timeout = error.message;
    this.doneCallback(this.errors, this.data);
  }, timeout);
};

KeysCollector.prototype.collect = function (key, value) {
  if (this.finished) return;
  if (this.expected.has(key)) {
    this.keys.add(key);
    this.data[key] = value;
  }
  const every = [...this.expected].every((el) =>
    this.keys.has(el)
  );
  if (every) {
    this.doneCallback(this.errors, this.data);
    clearTimeout(this.timer);
  }
};

const collector = new KeysCollector(
  ['key1', 'key2', 'key3'],
  1000,
  (err, res) => {
    console.log({ err, res });
  }
);

collector.collect('key1', 10);
collector.collect('key2', 10);
collector.collect('key2', 10);
collector.collect('key4', 10);
collector.collect('key3', 10);
