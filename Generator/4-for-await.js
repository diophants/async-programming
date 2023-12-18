'use strict';

async function* ids(...args) {
  let i = 0;
  while (true) {
    if (args[i] === undefined) return;
    yield args[i++];
  }
}

const g = ids(1205, 13143, 2325, undefined, 123, 132);

(async () => {
  for await (const i of g) {
    console.log(i);
  }
})();
