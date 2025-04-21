// ● What will be printed to the console?

const testAsyncFunction = () => {
  return new Promise((resolve, reject) => {
    if (Math.random() > 0.5) {
      resolve("Test Resolve");
    } else {
      reject("Test Reject");
    }
  }).catch((err) => {
    console.log("Error caught in testAsyncFunction", err);
    throw new Error("Forced error");
  });
};

testAsyncFunction()
  .then((res) => {
    console.log("Response in then block: ", res);
  })
  .catch((err) => console.log("Error in catch block: ", err));

// Answer:-

// When promise is resolved:
// Response in then block:  Test Resolve

// When promise is rejected:
// Error caught in testAsyncFunction Test Reject
// VM272:5 Error in catch block:  Error: Forced error
//     at <anonymous>:10:11