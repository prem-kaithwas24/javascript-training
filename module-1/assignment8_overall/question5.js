// ● Write a function to filter an array of strings to hold only unique values

const arrayOfStrings = ['fruit', 'todo', 'cooking', 'walk', 'walk', 'work', 'work'];

function uniqueArray(array){
  const uniqArray = new Set(array);
  return Array.from(uniqArray); 
};

uniqueArray(array); // ['fruit', 'todo', 'cooking', 'walk', 'work']