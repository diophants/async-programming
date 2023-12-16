'use strict';

const INTERVAL = 10;

const range = {
  start: 1,
  end: 1000,
  [Symbol.asyncIterator]() {
    let value = this.start;
    let time = Date.now();
    return {
      next: () => {
        const now = Date.now();
        const diff = now - time;
        if (diff > INTERVAL) {
          time = now;
          return new Promise((resolve, reject) => {
            setTimeout(() => {
              resolve({
                value,
                done: value++ === this.end + 1,
              });
            }, 0);
          });
        } else {
          return { value, done: value++ === this.end + 1 };
        }
      },
    };
  },
};

(async () => {
  for await (const number of range) {
    console.log(number);
  }
  clearInterval(timer);
  console.log({ k });
})();

let k = 0;
const timer = setInterval(
  () => console.log('next: ', k++),
  3
);
