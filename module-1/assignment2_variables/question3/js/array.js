console.log('A2, Q3');

let animals = ['Kiwi', 'Lion', 'Rabbit', 'Goat', 'Sepian'];
const fruits = ['Orange', 'Apple', 'Pineapple', 'Mango', 'Lichi'];

// Operations on let declared array 'animals'
console.log('Declared with let', animals);

delete animals[0];
delete animals[3];

console.log('After deleting some records');
console.log(`Value at index 0: ${animals.at(0)}`);

console.log(animals.unshift('ant'));
console.log(Object.keys(animals)); // Working with object because Array in Javascript inherits from Object. // ['0', '2', '3', '5']
console.log(Object.values(animals)); //  ['ant', 'Lion', 'Rabbit', 'Sepian']

console.log(animals); // ['ant', empty, 'Lion', 'Rabbit', empty, 'Sepian']
console.log('Declared with const', fruits);

// Operations on const declared array 'fruits'
console.log('Declared with const', fruits);

delete fruits[0];
delete fruits[3];

console.log('After deleting some records');
console.log(`Value at index 0: ${fruits.at(0)}`);

console.log(fruits.unshift('Sitafad')); // 6
console.log(Object.keys(fruits));     // ['0', '2', '3', '5']
console.log(Object.values(fruits)); //  ['Sitafad', 'Apple', 'Pineapple', 'Lichi']

console.log(fruits); //  ['Sitafad', empty, 'Apple', 'Pineapple', empty, 'Lichi']

console.log('Declared with const', fruits); //  ['Sitafad', empty, 'Apple', 'Pineapple', empty, 'Lichi']
fruits = ['tomato'];