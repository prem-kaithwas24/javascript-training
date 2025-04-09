// 1. What is the difference between ++i and i++?
// :- The difference is that ++i returns the value after performing increment.
//  i++ return value before increment.

let i = 1;
let j = i;
let z = i;

j = i++; // postfix
console.log(j); // 1

i = 1;

z = ++i; // prefix
console.log(z); // 2


