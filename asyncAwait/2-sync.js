// Static
class MyClass {
  static staticMethod() {
    return 'this static method';
  }
  static anotherStaticMethod() {
    return this.staticMethod() + ' another';
  }
}

console.log(MyClass.anotherStaticMethod());

// method
const obj = {
  name: 'Diophant Dmitry',
  split(sep = ' ') {
    return this.name.split(sep);
  },
};
console.log(obj.split());

// method class
class Person {
  constructor(name) {
    this.name = name;
  }
  static of(name) {
    return new Person(name);
  }
  split(sep = ' ') {
    return this.name.split(sep);
  }
}

const person = Person.of('Diophant Dmitry');
console.log(person);
