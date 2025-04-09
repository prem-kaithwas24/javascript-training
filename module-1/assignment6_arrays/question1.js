export const arrayOfObj = [
  {
    id: 1,
    first_name: "Nicki",
    email: "ncrozier0@squarespace.com",
    date_of_birth: "2009/05/09",
  },
  {
    id: 2,
    first_name: "Raychel",
    email: "rmcgrady1@cpanel.net",
    date_of_birth: "1996/11/05",
  },
  {
    id: 3,
    first_name: "Demetris",
    email: "dkilshall2@elpais.com",
    date_of_birth: "2018/12/31",
  },
  {
    id: 4,
    first_name: "Amata",
    email: "abraiden3@canalblog.com",
    date_of_birth: "2012/05/23",
  },
  {
    id: 5,
    first_name: "Venita",
    email: "vheap4@clickbank.net",
    date_of_birth: "2020/10/04",
  },
  {
    id: 6,
    first_name: "Fairfax",
    email: "fcrichton5@merriam-webster.com",
    date_of_birth: "2009/12/23",
  },
  {
    id: 7,
    first_name: "Kathleen",
    email: "kvasyukhnov6@devhub.com",
    date_of_birth: "2010/12/20",
  },
  {
    id: 8,
    first_name: "Sam",
    email: "scorck7@sitemeter.com",
    date_of_birth: "2020/08/30",
  },
  {
    id: 9,
    first_name: "Virgilio",
    email: "vferandez8@e-recht24.de",
    date_of_birth: "2000/09/07",
  },
  {
    id: 10,
    first_name: "Townie",
    email: "tpetyt9@upenn.edu",
    date_of_birth: "2018/09/01",
  },
];

// 1. Take the above array of objects. Accomplish the following tasks:
// ○ Write a function filterByName that accepts a string as a parameter and returns an
// array with only those objects where the first_name field includes that string.
// ○ Use Array.map to return an array of all the email fields.
// ○ Use Array.sort to return the array sorted in descending order by date_of_birth. 
// ○ Write a function getById that accepts a number as a parameter and returns the
// object where the id is equal to that numb


// Wrote a function filterByName that accepts a string as a parameter and returns an
// array with only those objects where the first_name field includes that string.

function filterByName(string) {
  const filteredArray = arrayOfObj.filter((obj) => {
    return obj.first_name.toLowerCase().includes(string.toLowerCase());
  });

  return filteredArray;
}

filterByName('nic'); // {id: 1, first_name: 'Nicki', email: 'ncrozier0@squarespace.com', date_of_birth: '2009/05/09'}


// Use Array.map to return an array of all the email fields.
const emails = arrayOfObj.map((obj) => obj.email); 
console.log(emails); // ['ncrozier0@squarespace.com', 'rmcgrady1@cpanel.net', 'dkilshall2@elpais.com', 'abraiden3@canalblog.com', 'vheap4@clickbank.net', 'fcrichton5@merriam-webster.com', 'kvasyukhnov6@devhub.com', 'scorck7@sitemeter.com', 'vferandez8@e-recht24.de', 'tpetyt9@upenn.edu']

// Use Array.sort to return the array sorted in descending order by date_of_birth. 
function dateSort(a, b){
  const dateA = new Date((a.date_of_birth.split('/').join(',')));
  const dateB = new Date((b.date_of_birth.split('/').join(',')));

  if (dateA > dateB) return -1;
  if (dateA == dateB) return 0;
  if (dateA < dateB) return 1;
};

const sortedArray = arrayOfObj.sort(dateSort);
console.log(sortedArray); // output below:
// 0: {id: 5, first_name: 'Venita', email: 'vheap4@clickbank.net', date_of_birth: '2020/10/04'}
// 1: {id: 8, first_name: 'Sam', email: 'scorck7@sitemeter.com', date_of_birth: '2020/08/30'}
// 2: {id: 3, first_name: 'Demetris', email: 'dkilshall2@elpais.com', date_of_birth: '2018/12/31'}
// 3: {id: 10, first_name: 'Townie', email: 'tpetyt9@upenn.edu', date_of_birth: '2018/09/01'}
// 4: {id: 4, first_name: 'Amata', email: 'abraiden3@canalblog.com', date_of_birth: '2012/05/23'}
// 5: {id: 7, first_name: 'Kathleen', email: 'kvasyukhnov6@devhub.com', date_of_birth: '2010/12/20'}
// 6: {id: 6, first_name: 'Fairfax', email: 'fcrichton5@merriam-webster.com', date_of_birth: '2009/12/23'}
// 7: {id: 1, first_name: 'Nicki', email: 'ncrozier0@squarespace.com', date_of_birth: '2009/05/09'}
// 8: {id: 9, first_name: 'Virgilio', email: 'vferandez8@e-recht24.de', date_of_birth: '2000/09/07'}
// 9: {id: 2, first_name: 'Raychel', email: 'rmcgrady1@cpanel.net', date_of_birth: '1996/11/05'}

// ○ Write a function getById that accepts a number as a parameter and returns the
// object where the id is equal to that numb
const getById = (id) => arrayOfObj.find( obj => id === obj.id);
console.log(getById(5)); // {id: 5, first_name: 'Venita', email: 'vheap4@clickbank.net', date_of_birth: '2020/10/04'}