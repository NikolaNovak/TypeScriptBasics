function add(n1: number, n2: number, isLogged: boolean, phrase: string) {
  const result = n1 + n2;
  if (isLogged) console.log(phrase + result);
  return result;
}

let number1: number;
number1 = 5;
const number2 = 2.8;
const printResult = true;
let resultPhrase = "The result is: ";

add(number1, number2, printResult, resultPhrase);

enum Country {
  CROATIA = 5, // changing the starting index, default is 0
  GERMANY = 100, // this would normally be 6 (since 5 is the starting index), but can be set to anything
  NORWAY, // this will now be 101
  SWEDEN = "SWE", // strings can also be used
}

const person: {
  name: string;
  age: number;
  hobbies: string[];
  role: [number, string]; // tuple
  country: Country; // enum
} = {
  name: "Nikola",
  age: 30,
  hobbies: ["Sports", "Cooking"],
  role: [2, "Author"],
  country: Country.CROATIA,
};

interface TSOnlyComment_Tuple {
  // dummy interface for writing comments only in TS (won't be compiled to JS)
  // person.role[1] = 10; -> this will not work because the second element has to be a string
  // person.role = [2, "Author", "Editor"] -> this will not work because the max number of elements is 2
  // person.role.push('admin'); -> this will unfortunately work, but you should avoid it
}

console.log(person.name);

for (const hobby of person.hobbies) {
  console.log(hobby);
}

console.log(person.country); // will log 5

let favoriteActivities: any[]; // any type, should be avoided normally
favoriteActivities = ["Sports", 1, true];

type combineInput = number | string; // type alias
type combineConversion = "as-number" | "as-text"; // type alias

function combine(input1: combineInput, input2: combineInput, resultConversion: combineConversion) {
  // union type -> number | string
  // literal union type -> 'as-number' | 'as-text'

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

function numberAdd(n1: number, n2: number): number {
  // function return type
  return n1 + n2;
}

function printNumResult(num: number): void {
  // void return type because nothing is returned, type inference does this already
  console.log("Result: " + num);
}

printNumResult(numberAdd(5, 12));
