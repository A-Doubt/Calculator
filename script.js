//global variables
let leftOperand = null;
let rightOperand = null;
let operand = '0';
let operator = null;
let result = null;
let lastAction = null;

//display
const calculatorDisplay = document.querySelector('.calculator-display');
calculatorDisplay.textContent = operand;

// main buttons
const dotButton = document.querySelector('#dot-button');
const zeroButton = document.querySelector('#zero-button');
const oneButton = document.querySelector('#one-button');
const twoButton = document.querySelector('#two-button');
const threeButton = document.querySelector('#three-button');
const fourButton = document.querySelector('#four-button');
const fiveButton = document.querySelector('#five-button');
const sixButton = document.querySelector('#six-button');
const sevenButton = document.querySelector('#seven-button');
const eightButton = document.querySelector('#eight-button');
const nineButton = document.querySelector('#nine-button');

// operator buttons
const divideButton = document.querySelector('#divide-button');
const multiplyButton = document.querySelector('#multiply-button');
const subtractButton = document.querySelector('#subtract-button');
const addButton = document.querySelector('#add-button');
const equalsButton = document.querySelector('#equals-button');
const resetButton = document.querySelector('#reset-button');
const percentButton = document.querySelector('#percent-button');




// main buttons event listeners
dotButton.addEventListener('click', () => {
	if (lastAction == 'equals') operand = '0'; // resets the operand when last result was obtained by '=' sign
	if (operand.toString().includes('.')) return; // only 1 'dot' possible in a string that will be cast into a number
	operand += '.';
	if (operand != '0') {calculatorDisplay.textContent = `${Number(operand)}.`;} // to prevent showing something like '00000.2'
	else calculatorDisplay.textContent = (operand);
	lastAction = 'number';	// lastAction tracks last button clicked to make things work properly
});
zeroButton.addEventListener('click', () => {
	if (lastAction == 'equals') operand = '0';
	if (operand == '0') operand = '0'; // this prevents showing two 0s on the display
	else operand += '0';
	calculatorDisplay.textContent = operand;
	lastAction = 'number';
});
oneButton.addEventListener('click', () => {
	if (lastAction == 'equals') operand = '0';
	if (operand === '0') operand = '1';	// this prevents showing two 0s on the display - same for every other number
	else operand += '1'
	calculatorDisplay.textContent = Number(operand);
	lastAction = 'number';
});
twoButton.addEventListener('click', () => {
	if (lastAction == 'equals') operand = '0';
	if (operand == '0') operand = '2';
	else operand += '2'
	calculatorDisplay.textContent = Number(operand);
	lastAction = 'number';
});
threeButton.addEventListener('click', () => {
	if (lastAction == 'equals') operand = '0';
	if (operand == '0') operand = '3';
	else operand += '3';
	calculatorDisplay.textContent = Number(operand);
	lastAction = 'number';
});
fourButton.addEventListener('click', () => {
	if (lastAction == 'equals') operand = '0';
	if (operand == '0') operand = '4';
	else operand += '4'
	calculatorDisplay.textContent = Number(operand);
	lastAction = 'number';
});
fiveButton.addEventListener('click', () => {
	if (lastAction == 'equals') operand = '0';
	if (operand == '0') operand = '5';
	else operand += '5'
	calculatorDisplay.textContent = Number(operand);
	lastAction = 'number';
});
sixButton.addEventListener('click', () => {
	if (lastAction == 'equals') operand = '0';
	if (operand == '0') operand = '6';
	else operand += '6'
	calculatorDisplay.textContent = Number(operand);
	lastAction = 'number';
});
sevenButton.addEventListener('click', () => {
	if (lastAction == 'equals') operand = '0';
	if (operand == '0') operand = '7';
	else operand += '7'
	calculatorDisplay.textContent = Number(operand);
	lastAction = 'number';
});
eightButton.addEventListener('click', () => {
	if (lastAction == 'equals') operand = '0';
	if (operand == '0') operand = '8';
	else operand += '8'
	calculatorDisplay.textContent = Number(operand);
	lastAction = 'number';
});
nineButton.addEventListener('click', () => {
	if (lastAction == 'equals') operand = '0';
	if (operand == '0') operand = '9';
	else operand += '9'
	calculatorDisplay.textContent = Number(operand);
	lastAction = 'number';
});


// operator buttons event listeners
divideButton.addEventListener('click', () => {
	if (leftOperand != null && lastAction == 'number') {
		result = (Math.round(1000000000 * operate(leftOperand, operand, operator)) / 1000000000); // to prevent overflowing the display
		if (result == 'Infinity') calculatorDisplay.textContent = "Nice try, mate.";
		else if (isNaN(result)) calculatorDisplay.textContent = 'ERR';
		else calculatorDisplay.textContent = result;
		leftOperand = result;
		lastAction = 'operator';
	}
	if (lastAction != 'operator') leftOperand = Number(operand);
	operator = '/';
	operand = '0';
	lastAction = 'operator';
});
multiplyButton.addEventListener('click', () => {
	if (leftOperand != null && lastAction == 'number') {
		result = (Math.round(1000000000 * operate(leftOperand, operand, operator)) / 1000000000);
		calculatorDisplay.textContent = result;
		leftOperand = result;
		lastAction = 'operator';
	}
	if (lastAction != 'operator') leftOperand = Number(operand);
	operator = '*';
	operand = '0';
	lastAction = 'operator';
});
subtractButton.addEventListener('click', () => {
	if (leftOperand != null && lastAction == 'number') {
		result = operate(leftOperand, operand, operator);
		calculatorDisplay.textContent = result;
		leftOperand = result;
		lastAction = 'operator';
	}
	if (lastAction != 'operator') leftOperand = Number(operand);
	operator = '-';
	operand = '0';
	lastAction = 'operator';
});
addButton.addEventListener('click', () => {
	if (leftOperand != null && lastAction == 'number') {
		result = operate(leftOperand, operand, operator);
		calculatorDisplay.textContent = result;
		leftOperand = result.toString();
		lastAction = 'operator';
	}
	if (lastAction != 'operator')leftOperand = Number(operand);
	operator = '+';
	operand = '0';
	lastAction = 'operator';
});
(Math.round(1000000000 * operate(leftOperand, operand, operator)) / 1000000000)

equalsButton.addEventListener('click', () => {
	if (!operator) return;
	if (lastAction == 'equals') {
		result = Math.round(1000000000 * operate(operand, rightOperand, operator)) / 1000000000;
		if (result == 'Infinity') calculatorDisplay.textContent = "Nice try, mate.";
		else calculatorDisplay.textContent = result;
		operand = result;
	}
	else {
		leftOperand = Number(leftOperand);
		rightOperand = Number(operand);
	
		result = Math.round(1000000000 * operate(leftOperand, rightOperand, operator)) / 1000000000;
		leftOperand = null;
		operand = result;
	
		if (result == 'Infinity') calculatorDisplay.textContent = "Nice try, mate.";
		else if (isNaN(result)) calculatorDisplay.textContent = 'ERR';
		else calculatorDisplay.textContent = result;
		lastAction = 'equals';
	}
	
});

resetButton.addEventListener('click', () => {
	leftOperand = null;
	rightOperand = null;
	operand = '0';
	operator = null;
	result = null;
	lastAction = null;
	calculatorDisplay.textContent = operand;
});

percentButton.addEventListener('click', () => {
	operand = operand / 100;
	calculatorDisplay.textContent = operand;
});

function operate (leftOperand, rightOperand, operator) {
	switch (operator) {
		case '+':
			return Number(leftOperand) + Number(rightOperand);
		case '-':
			return leftOperand - rightOperand;
		case '*':
			return leftOperand * rightOperand;
		case '/':
			return leftOperand / rightOperand;
	}
}

const allOperationButtons = document.getElementById('operation-buttons');

allOperationButtons.addEventListener('click', (event) => {
	const isButton = event.target.nodeName === 'BUTTON';
	if (!isButton || event.target.id === 'equals-button') {
	  return;
	}
	// removing active class from all buttons
	addButton.classList.remove('active-operator');
	subtractButton.classList.remove('active-operator');
	multiplyButton.classList.remove('active-operator');
	divideButton.classList.remove('active-operator');
	// adding class to the active operator button
	event.target.classList.add('active-operator');
  })