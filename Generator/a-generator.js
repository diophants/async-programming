'use strict';

function* genFn(x) {
  return x * 2;
}

console.log('genFn =', genFn);
console.log('genFn.toString() =', [genFn.toString()]);
console.log('typeof genFn =', typeof genFn);
const fnProto = Object.getPrototypeOf(genFn);
console.log(
  'fnProto.constructor.name =',
  fnProto.constructor.name
);

console.log('\ntypeof genFn(5) =', typeof genFn(5));
console.log('genFn(5).toString() =', genFn(5).toString());
const genProto = Object.getPrototypeOf(genFn(5));
console.log('genProto =', genProto);
console.log(
  'genProto[Symbol.iterator] =',
  genProto[Symbol.iterator].toString()
);
console.log('genFn(5) =', genFn(5));
console.log('genFn(5).next() =', genFn(5).next());
console.log(
  'genFn(5).next().value =',
  genFn(5).next().value
);

const m1 = {
  value: 10,
  *genMethod(x) {
    return (this.value *= x);
  },
};

console.log(
  '\nm1.genMethod(5).next().value =',
  m1.genMethod(5).next().value
);

class MyGenerate {
  constructor(value) {
    this.value = value;
  }
  *genMethod(x) {
    return (this.value *= x);
  }
}

const m2 = new MyGenerate(2);

console.log(
  '\nm2.genMethod(5).next()',
  m2.genMethod(5).next()
);
