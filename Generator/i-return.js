function* genFn() {
  yield 10;
  yield 20;
  yield 30;
}

{
  const g = genFn();
  const val1 = g.return(10);
  const val2 = g.next();
  const val3 = g.next();
  const val4 = g.return(20);
  console.log({ g, val1, val2, val3, val4 });
}

async function* asyncGenFn(x) {
  return 2 * x;
}
