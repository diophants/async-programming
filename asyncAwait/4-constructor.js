'use strict';

const DAY_OF_JUDGMENT =
  Date.now() + Math.floor(Math.random() * 5000);

class Coming {
  constructor(name) {
    this.name = name;
    return new Promise((resolve) =>
      setTimeout(() => {
        resolve(this);
      }, DAY_OF_JUDGMENT - Date.now())
    );
  }
}

const secondDay = new Coming('Dmitry');
console.log(secondDay);

(async () => {
  const day = await new Coming('Dmitry');
  console.log(day);
})();
