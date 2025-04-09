// 2. Write a function filterObj that will filter out all the keys of a flat object that have
// objects or arrays using Object.keys and Object.entries. Example:

let obj = {
  a: "Apple",
  b: ["Basketball", "Baseball"],
  c: {
    call: "cellphone",
  },
  d: "Dog",
};

function filterObject(obj){
  for(key in obj){
    if (typeof obj[key] === 'object'){
      delete obj[key];
    }
  }
  return obj;
};

filterObject(obj); //{a:"Apple", d:"Dog"}
