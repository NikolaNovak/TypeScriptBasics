var userInput;
var userName;
userInput = 5;
userInput = "Nikola";
// if userInput was of type 'any' this check would not be needed, but for the 'unknown' type it is needed
if (typeof userInput === "string")
    userName = userInput;
