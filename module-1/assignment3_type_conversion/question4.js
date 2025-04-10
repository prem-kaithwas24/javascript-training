// 4. Accomplish the same using a while loop.

let arraySize = 25;
let i=1;
let array = [1];

while(i <= arraySize){
  array[0] = array[0] + i;
  i++;
};

console.log(array); // [326]