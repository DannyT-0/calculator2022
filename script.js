function add(a, b) {
	return a + b;
}

function subtract(a, b) {
	return a - b;
}

function multiply(a, b) {
	return a * b;
}

function divide(a, b) {
	return a / b;
}

function operate(operator, a, b) {
	console.log(operator);
	console.log(a);
	console.log(b);
	if (operator === "+") {
		calcDisplay.textContent += " " + "=" + add(a, b);
		return add(a, b);
	} else if (operator === "-") {
		calcDisplay.textContent += " " + "=" + subtract(a, b);
		return subtract(a, b);
	} else if (operator === "/") {
		calcDisplay.textContent += " " + "=" + divide(a, b);
		return divide(a, b);
	} else if (operator === "*") {
		calcDisplay.textContent += " " + "=" + multiply(a, b);
		return multiply(a, b);
	}
}

const operatorButtons = document.querySelectorAll(".opBtn");
const numberButtons = document.querySelectorAll(".numBtn");
const calcDisplay = document.querySelector(".display");
const clearButton = document.querySelector("#btnClear");
const equalButton = document.querySelector("#btnEqual");

let currVal = 0;
let secondVal = 0;
let currentOperator = "";

clearButton.addEventListener("click", () => {
	calcDisplay.textContent = "";
});

numberButtons.forEach((btn) => {
	btn.addEventListener("click", (e) => {
		calcDisplay.textContent += " " + e.target.textContent;

		if (currVal == 0 && currentOperator == "") {
			currVal = parseInt(e.target.textContent);
		} else if (currVal >= 0 && currentOperator == "") {
			currentOperator = e.target.textContent;
		} else if (currVal >= 0 && currentOperator != "") {
			secondVal = parseInt(e.target.textContent);
		}

		console.log(currVal, "currVal", typeof currVal);
		console.log(secondVal, "secondVal");
	});
});

operatorButtons.forEach((btn) => {
	btn.addEventListener("click", (e) => {
		calcDisplay.textContent += " " + e.target.textContent;
		currentOperator = e.target.textContent;
		console.log(currentOperator);
		if (currentOperator == "+") {
			currentOperator == add;
		} else if (currentOperator == "-") {
			currentOperator == subtract;
		} else if (currentOperator == "*") {
			currentOperator == multiply;
		} else if (currentOperator == "/") {
			currentOperator == divide;
		}
	});
});

equalButton.addEventListener("click", () => {
	operate(currentOperator, currVal, secondVal);
});

// if the display is empty, click a number to start the calculation
// if first number is satisfactory, click an operator to begin a calculation
// after operator is clicked, enter another number
// if that's the entire calculation, press enter for result, otherwise, click another operator
// if another operator is clicked, first calculation result should be in display
