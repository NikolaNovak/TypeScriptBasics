"use strict";
// union type -> number | string
// literal union type -> 'as-number' | 'as-text'
function combine(input1, input2, resultConversion) {
    var result;
    if ((typeof input1 === "number" && typeof input2 === "number") ||
        resultConversion === "as-number")
        result = +input1 + +input2;
    else
        result = input1.toString() + input2.toString();
    return result;
}
var combinedAges = combine(30, 25, "as-number");
console.log(combinedAges); // 55
var combinedStringAges = combine("30", "25", "as-number");
console.log(combinedStringAges); // 55
var combinedNames = combine("Nikola", "Novak", "as-text");
console.log(combinedNames); // NikolaNovak
// function return type
function numberAdd(n1, n2) {
    return n1 + n2;
}
// void return type because nothing is returned, type inference does this already
function printNumResult(num) {
    console.log("Result: " + num);
}
printNumResult(numberAdd(5, 12));
// function types -> combineValues should accept any function that takes 2 number arguments and returns a number
var combineValues;
// combineValues = add;   ->  TS will complain because add has 4 arguments
combineValues = numberAdd;
console.log(combineValues(5, 5)); // 10
// cb -> callback function
function addAndHandle(n1, n2, cb) {
    var result = n1 + n2;
    cb(result);
}
addAndHandle(10, 20, function (result) {
    console.log(result); // 30
});
