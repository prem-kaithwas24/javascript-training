// 5. Can you use return instead of break in loops?
// :- No

let arraySize = 25;
let i=1;

while(i <= arraySize){
  
  if (i === 12){
    console.log('Reached at set limit');
    return 0; // Uncaught SyntaxError: Illegal return statement
  }

  if (i === 12){
    console.log('Reached at set limit');
    break; // works fine
  }

  console.log(i);
  i++;
}