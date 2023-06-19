
// Initialize Variables
let firstOperand = '';
let secondOperand = '';
let currentOperator = null;
let shouldResetScreen = false;

// Build Nodelists for buttons
const numberButtons = document.querySelectorAll('[data-number]');
const operatorButtons = document.querySelectorAll('[data-operator]');

// Button Tags
const clearButton = document.getElementById('clearButton');
const equalsButton = document.getElementById('equalsButton');
const dotButton = document.getElementById('dotButton');
const deleteButton = document.getElementById('deleteButton');

// Display Tags
const lastOperationScreen = document.getElementById('lastOperationScreen');
const currentOperationScreen = document.getElementById('currentOperationScreen');

// ***THESE LISTENERS ARE BIG. ALL FUNCTIONS ARE TRIGGERED OFF OF THEM*** //
// Function Calls via Button Click
    //single butons
clearButton.addEventListener('click', clearScreen);
equalsButton.addEventListener('click', evaluate);
dotButton.addEventListener('click', appendDot);
deleteButton.addEventListener('click', deleteInput);
    // buttons in Nodelist
numberButtons.forEach((button) =>
    button.addEventListener('click', () => appendNumber(button.textContent))
);
operatorButtons.forEach((button) => 
    button.addEventListener('click', () => setOperator(button.textContent))
);

//FUNCTIONS//
function appendNumber(number) {
    if (currentOperationScreen.textContent === '0' || shouldResetScreen)
      resetScreen();
    currentOperationScreen.textContent += number;
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
    if (shouldResetScreen) resetScreen();
    if (currentOperationScreen.textContent === '') {
        currentOperationScreen.textContent = '0';
    };
    if (currentOperationScreen.textContent.includes('.')) {
        return;
    };
    currentOperationScreen.textContent += '.';
  };

function deleteInput() {
    currentOperationScreen.textContent = currentOperationScreen.textContent.slice(0,-1);
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

