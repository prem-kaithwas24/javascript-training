// 3. Declare a variable let arraySize = 25;. Using a for loop, add numbers from one
//    onwards into an array till the arraySize is reached.

let arraySize = 25;
const array = [1];

for(let i=1; i <= arraySize; i++) {
  array[0] = array[0] + i;
};

console.log(array); // [326]