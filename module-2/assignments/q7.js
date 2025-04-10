// ● Complete the above tasks with async/await.

const getUsers = async () => {
  const url = "https://reqres.in/api/users";

    const result = await fetch(url)
    .then((result) => {
      console.log('Got response')
      return result;
    })
    .catch((error) => {
      return error;
    });

    setTimeout(()=>{
      console.log(result);
    }, 2000)
};

getUsers();