async function* counter(begin, end, step) {
  let value = begin;
  let nextValue = value + step;
  let back = 0;
  while (true) {
    if (back) nextValue += back;
    if (nextValue > end) return nextValue;
    back = yield nextValue;
    value = nextValue;
    nextValue += step;
  }
}

const c = counter(0, 180, 12);

c.next().then(console.log);
c.next(150).then(console.log);
c.next().then(console.log);
c.next().then(console.log);
