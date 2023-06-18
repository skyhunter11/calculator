
let firstOperand = '';
let secondOperand = '';
let currentOperator = null;


// Create the functions that populate the display when you click the number buttons.
// You should be storing the ‘display value’ in a variable somewhere for use in the next step.

// Initialize Variables
let shouldResetScreen = false;


// Build Nodelists for buttons
const numberButtons = document.querySelectorAll('[data-number]');
const operatorButtons = document.querySelectorAll('[data-operator]');
// Tag clear button
const clearButton = document.getElementById('clearButton');
// Tag equals button
const equalsButton = document.getElementById('equalsButton');
// Tag dot button
const dotButton = document.getElementById('dotButton');

// Tag last operation screen
const lastOperationScreen = document.getElementById('lastOperationScreen');
// Tag current operation screen
const currentOperationScreen = document.getElementById('currentOperationScreen');

// call clearScren function when clearButton is clicked
clearButton.addEventListener('click', clearScreen);
// call evaluate function when equalsButton is clicked
equalsButton.addEventListener('click', evaluate);

// call 
dotButton.addEventListener('click', () => console.log('fuck tyrrany'));



// ***THESE LISTENERS ARE BIG. ALL FUNCTIONS ARE TRIGGERED OFF OF THEM*** //
// numberButton Listener
numberButtons.forEach((button) =>
    button.addEventListener('click', () => appendNumber(button.textContent))
);
// operatorButton Listener
operatorButtons.forEach((button) => 
    button.addEventListener('click', () => setOperator(button.textContent))
);


function appendNumber(number) {
    if (currentOperationScreen.textContent === '0' || shouldResetScreen)
      resetScreen();
    currentOperationScreen.textContent += number
  };

function setOperator(operator) {
    if (currentOperator !== null) evaluate();
    firstOperand = currentOperationScreen.textContent;
    currentOperator = operator;
    lastOperationScreen.textContent = `${firstOperand} ${currentOperator}`;
    shouldResetScreen = true;
  };

function evaluate() {

    if (currentOperator === '/' && currentOperationScreen.textContent === '0') {
        alert("You can't divide by zero!");
        return;
    };
    secondOperand = currentOperationScreen.textContent;
    currentOperationScreen.textContent = roundResult(
        operate(firstOperand, secondOperand, currentOperator)
        );
    lastOperationScreen.textContent = `${firstOperand} ${currentOperator} ${secondOperand} =`;
};

function resetScreen() {
    currentOperationScreen.textContent = '';
    shouldResetScreen = false;
  };

function clearScreen() {
    currentOperationScreen.textContent = '0'
    lastOperationScreen.textContent = '';
    firstOperand = '';
    secondOperand = '';
    currentOperator = null;
  };

function appendDot() {
    
};

function roundResult(number) {
    return Math.round(number * 1000) / 1000;
};


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

