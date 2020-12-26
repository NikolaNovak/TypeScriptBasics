function add(n1, n2, isLogged, phrase) {
    var result = n1 + n2;
    if (isLogged)
        console.log(phrase + result);
    return result;
}
var number1;
number1 = 5;
var number2 = 2.8;
var printResult = true;
var resultPhrase = "The result is: ";
add(number1, number2, printResult, resultPhrase);
var Country;
(function (Country) {
    Country[Country["CROATIA"] = 5] = "CROATIA";
    Country[Country["GERMANY"] = 100] = "GERMANY";
    Country[Country["NORWAY"] = 101] = "NORWAY";
    Country["SWEDEN"] = "SWE";
})(Country || (Country = {}));
var person = {
    name: "Nikola",
    age: 30,
    hobbies: ["Sports", "Cooking"],
    role: [2, "Author"],
    country: Country.CROATIA
};
console.log(person.name);
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby);
}
console.log(person.country); // will log 5
var favoriteActivities; // any type, should be avoided normally
favoriteActivities = ["Sports", 1, true];
function combine(input1, input2) {
    // union type |
    var result;
    if (typeof input1 === "number" && typeof input2 === "number")
        result = input1 + input2;
    else
        result = input1.toString() + input2.toString();
    return result;
}
var combinedAges = combine(30, 25);
console.log(combinedAges); // 55
var combinedNames = combine("Nikola", "Novak");
console.log(combinedNames); // NikolaNovak
