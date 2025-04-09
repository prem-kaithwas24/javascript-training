// 3. Do you think JSON.stringify would work for arrays as well? What about nested objects?
// What happens if we pass numbers, strings, undefined, null to JSON.stringify? 

// :- Yes it will work for arrays as well. Yes will work for nested objects.
// Except undefined all other data types will be converted to string with single quotes.

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

let array = ['Taj Hotel', 'Burj Khalifa', 'Sea', 'Sahara Desert'];
JSON.stringify(array); // '["Taj Hotel","Burj Khalifa","Sea","Sahara Desert"]'

let num = 2, string = "Prem";
JSON.stringify(num); // '2'
JSON.stringify(string); //  '"Prem"'
JSON.stringify(null); // 'null'
JSON.stringify(undefined); // undefined
JSON.stringify(false); // 'false'
