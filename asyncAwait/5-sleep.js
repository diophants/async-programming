'use strict';

const sleep = (ms) =>
  new Promise((resolve) => setTimeout(resolve, ms));

(async () => {
  console.log('Start: ', new Date().toISOString());
  await sleep(1000);
  console.log('End: ', new Date().toISOString());
})();
