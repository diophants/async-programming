'use strict';

const DataCollector = function (
  expected,
  timeout,
  callback
) {
  this.expected = expected;
  this.finished = false;
  this.count = 0;
  this.doneCallback = callback;
  this.data = {};
  this.errors = {};
  this.timer = setTimeout(() => {
    if (this.timer) clearTimeout(this.timer);
    const err = new Error('Collected time out');
    this.errors.timeout = err.message;
    this.doneCallback(this.errors, this.data);
    clearTimeout(this.timer);
    this.finished = true;
  }, timeout);
};

DataCollector.prototype.collect = function (key, value) {
  if (this.finished) return;
  this.count++;
  if (value instanceof Error) {
    return (this.errors[key] = value.message);
  }
  this.data[key] = value;
  if (this.count === this.expected) {
    this.finished = true;
    clearTimeout(this.timer);
    return this.doneCallback(this.errors, this.data);
  }
};

const dc1 = new DataCollector(4, 1000, (err, result) => {
  console.log('dc1: ', { err, result });
});

dc1.collect('key1', 1);
dc1.collect('key2', new Error('error'));
dc1.collect('key3', 3);
