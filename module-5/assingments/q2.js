// ● Implement a Fibonacci sequence generator using a generator function in
// JavaScript.

function* fibGen(numLength) {
  let i = 0;
  let j = 1;
  let count = 0;

  while (count < numLength) {
    yield i;
    [i, j] = [j, i + j];
    count++;
  }
}
