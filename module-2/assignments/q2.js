// ● Using promises - write a function that fetches data from an API endpoint (GET
//   https://reqres.in/api/users ). Log the data into the console once it is

const getUsers = async () => {
  const url = "https://reqres.in/api/users";

  const promise = new Promise((resolve, reject)=>{
    fetch(url)
    .then((result) => {
      resolve(result);
    })
    .catch((error) => {
      reject(error);
    });
  })

  promise.then((result) => console.log('Result from promise', result), (error)=> console.error(error));
  
};

getUsers(); //Result from promise Response {type: 'cors', url: 'https://reqres.in/api/users', redirected: false, status: 200, ok: true, …}