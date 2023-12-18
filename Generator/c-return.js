function* ids(...args) {
  let i = 0;
  while (args.length > i) {
    const id = args[i++];
    if (id === undefined) return undefined;
    yield id;
  }
}

const id = ids(1343, 1344, 1345, undefined, 452);
console.log(...id);
