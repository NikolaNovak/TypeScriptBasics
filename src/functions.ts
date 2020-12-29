type combineInput = number | string; // type alias
type combineConversion = "as-number" | "as-text"; // type alias

// union type -> number | string
// literal union type -> 'as-number' | 'as-text'
function combine(input1: combineInput, input2: combineInput, resultConversion: combineConversion) {
  let result;

  if (
    (typeof input1 === "number" && typeof input2 === "number") ||
    resultConversion === "as-number"
  )
    result = +input1 + +input2;
  else result = input1.toString() + input2.toString();

  return result;
}

const combinedAges = combine(30, 25, "as-number");
console.log(combinedAges); // 55

const combinedStringAges = combine("30", "25", "as-number");
console.log(combinedStringAges); // 55

const combinedNames = combine("Nikola", "Novak", "as-text");
console.log(combinedNames); // NikolaNovak

// function return type
function numberAdd(n1: number, n2: number): number {
  return n1 + n2;
}

// void return type because nothing is returned, type inference does this already
function printNumResult(num: number): void {
  console.log("Result: " + num);
}

printNumResult(numberAdd(5, 12));

// function types -> combineValues should accept any function that takes 2 number arguments and returns a number
let combineValues: (a: number, b: number) => number;

// combineValues = add;   ->  TS will complain because add has 4 arguments
combineValues = numberAdd;

console.log(combineValues(5, 5)); // 10

// cb -> callback function
function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
  const result = n1 + n2;
  cb(result);
}

addAndHandle(10, 20, (result) => {
  console.log(result); // 30
});
