console.log('Running Objs');

const obj = {
  name: 'Peter Parker',
  occupation: 'Scientific Researcher at PremLabs. Researching on radio active spiders.',
  age: '25'
}

console.log(obj);
console.log(delete obj.age);
console.log(obj);

let obj2 = {
  name: 'Peter Parker',
  occupation: 'Scientific Researcher at PremLabs. Researching on radio active spiders.',
  age: '25'
}

for(key in obj2){
  console.log('Printing from for loop.')
  console.log(obj2[key]);
}

console.log(obj);
console.log(delete obj.age);
console.log(obj);

obj2 = {}
console.log(obj2);

obj = {};

console.log(obj);