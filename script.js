console.log("root");
const substract = (x, y) => x - y;

function add(a, b) {
  return a + b;
}
function product(a, b) {
  return a * b;
}
 

let a = 10;
let b = 20;
console.log(add(a, b));
console.log(product(a, b));
console.log(substract(a, b));



console.log(add(1 + 2), substract(9, 6), product(5, 3));
let x = add(2, 5);
let y = substract(15, 10);
let z = product(8, 5);

console.log(x + y + z);
