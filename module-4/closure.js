// From what I understand, closures are functions that return another function,
// where the returned function uses variables declared in the scope of the outer function.

function summitUp() {
  let sum = 1;

  return function increment() {
    return (sum += 1);
  };
}
// output:
getIncrement = summitUp();
getIncrement(); // 2

function createMultiplier(multiplyBy) {
  let result = null;
  return function doubleIt(num) {
    return (result = num * multiplyBy);
  };
};

const triple = createMultiplier(3);
triple(30) // 90

const double = createMultiplier(2);
double(5) // 10

