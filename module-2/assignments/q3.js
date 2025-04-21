// ● What will be printed to the console when the promise resolves and when it rejects?

 const testAsyncFunction = () => {
   return new Promise((resolve, reject) => {
     if (Math.random() > 0.5) {
       resolve("Test Resolve");
     } else {
       reject("Test Reject");
     }
   }).catch((err) => {
     console.log("Error caught in testAsyncFunction: ", err);
   });
 };

 testAsyncFunction()
   .then((res) => {
     console.log("Response in then block: ", res);
   })
   .catch((err) => console.log("Error in catch block: ", err));


// Answer :-

// When promise gets resolved:
// Response in then block: Test Resolve

// When promise gets rejected:
// Error caught in testAsyncFunction:  Test Reject
// Response in then block:  undefined

// Understanding Rejection Behavior:
// The rejection is being caught in two places:
// Inside the testAsyncFunction's catch block.
// In the catch block defined after the .then method call.
// This happens because testAsyncFunction itself returns a promise. When that promise is rejected, the control flow first enters the catch block within testAsyncFunction. After that, it proceeds to the outer catch block following the .then.
// The reason undefined is printed is that the catch block inside testAsyncFunction doesn't return anything—it only logs the error to the console. As a result, the returned value is undefined.

