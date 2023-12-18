function* ids(...args) {
  let i = 0;
  while (true) {
    if (args[i] === undefined) return Promise.resolve();
    else yield Promise.resolve(args[i++]);
  }
}

const g = ids(13541, 12351, 13251, undefined, 12395);

Promise.all([...g]).then(console.log);
