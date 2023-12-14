'use strict';

const async = require('async');

const q = async.queue((task, callback) => {
  console.log('hello ' + task.name);
  if (task.name === 'bar1')
    return callback(new Error('error'));
  callback();
}, 2);

q.drain(() => {
  console.log('all items have been processed');
});

q.error((err, task) => {
  console.error('task experienced an error');
});

q.push({ name: 'foo' }, (err) => {
  console.log('finished processing foo');
});

q.push({ name: 'bar' });

q.push(
  [{ name: 'baz' }, { name: 'bay' }, { name: 'bax' }],
  (err) => {
    console.log('finished processing item');
  }
);

q.unshift({ name: 'bar' }, (err) => {
  if (err) console.log(err.message);
  console.log('finished processing bar');
});
