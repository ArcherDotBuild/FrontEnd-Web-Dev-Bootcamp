var somevariableTS = 'alberto';
console.log(somevariableTS);
somevariableTS = 'elfgodd';
console.log(somevariableTS);
console.log(somevariableTS.toUpperCase());
// somevariable = 17 // Type 'number' is not assignable to type 'string'
function addNumbers(firstNumber, secondNumber) {
    return firstNumber + secondNumber;
}
console.log(addNumbers(5, 10));
console.log(addNumbers(5, '9'));
function addNumbersTS(firstNumber, secondNumber) {
    return firstNumber + secondNumber;
}
console.log(addNumbersTS(2, 4));
// Argument of type 'string' is not assignable to parameter of type 'number'.
// console.log(addNumbersTS(3, '7'))
var personTS = {
    name: 'Alberto',
    role: 'Mentor',
};
// console.log(person.lastName) // Property 'lastName' does not exist on type '{ name: string; role: string; }'.
// 7m
