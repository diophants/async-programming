function* genFn() {
  yield* [1, 2, 3];
}

{
  const iterator = genFn();
  // const iterator = iterable[Symbol.iterator]();
  const step1 = iterator.next();
  const step2 = iterator.next();
  const step3 = iterator.next();
  const step4 = iterator.next();
  console.log(step1, step2, step3, step4);
}

{
  for (const i of genFn()) {
    console.log(i);
  }
}

{
  console.log(...genFn());
}
