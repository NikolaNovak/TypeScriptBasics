"use strict";
function add(n1, n2, isLogged, phrase) {
    const result = n1 + n2;
    if (isLogged)
        console.log(phrase + result);
    return result;
}
let number1;
number1 = 5;
const number2 = 2.8;
const printResult = true;
let resultPhrase = "The result is: ";
add(number1, number2, printResult, resultPhrase);
var Country;
(function (Country) {
    Country[Country["CROATIA"] = 5] = "CROATIA";
    Country[Country["GERMANY"] = 100] = "GERMANY";
    Country[Country["NORWAY"] = 101] = "NORWAY";
    Country["SWEDEN"] = "SWE";
})(Country || (Country = {}));
const person = {
    name: "Nikola",
    age: 30,
    hobbies: ["Sports", "Cooking"],
    role: [2, "Author"],
    country: Country.CROATIA,
};
console.log(person.name);
for (const hobby of person.hobbies) {
    console.log(hobby);
}
console.log(person.country);
let favoriteActivities;
favoriteActivities = ["Sports", 1, true];
