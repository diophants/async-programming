const sum = (a, b) =>
  new Promise((resolve, reject) => {
    if (a instanceof Number && b instanceof Number) {
      resolve(a + b);
    } else {
      reject(new Error('Argument dont such Number'));
    }
  });

process.on('unhandledRejection', (reason, promise) =>
  console.log({ unhandledRejection: { reason, promise } })
);

sum(5, 'A').then(console.log);

setTimeout(() => console.log('done'), 1000);
