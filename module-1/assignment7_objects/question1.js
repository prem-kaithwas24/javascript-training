// 1. How will you create a new copy of the object below while updating the value of
// address.details[0] to "5"?
// :- As there is nested object address in the given obj variable, we cannot use Object.assign as 
// it does clone the nested object and we will get a copy of nested object instead of a clone.
// Also there are no function property present in the object so sturturedClone() method is suited for this.

const obj = {
  name: "Harry Potter",
  age: 12,
  address: {
    details: ["4", "Privet Drive"],
    area: "Little Whinging",
    city: "Surrey",
    state: "England",
  },
};

const clone = structuredClone(obj);
console.log(clone.address.details[0]) // '4'

clone.address.details[0] = "5"

console.log(clone.address.details[0]) // "5"
console.log(obj.address.details[0]) // "5"
