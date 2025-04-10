// ● Write a function groupBy to convert an array of objects into groups based on the specified
// key:
// let users = [{
// "id": 1,
// "first_name": "Nicki",
// "email": "ncrozier0@squarespace.com",
// "date_of_birth": "2009/05/09",
// "gender":"Male",
// }, {
// "id": 2,
// "first_name": "Raychel",
// "email": "rmcgrady1@cpanel.net",
// "date_of_birth": "1996/11/05",
// "gender":"Female"
// }, {
// "id": 3,
// "first_name": "Demetris",
// "email": "dkilshall2@elpais.com",
// "date_of_birth": "2018/12/31",
// "gender":"Male"
// }, {
// "id": 4,
// "first_name": "Amata",
// "email": "abraiden3@canalblog.com",
// "date_of_birth": "2012/05/23",
// "gender":"Female"
// }];
// groupBy(users, "gender")
// //This should return
// //{
// //"Male":[
// // {id:1, first_name:"Nicki", ...},
// // {id:3, first_name:"Demetris", ...}
// //]
// //"Female":[
// // {id: 2, first_name:"Raychel", ...},
// // {id: 4, first_name:"Amata", ...}
// //]
// //}

let users = [
  {
    id: 1,
    first_name: "Nicki",
    email: "ncrozier0@squarespace.com",
    date_of_birth: "2009/05/09",
    gender: "Male",
  },
  {
    id: 2,
    first_name: "Raychel",
    email: "rmcgrady1@cpanel.net",
    date_of_birth: "1996/11/05",
    gender: "Female",
  },
  {
    id: 3,
    first_name: "Demetris",
    email: "dkilshall2@elpais.com",
    date_of_birth: "2018/12/31",
    gender: "Male",
  },
  {
    id: 4,
    first_name: "Amata",
    email: "abraiden3@canalblog.com",
    date_of_birth: "2012/05/23",
    gender: "Female",
  },
];

function groupBy(arrayOfObj, key){
  const newObj = {};
  
  arrayOfObj.forEach((obj) => {
    newObj[obj[key]] = obj;
  });

  return newObj;
}

groupBy(users, "gender");
// {
//   Female: {id: 4, first_name: 'Amata', email: 'abraiden3@canalblog.com', date_of_birth: '2012/05/23', gender: 'Female'}
//   Male: {id: 3, first_name: 'Demetris', email: 'dkilshall2@elpais.com', date_of_birth: '2018/12/31', gender: 'Male'}
// }
