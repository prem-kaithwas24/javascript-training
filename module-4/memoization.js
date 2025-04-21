function createMultiplier(multiplyBy) {
  let result = null;
  return function doubleIt(num) {
    return (result = num * multiplyBy);
  };
};

function memoizedFunc(func){
  
}