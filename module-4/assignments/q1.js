// ● Create a memoised function that returns the cached value when the same arguments
// are passed.

const fetchUser = () => {
  const cache = {};

  return async function(userID){

    if (userID in cache) {
      console.log("From cache", cache[userID]);
      return cache[userID];
    }

    const url = `https://reqres.in/api/users/${userID}`;
    const result = await fetch(url).then((res) => res.json());
    
    cache[userID] = result;

    console.log("From API call", result);
    return result;
  }
};

const getUser = fetchUser();

getUser(1); // From API call {data: {…}, support: {…}}
getUser(1); // From cache {data: {…}, support: {…}}

