let userInput: unknown;
let userName: string;

userInput = 5;
userInput = "Nikola";
// if userInput was of type 'any' this check would not be needed, but for the 'unknown' type it is needed
if (typeof userInput === "string") userName = userInput;

// the never type means that the function never returns anything because it stops the script execution
function generateError(message: string, code: number): never {
  throw { message: message, errorCode: code };
}

const result = generateError("An error occured!", 500);
console.log("The result:" + result); // this will not be executed because an error is thrown on the previous line
