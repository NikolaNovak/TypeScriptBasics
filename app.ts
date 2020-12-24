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
} = {
  name: "Nikola",
  age: 30,
  hobbies: ["Sports", "Cooking"],
};

console.log(person.name);

for (const hobby of person.hobbies) {
  console.log(hobby);
}
