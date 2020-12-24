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

const person: {
  name: string;
  age: number;
  hobbies: string[];
  role: [number, string]; // tuple
} = {
  name: "Nikola",
  age: 30,
  hobbies: ["Sports", "Cooking"],
  role: [2, "Author"],
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
