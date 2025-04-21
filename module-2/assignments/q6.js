// Create a promise that makes a fetch call, but resolves with the data only 2 seconds after
// the data has been received in the fetch.

const getUsers = async () => {
  const url = "https://reqres.in/api/users";

  const promise = new Promise((resolve, reject)=>{
    fetch(url)
    .then((result) => {
      console.log('Recieved data, waiting for 2 secs');
      setTimeout(()=> resolve(result) , 2000); // waiting 2 secs here
    })
    .catch((error) => {
      reject(error);
    });
  })

  promise.then((result) => console.log('Result from promise', result), (error)=> console.error(error));
  
};

getUsers();