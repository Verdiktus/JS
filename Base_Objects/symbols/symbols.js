let id = Symbol.for("id");
let user = {
  name: "Вася",
  age: 30,
  [id]: 123,
};

console.log(user);
console.log('Напрямую '+user[id]);
console.log(Object.keys(user));

let clone = Object.assign({}, user);
console.log(clone);

