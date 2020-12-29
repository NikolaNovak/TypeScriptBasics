"use strict";
function combine(input1, input2, resultConversion) {
    let result;
    if ((typeof input1 === "number" && typeof input2 === "number") ||
        resultConversion === "as-number")
        result = +input1 + +input2;
    else
        result = input1.toString() + input2.toString();
    return result;
}
const combinedAges = combine(30, 25, "as-number");
console.log(combinedAges);
const combinedStringAges = combine("30", "25", "as-number");
console.log(combinedStringAges);
const combinedNames = combine("Nikola", "Novak", "as-text");
console.log(combinedNames);
function numberAdd(n1, n2) {
    return n1 + n2;
}
function printNumResult(num) {
    console.log("Result: " + num);
}
printNumResult(numberAdd(5, 12));
let combineValues;
combineValues = numberAdd;
console.log(combineValues(5, 5));
function addAndHandle(n1, n2, cb) {
    const result = n1 + n2;
    cb(result);
}
addAndHandle(10, 20, (result) => {
    console.log(result);
});
