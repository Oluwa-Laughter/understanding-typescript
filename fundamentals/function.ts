function add(n1: number, n2: number) {
  return n1 + n2;
}

function printResult(num: number): void {
  console.log("Result: " + num);
}

function addAndHandle(a: number, b: number, callback: (num: number) => void) {
  const result = a + b;
  callback(result);
}

printResult(add(5, 3));

let combinedValues: (a: number, b: number) => number;

combinedValues = add;
// combinedValues = printResult;
// combinedValues = 5; // Error because combinedValues is a function

console.log(combinedValues(8, 8));

addAndHandle(10, 20, (result) => {
  console.log(result);
});
