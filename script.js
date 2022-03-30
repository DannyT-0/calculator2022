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
	if (operator == add) {
		return add(a, b);
	} else if (operator == subtract) {
		return subtract(a, b);
	} else if (operator == divide) {
		return divide(a, b);
	} else if (operator == multiply) {
		return multiply(a, b);
	}
}

// const addButton = document.querySelector("#btnAdd");
// const subtractButton = document.querySelector("#btnSubtract");
// const multiplyButton = document.querySelector("#btnMultiply");
// const divideButton = document.querySelector("#btnDivide");
const operatorButtons = document.querySelectorAll(".opBtn");
const numberButtons = document.querySelectorAll(".numBtn");
const calcDisplay = document.querySelector(".display");
const clearButton = document.querySelector("#btnClear");
const equalButton = document.querySelector("#btnEqual");

// equalButton.addEventListener("click", () => {
//     if(calcDisplay)
// });

let currVal = 0;

clearButton.addEventListener("click", () => {
	calcDisplay.textContent = "";
});

numberButtons.forEach((btn) => {
	btn.addEventListener("click", (e) => {
		calcDisplay.textContent += " " + e.target.textContent;
		currVal += e.target.textContent;
	});
});

operatorButtons.forEach((btn) => {
	btn.addEventListener("click", (e) => {
		calcDisplay.textContent += " " + e.target.textContent;
	});
});
