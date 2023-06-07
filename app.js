

let num1;
let operator;
let num2;


// FUNCTIONS

// OPERATE FUNCTION
function operate(num1, num2, operator){
    if (operator === "+") {
        return add(num1, num2);
    };
    if (operator === "-") {
        return subtract(num1, num2);
    };
    if (operator === "*") {
        return multiply(num1, num2);
    };
    if (operator === "/") {
        return divide(num1, num2);
    };
};


// ADDITION FUNCTION
function add(num1, num2) {
    return num1 + num2;
};
// SUBTRACTION FUNCTION
function subtract(num1, num2) {
    return num1 - num2;
};
// MULTIPLICATION FUNCTION
function multiply(num1, num2) {
    return num1 * num2;
};
// DIVISION FUNCTION
function divide(num1, num2) {
    return num1 / num2;
};

