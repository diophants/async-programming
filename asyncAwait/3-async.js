// // Static
// class MyClass {
//   static staticMethod() {
//     return 'this static method';
//   }
//   static anotherStaticMethod() {
//     return this.staticMethod() + ' another';
//   }
// }

// console.log(MyClass.anotherStaticMethod());

// // method
// const obj = {
//   name: 'Diophant Dmitry',
//   async split(sep = ' ') {
//     return this.name.split(sep);
//   },
// };

// obj
//   .split()
//   .then((data) => console.log('then method: ', data));
// (async () => {
//   const res = await obj.split();
//   console.log('await method', res);
// })();

// (async () => {
//   console.log('log: ', obj.split());
// })();

// method class
class Person {
  constructor(name) {
    this.name = name;
  }
  static async of(name) {
    return await new Person(name);
  }
  async split(sep = ' ') {
    return this.name.split(sep);
  }
}

const person = new Person('Vander Grif');

const promis = person.split();

person
  .split()
  .then((data) => console.log('then class: ', data));

(async () => {
  const res = await person.split();
  console.log('await method: ', res);
})();

promis.then(console.log);
