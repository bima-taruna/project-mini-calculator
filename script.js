const digits = document.querySelectorAll(".digit");
const display = document.querySelector(".display");
const zero = document.querySelector(".zero");
const resetButton = document.querySelector(".clear");
const addButton = document.querySelector(".add");
const subtractButton = document.querySelector(".subtract");
const resultButton = document.querySelector(".result");
let firstVal = null;
let secondVal = null;
let resultVal = null;
let operationName = null;
let displayArr = [];

digits.forEach((item) => {
  item.addEventListener("click", () => {
    if (displayArr.length < 9) {
      if (!item.classList.contains("operation")) {
        assignFirst(item.textContent);
      } else {
        assignSecond(item.textContent);
      }
    }
  });
});

zero.addEventListener("click", (e) => {
  if (displayArr.length >= 1) {
    if (resultButton.classList.length == 1) {
      assignFirst(zero.textContent);
    } else {
      assignSecond(zero.textContent);
    }
  }
});

resetButton.addEventListener("click", () => {
  reset();
});

addButton.addEventListener("click", () => {
  if (resultButton.classList.contains("add")) {
    addTrigger();
  }
  operationName = "add";
  displayArr = [];
  digits.forEach((item) => {
    item.classList.add("operation");
  });
  addOperationToResult();
});

subtractButton.addEventListener("click", () => {
  if (resultButton.classList.contains("subtract")) {
    subTrigger();
  }
  operationName = "subtract";
  displayArr = [];
  digits.forEach((item) => {
    item.classList.add("operation");
  });
  addOperationToResult();
});

resultButton.addEventListener("click", () => {
  if (resultButton.classList.contains("add")) {
    addTrigger();
    resultButton.classList.remove("add");
  }
  if (resultButton.classList.contains("subtract")) {
    subTrigger();
    resultButton.classList.remove("subtract");
  }
  digits.forEach((item) => {
    item.classList.remove("operation");
  });
});

function addTrigger() {
  resultVal = add(firstVal, secondVal);
  display.textContent = resultVal;
  firstVal = resultVal;
}

function subTrigger() {
  resultVal = subtract(firstVal, secondVal);
  display.textContent = resultVal;
  firstVal = resultVal;
}

function add(num1, num2) {
  return num1 + num2;
}

function subtract(num1, num2) {
  return num1 - num2;
}

function assignFirst(num) {
  displayArr.push(num);
  firstVal = parseInt(displayArr.join(""));
  secondVal = firstVal;
  display.textContent = firstVal;
}

function assignSecond(num) {
  displayArr.push(num);
  secondVal = parseInt(displayArr.join(""));
  display.textContent = secondVal;
}

function reset() {
  displayArr = [];
  display.textContent = "0";
  firstVal = null;
  secondVal = null;
  resultVal = null;
}

function addOperationToResult() {
  zero.classList.add("operation");
  if (resultButton.classList.length == 2) {
    resultButton.classList.replace(resultButton.classList[1], operationName);
  } else {
    resultButton.classList.add(operationName);
  }
}
