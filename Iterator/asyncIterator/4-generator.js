async function* genAsyncFn() {
  yield* [10, 20, 30];
}

(async () => {
  const g1 = genAsyncFn();

  g1.next().then(console.log);
  g1.next().then(console.log);
  g1.next().then(console.log);
  g1.next().then(console.log);
  await g1.next().then(console.log);

  const g = genAsyncFn();
  for await (const i of g) {
    console.log(i);
  }
})();
