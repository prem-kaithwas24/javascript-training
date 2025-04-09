
// 2. Take a function that accepts a function as a parameter (also known as callback function). 
// function test (callback) {
// callback();
// }
// function callbackFunc() {
// console.log("Calling the callback function") return 5;
// }
// Explore the following cases - what is printed in the console, and what gets returned:
// o test (callbackFunc)
// o test (callbackFunc())
// o test (() => callbackFunc())
// o What happens when you return callback() from the test function? o What happens when you return callback from the test function?

// without return
function test (callback){ callback(); };

function callbackFunc() {
  console.log("Calling the callback function");
  return 5;
}

test(callbackFunc); // Calling the callback function
// In this one we didn't recieved the return value of callbackFunc, 
// because in the test function we are not returning the value we revieved from callback() function.

test(callbackFunc()); // Uncaught TypeError: callback is not a function
// Here this occerrued because we are immediately calling the callbackFunc and passing the 
// return value from callbackFunc, that is 5 and as 5 is not a function we got the error. 

test(()=> callbackFunc()); // Calling the callback function
// In this one we didn't recieved the return value of callbackFunc
// because in the test function we are not returning the value we revieved from callback() function.

// with return
function test (callback){return callback(); };

function callbackFunc() {
  console.log("Calling the callback function");
  return 5;
}

test(callbackFunc); // Calling the callback function 5
// In this we recieved the return value of callbackFunc
// because we returned the value in test function this time.

test(callbackFunc()); // Uncaught TypeError: callback is not a function
// Here this occerrued because we are immediately calling the callbackFunc and passing the 
// return value from callbackFunc, that is 5 and as 5 is not a function we got the error. 

test(()=> callbackFunc()); // Calling the callback function 5
// In this we recieved the return value of callbackFunc
// because we returned the value in test function this time.
