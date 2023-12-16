'use strict';

const fs = require('fs');

const stream = fs.createReadStream(
  '8-for-await.js',
  'utf-8'
);

(async () => {
  for await (const chunk of stream) {
    console.log(chunk);
  }
})();
