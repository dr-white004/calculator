const buttons = document.querySelectorAll('.btn');
const displayMain = document.querySelector('.active');
const displaySecondary = document.querySelector('.passive');
let currValue = '';
let prevValue = '';
let operation = null;

function updateDisplay() {
    displayMain.textContent = currValue || '0';
    displaySecondary.textContent = prevValue + ' ' + (operation || '');
}

function clearAll() {
    currValue = '';
    prevValue = '';
    operation = null;
    updateDisplay();
}

function addNumber(num) {
    if (num === '.' && currValue.includes('.')) return;
    currValue += num;
    updateDisplay();
}

function selectOperation(op) {
    if (currValue === '') return;
    if (prevValue !== '') calculate();
    operation = op;
    prevValue = currValue;
    currValue = '';
    updateDisplay();
}

function calculate() {
    let result;
    const firstNum = parseFloat(prevValue);
    const secondNum = parseFloat(currValue);
    if (isNaN(firstNum) || isNaN(secondNum)) return;

    if (operation === '+') result = firstNum + secondNum;
    if (operation === '-') result = firstNum - secondNum;
    if (operation === '*') result = firstNum * secondNum;
    if (operation === '/') result = secondNum !== 0 ? firstNum / secondNum : 'Error';

    currValue = result;
    operation = null;
    prevValue = '';
    updateDisplay();
}

function handleKey(e) {
    const key = e.key;
    if (!isNaN(key) || key === '.') addNumber(key);
    if (['+', '-', '*', '/'].includes(key)) selectOperation(key);
    if (key === 'Enter' || key === '=') calculate();
    if (key === 'Backspace') currValue = currValue.slice(0, -1);
    if (key === 'Escape') clearAll();
    updateDisplay();
}

buttons.forEach(button => {
    button.addEventListener('click', () => {
        if (button.classList.contains('number')) addNumber(button.textContent);
        if (button.classList.contains('operate')) selectOperation(button.textContent);
        if (button.classList.contains('equal')) calculate();
        if (button.classList.contains('clear')) clearAll();
    });
});

document.addEventListener('keydown', handleKey);

updateDisplay();
