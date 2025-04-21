// Create a blog list page that fetches a list of users from a mock API and adds them to a
// table on the page after loading. Add a button to sort the users by name. Add an input to
// filter the table by search. (Optional: Show “Loading…” or a loading spinner on the screen
// till the data loads)

const loader = document.getElementById("loader");
// loader.hidden = false;

const blogData = document.getElementById("blogData");
blogData.hidden = true;

async function printUsers() {
  const users = await getUsers();

  const htmlRows = users.map((user) => createRow(user));

  blogData.hidden = false;

  const blogDataBody = blogData.children[1];

  htmlRows.forEach((row) => {
    blogDataBody.appendChild(row);
  });

  loader.hidden = true;
}

function createRow(user) {
  const tr = document.createElement("tr");
  tr.innerHTML = `
    <td>${user.id}</td>
    <td>${user.name}</td>
    <td>${user.username}</td>
    <td>${user.email}</td>
    <td>${user.phone}</td>
  `;
  return tr;
}

async function getUsers() {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/users/",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (!response.ok) {
      throw new Error("getUsers fetch error, http status:", response.status);
    }

    return response.json();
  } catch (error) {
    console.log(error);
  }
}

async function sortByName() {
  const users = await getUsers();

  const sortBtn = document.getElementById("sortByName");
  sortBtn.addEventListener("click", () => {
    function sortByName(a, b) {
      if (a.name > b.name) {
        return 1;
      } else if (a.name === b.name) {
        return 0;
      } else if (a.name < b.name) {
        return -1;
      }
    }
    const sortedUsers = users.sort(sortByName);

    const htmlRows = sortedUsers.map((user) => createRow(user));

    blogData.hidden = false;

    const blogDataBody = blogData.children[1];

    blogDataBody.innerHTML = "";

    htmlRows.forEach((row) => {
      blogDataBody.appendChild(row);
    });
  });
}

async function search() {
  const users = await getUsers();
  const searchInput = document.getElementsByClassName("search")[0];
  let filteredUsers = users;

  searchInput.addEventListener("blur", (e) => {
    filteredUsers = users.filter((ele) => {
      console.log(ele.name, e.target.value);

      console.log(ele.name.includes(e.target.value));
      if (ele.name.includes(e.target.value)) {
        return ele;
      }
    });

    console.log(filteredUsers);

    const htmlRows = filteredUsers.map((user) => createRow(user));
    const blogDataBody = blogData.children[1];
    blogDataBody.innerHTML = "";

    if (filteredUsers.length == 0) {
      return 0;
    }

    htmlRows.forEach((row) => {
      blogDataBody.appendChild(row);
    });
  });

  console.log(searchInput);
  users;
}

printUsers();

sortByName();

search();
