async function* genFn(begin, end, step) {
  let value = begin;
  let nextValue = value + step;
  while (true) {
    if (nextValue > end - step) return nextValue;
    else yield nextValue;
    value = nextValue;
    nextValue += step;
  }
}

const g = genFn(0, 30, 12);

const val1 = g.next().then(console.log);
const val2 = g.next().then(console.log);
const val3 = g.next().then(console.log);
const val4 = g.next().then(console.log);
