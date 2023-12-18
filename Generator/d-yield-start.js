function* genFn(x) {
  let start = 0;
  const end = x;
  while (start < end) {
    start++;
    yield* new Set([
      10 + start * 10,
      20 + start * 10,
      30 + start * 10,
    ]);
  }
}

const c = genFn(10);

for (const i of c) {
  console.log(i);
}

// const val1 = c.next();
// const val2 = c.next();
// const val3 = c.next();
// const val4 = c.next();
// const val5 = c.next();
// const val6 = c.next();

// console.log({ c, val1, val2, val3, val4, val5, val6 });
