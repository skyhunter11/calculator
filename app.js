

let num1;
let operator;
let num2;

// Create the functions that populate the display when you click the number buttons.
// You should be storing the ‘display value’ in a variable somewhere for use in the next step.


// FUNCTIONS:

// OPERATE FUNCTION
function operate(num1, num2, operator){
    num1 = Number(num1);
    num2 = Number(num2);
    
    switch (operator) {
        case "+":
            return add(num1, num2);
        case "-":
            return subtract(num1, num2);
        case "*":
            return multiply(num1, num2);
        case "/":
            if (num2 === 0) return null;
            else return divide(num1, num2);
        default:
            return null;
    }
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

