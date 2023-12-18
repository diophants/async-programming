'use strict';

class Multiplier {
  constructor(k) {
    this.value = k;
  }
  async *mult(val) {
    this.value *= val;
    return this.value * val;
  }
}

const g = new Multiplier(2);

g.mult(5).next();
g.mult(5).next().then(console.log);
