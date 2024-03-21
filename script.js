const digits = document.querySelectorAll(".digit")
const display = document.querySelector(".display")
const zero = document.querySelector(".zero")
const resetButton = document.querySelector('.clear')
const addButton = document.querySelector(".add")
const resultButton = document.querySelector(".result")
let firstVal = null;
let secondVal = null;
let resultVal = null;
let displayArr = [];

buttonToDisplay()
buttonZeroToDisplay()
addTrigger()
reset()
triggerResult()

function buttonToDisplay() {
    digits.forEach((item) => {
        item.addEventListener("click", () => {
            if (displayArr.length < 9) {
                if (!item.classList.contains("operation")) {
                    displayArr.push(item.textContent)
                    firstVal = parseInt(displayArr.join(""))
                    secondVal = firstVal
                    display.textContent = firstVal
                } else {
                    displayArr = []
                    displayArr.push(item.textContent)
                    secondVal = parseInt(displayArr.join(""))
                    display.textContent = secondVal
                }
            }
        })
    })
}

function buttonZeroToDisplay() {
    zero.addEventListener("click", (e) => {
        if (displayArr.length >= 1) {
            displayArr.push(zero.textContent)
            display.textContent = displayArr.join("")
        }
    })
}

function reset() {
    resetButton.addEventListener('click', () => {
        displayArr = []
        display.textContent = "0"
    })
}

function addTrigger() {
    addButton.addEventListener('click', () => {
        if (resultButton.classList.contains("add")) {
            resultVal = add(firstVal, secondVal)
            display.textContent = resultVal
            firstVal = resultVal
        }
        displayArr = []
        digits.forEach((item) => {
            item.classList.add("operation")
        })
        zero.classList.add("operation")
        resultButton.classList.add("add")
    })
}

function triggerResult() {
    resultButton.addEventListener('click', () => {
        resultVal = add(firstVal, secondVal)
        display.textContent = resultVal
        digits.forEach((item) => {
            item.classList.remove("operation")
        })
        resultButton.classList.remove("add")
        firstVal = resultVal
    })
}

function add(num1, num2) {
    return num1 + num2
}