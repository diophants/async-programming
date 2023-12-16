'use strict';

const fs = require('fs');
class Thenable {
  constructor() {
    this.next = null;
    this.fn = null;
  }

  then(fn) {
    this.fn = fn;
    this.next = new Thenable();
    return this.next;
  }

  resolve(value) {
    const fn = this.fn;
    if (fn) {
      const next = fn(value);
      if (next) {
        next.then((value) => {
          this.next.resolve(value);
        });
      }
    }
  }
}

const readFile = (filename) => {
  const thenable = new Thenable();
  fs.readFile(filename, 'utf-8', (err, data) => {
    if (err) throw Error;
    thenable.resolve(data);
  });
  return thenable;
};

(async () => {
  const res = await readFile('1-prototype.js');
  const res1 = await readFile('1-prototype.js');
  console.log(res1);
})();
