let currentNumber = '';
let operator = '';
let firstNumber = '';

function appendNumber(number) {
    currentNumber += number;
    updateDisplay(currentNumber);
}

function setOperator(op) {
    if (currentNumber === '') return;
    if (firstNumber !== '') {
        calculateResult();
    }
    operator = op;
    firstNumber = currentNumber;
    currentNumber = '';
}

function calculateResult() {
    if (firstNumber === '' || currentNumber === '' || operator === '') return;

    const num1 = parseFloat(firstNumber);
    const num2 = parseFloat(currentNumber);

    let result = 0;

    switch (operator) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            if (num2 === 0) {
                alert('Error: Division by zero');
                clearDisplay();
                return;
            }
            result = num1 / num2;
            break;
        default:
            return;
    }

    updateDisplay(result);
    currentNumber = result;
    operator = '';
    firstNumber = '';
}

function clearDisplay() {
    currentNumber = '';
    operator = '';
    firstNumber = '';
    updateDisplay('0');
}

function updateDisplay(value) {
    document.getElementById('display').value = value;
}