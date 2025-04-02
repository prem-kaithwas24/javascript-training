console.log('Running A2 Q2');

const types = [
  typeof undefined,     // undefined 
  typeof 0,             // number 
  typeof 10n,           // bigint 
  typeof true,          // boolean 
  typeof "foo",         // string 
  typeof Symbol("id"),  // symbol 
  typeof Math,          // object  
  typeof null,          // object (Technically it is wrong but this is an error in typeof method officially recognized by JavaScript)
  typeof alert,         // function
  typeof NaN,           // number
  typeof [
    "Apple",
    "Mango",
    "Grapes"
  ]                     // object
]

types.forEach((type)=> console.log(type)); // Log all data types;

console.log('Using Number.isNaN to check if a NaN is an NaN.', Number.isNaN(1.2));
console.log('Using Number.isNaN to check if a NaN is an NaN.', Number.isNaN(types));

console.log('Using Array.isArray() to check if a array is an Array.', Array.isArray(types));
console.log('Using Array.isArray() to check if a array is an Array.', Array.isArray("str"));
