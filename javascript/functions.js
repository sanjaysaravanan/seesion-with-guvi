// simple Function  ---> Callable and constructable function ( this & new )
function Add(a, b) {
  return a + b;
}
console.log(Add(2, 3));

var greet = function (name) {
  this.name = name;
  console.log("Hello " + name);
};

greet("Sanjay Saravanan");

function Sum(a, b) {
  this.a = a;
  this.b = b;
  return a + b;
}

// Function Construction
var res = new Sum(2, 3);
console.log(res);
console.log(Sum(2, 3));

// Arrow functions only in ES6  ---> simply callable not constructable
const AddTwoNums = (a, b) => {
  this.a = a;
  return a + b;
};

const dasd = new AddTwoNums(2, 3);
console.log(dasd);
