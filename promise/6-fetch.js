'use strict';

const http = require('http');

const fetch = (url) =>
  new Promise((resolve, reject) => {
    http.get(url, (res) => {
      const code = res.statusCode;
      if (code !== 200)
        return reject(new Error('request error'));

      res.on('error', reject);

      const chunks = [];
      res.on('data', (chunk) => {
        chunks.push(chunk);
      });

      res.on('end', () => {
        const json = Buffer.concat(chunks).toString();

        try {
          if (typeof json === 'string') {
            resolve(JSON.parse(json));
          } else {
            resolve(json);
          }
        } catch (err) {
          reject(err);
        }
      });
    });
  });

module.exports = { fetch };
