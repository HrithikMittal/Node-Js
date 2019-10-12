console.log("Hello World");

// Simple Function in JS
function sum(a, b) {
  return a + b;
}
console.log(sum(4, 5));

// Arrow Function in JS
var sub = (a, b) => {
  return a - b;
};
console.log(sub(5, 4));

// Showing Import and Export of a module in Node Js
const divison = require("./division");
console.log(divison(6, 3));
