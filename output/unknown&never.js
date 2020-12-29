"use strict";
let userInput;
let userName;
userInput = 5;
userInput = "Nikola";
if (typeof userInput === "string")
    userName = userInput;
function generateError(message, code) {
    throw { message: message, errorCode: code };
}
const result = generateError("An error occured!", 500);
console.log("The result:" + result);
