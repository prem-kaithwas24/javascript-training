// 2. What do you think would happen if you pass an index beyond the range of the string? Or
// if you pass a negative index? Try it out.
// :- It will return undefined.

let string = "The world is expanding";

console.log(string.length); // 22

console.log(string[30]); // undefined

console.log(string[-1]); // undefined
