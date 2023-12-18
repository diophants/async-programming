'use strict';

function* gen1() {
  yield 10;
  yield 20;
  yield 30;
}

function* gen2() {
  yield 40;
  yield 50;
  yield 60;
}

function* genFn() {
  yield* gen1();
  yield* gen2();
}

const c = gen1();

let val = 0;
do {
  val = c.next();
  console.log(val);
} while (!val.done);
