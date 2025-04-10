// 4. What happens if you pass a regular/invalid JSON string to JSON.parse? What will happen if such
// an invalid function runs in the program? Will other parts of the code execute correctly after
// that?
// :- It will cause an error and the execution of the program will stop there. 
// Other parts of code does not execute.

let obj = {
  name: 'Ramesh',
  occupation: 'Software Engineer',
  age: 27,
  abilities: {
    superPower: 'Can fly with his mind',
    specialAbility: 'Reads at lightening speed',
    weakness: 'When eats too much food, he slumbers'
  },
  knownLanguages: ['Java', 'Python', 'Ruby', 'JavaScript']
};

let strObj = JSON.stringify(obj);

let invalidStrObj = strObj+ "{name: 'James'}";

function printHello(){
  console.log('Hello world 1');

  JSON.parse(strObj);
  JSON.parse(invalidStrObj);

  console.log('Hello world 2');
};

printHello();