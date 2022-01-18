

const calculatorDisplay = document.querySelector('.calculator-display');
calculatorDisplay.textContent = 'Here lies the mighty display of the calculator.';

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

let leftOperand = null;
let rightOperand = null;
let operand = '0';
let operator = null;
let result = null;
let lastAction = null;


// main buttons event listeners
dotButton.addEventListener('click', () => {
	if (lastAction == 'equals') operand = '0'; // resets the operand when last result was obtained by '=' sign
	if (operand.toString().includes('.')) return; // only 1 'dot' possible in a string that will be cast into a number.
	operand += '.';
	if (operand != '0') {calculatorDisplay.textContent = `${Number(operand)}.`;} // to prevent showing something like '00000.2'
	else calculatorDisplay.textContent = (operand);
	lastAction = 'number';
});
zeroButton.addEventListener('click', () => {
	if (lastAction == 'equals') operand = '0';
	operand += '0'; 
	calculatorDisplay.textContent = Number(operand);
	lastAction = 'number';
});
oneButton.addEventListener('click', () => {
	if (lastAction == 'equals') operand = '0';
	operand += '1'
	calculatorDisplay.textContent = Number(operand);
	lastAction = 'number';
});
twoButton.addEventListener('click', () => {
	if (lastAction == 'equals') operand = '0';
	operand += '2'
	calculatorDisplay.textContent = Number(operand);
	lastAction = 'number';
});
threeButton.addEventListener('click', () => {
	if (lastAction == 'equals') operand = '0';
	operand += '3';
	calculatorDisplay.textContent = Number(operand);
	lastAction = 'number';
});
fourButton.addEventListener('click', () => {
	if (lastAction == 'equals') operand = '0';
	operand += '4';
	calculatorDisplay.textContent = Number(operand);
	lastAction = 'number';
});
fiveButton.addEventListener('click', () => {
	if (lastAction == 'equals') operand = '0';
	operand += '5';
	calculatorDisplay.textContent = Number(operand);
	lastAction = 'number';
});
sixButton.addEventListener('click', () => {
	if (lastAction == 'equals') operand = '0';
	operand += '6';
	calculatorDisplay.textContent = Number(operand);
	lastAction = 'number';
});
sevenButton.addEventListener('click', () => {
	if (lastAction == 'equals') operand = '0';
	operand += '7';
	calculatorDisplay.textContent = Number(operand);
	lastAction = 'number';
});
eightButton.addEventListener('click', () => {
	if (lastAction == 'equals') operand = '0';
	operand += '8';
	calculatorDisplay.textContent = Number(operand);
	lastAction = 'number';
});
nineButton.addEventListener('click', () => {
	if (lastAction == 'equals') operand = '0';
	operand += '9';
	calculatorDisplay.textContent = Number(operand);
	lastAction = 'number';
});


// operator buttons event listeners
divideButton.addEventListener('click', () => {
	if (leftOperand != null && lastAction == 'number') {
		result = operate(leftOperand, operand, operator);
		if (result == 'Infinity') calculatorDisplay.textContent = "Nice try, mate.";
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
		result = operate(leftOperand, operand, operator);
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


equalsButton.addEventListener('click', () => {
	if (!operator) return;
	if (lastAction == 'equals') {
		result = operate(operand, rightOperand, operator);
		calculatorDisplay.textContent = result;
		operand = result;
	}
	else {
		leftOperand = Number(leftOperand);
		rightOperand = Number(operand);
	
		result = operate(leftOperand, rightOperand, operator);
		leftOperand = null;
		operand = result;
	
		if (result == 'Infinity') calculatorDisplay.textContent = "Nice try, mate.";
		else calculatorDisplay.textContent = result;
		lastAction = 'equals';
	}
	
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

window = document.querySelector('window');
window.addEventListener('click', () => {
	console.log(`leftOperand: ${leftOperand}`);
	console.log(`rightOperand: ${rightOperand}`)
	console.log(`operand: ${operand}`);
	console.log(`result: ${result}`);
	console.log('');
})




// Maybe I'll use them later
// function add(x, y) {
// 	return x + y;
// }
// function subtract(x, y) {
// 	return x - y;
// }
// function multiply(x, y) {
// 	return x * y;
// }
// function divide(x, y) {
// 	return x / y;
// }

// let a = '+';
// let b = '-';
// let c = '*';
// let d = '/';

	// console.log(`leftOperand: ${leftOperand}`);
	// console.log(`operand: ${operand}`);
	// console.log(`result: ${result}`);