'use strict';

const pause = () => {
  const time = Math.floor(Math.random() * 500);
  return new Promise((resolve) => {
    setTimeout(() => resolve(), time);
  });
};

const readConfig = async (name) => {
  await pause();
  console.log('(1) read config: ', name);
  throw Error('Error');
  return 'config content';
};

const doQuery = async (req) => {
  await pause();
  console.log('(2) Request in database ', req);
  return 'table content';
};

const httpGet = async (req) => {
  await pause();
  console.log('(3) Request in website ', req);
  return 'response website';
};

const readFile = async (name) => {
  await pause();
  console.log('(4) Read file ', name);
  return 'file content';
};

(async () => {
  try {
    const config = await readConfig('MyConfig').catch(
      (err) => console.error(err.message)
    );
    const res = await doQuery('select * from cities');
    const json = await httpGet('http://kpi.ua');
    const file = await readFile('README.md');
    console.log('Done');
    console.dir({ config, res, json, file });
  } catch (err) {
    console.log(err.message);
  }
})();
