const arr = [1, 2, 3, 4, 5];

const objs = [
  { name: "Sam", mark: 89, maxMarks: 120 },
  { name: "Sanjay", mark: 100, maxMarks: 120 },
  { name: "Saravanan", mark: 89, maxMarks: 100 },
];

// Map Code

// Reduce Code
const factorialReducer = (prev, curr) => {
  return prev * curr;
};
console.log(arr.reduce(factorialReducer));

// Filter Code

// find and findIndex

var data = require("./data.json");
console.log(data);
console.log(typeof data);
