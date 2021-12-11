// Copy by value
function Copybyvalue(a, b) {
  let tmp;
  tmp = b;
  b = a;
  a = tmp;
  console.log(`Inside function -> a = ${a} b = ${b}`);
}

let a = 1;
let b = 2;
console.log("################ Copy By Value #################");
console.log(`Before calling Function -> a = ${a} b = ${b}`);

Copybyvalue(a, b);

console.log(`After calling Function -> a =${a} b = ${b}`);

// Copy By Reference
function CopybyReference(obj) {
  let tmp = obj.a;
  obj.a = obj.b;
  obj.b = tmp;
  console.log(`Inside Function -> a = ${obj.a} b = ${obj.b}`);
}

let obj = {
  a: 10,
  b: 20,
};

console.log("################ Copy By Reference #################");
console.log(`Before calling Function -> a = ${obj.a} b = ${obj.b}`);

CopybyReference(obj);

console.log(`After calling Function -> a = ${obj.a} b = ${obj.b}`);
