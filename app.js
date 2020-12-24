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
