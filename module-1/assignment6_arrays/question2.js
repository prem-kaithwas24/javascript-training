import { arrayOfObj } from "./question1";

// 2. What makes a method mutating or non mutating in Javascript? Find out whether each of
// the following methods are mutating or non-mutating. How can you verify this?:
// ○ push
// ○ pop
// ○ filter
// ○ find
// ○ sort
// ○ map

// :- If a method change the variable value it is called mutating. If the method doesn't change
//  value of the variable it is called non-mutating.

let array = ['1', '2', '3', '4', '5', '6'];

// Mutating Methods
array.push('A') // 7
array.pop(); // 'A'

array.push('aabbc') // 7
array.push('abc') // 8
array.push('12') // 9

array.sort(); // (9) ['1', '12', '2', '3', '4', '5', '6', 'aabbc', 'abc']

// Non mutating methods
array.filter(ele => ele % 2); //['1', '3', '5']
array.find(ele => ele % 2); // '1'
array.map (ele => ele /2); // [0.5, 6, 1, 1.5, 2, 2.5, 3, NaN, NaN]
