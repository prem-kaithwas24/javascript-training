// ● Write a function that can stop execution of a function for the number of milliseconds
// sent as an argument
// Example:
// const func = async () => {
// console.log(“Printing before”)
// //Call your function here eg. sleep(3000)
// console.log(“Printing after”)
// }



const greet = async () =>{
  const promise = new Promise((resolve, reject)=>{

    setTimeout(()=>{
      resolve('Hello');
    }, 2000);

  });

  console.log('Started program');

  const result = await promise;

  console.log(`Printing ${result} after 2 seconds`);
}


greet(); // output below

// Started program
// Promise {<pending>}
// VM18:14 Printing hello after 2 seconds