'use strict';

const INTERVAL = 10;

const range = {
  start: 1,
  end: 1000,
  [Symbol.asyncIterator]() {
    let timer = Date.now();
    let value = this.start;
    return {
      next: () => {
        const now = Date.now();
        const diff = now - timer;
        if (diff > INTERVAL) {
          timer = now;
          return new Promise((res, rej) => {
            setTimeout(() =>
              res({
                value,
                done: value++ === this.end + 1,
              })
            );
          });
        } else
          return Promise.resolve({
            value,
            done: value++ === this.end + 1,
          });
      },
    };
  },
};

let k = 0;
const timer = setInterval(() => {
  console.log('next: ', k++);
}, 2);

(async () => {
  for await (const number of range) {
    console.log(number);
  }
  console.log({ k });
  clearInterval(timer);
})();
