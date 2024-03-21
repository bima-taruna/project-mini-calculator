const digits = document.querySelectorAll(".digit")
const display = document.querySelector(".display")
const zero = document.querySelector(".zero")
const resetButton = document.querySelector('.clear')
let displayArr = []

buttonToDisplay()
buttonZeroToDisplay()
reset()

function buttonToDisplay() {
    digits.forEach((item) => {
        item.addEventListener("click", () => {
            if (displayArr.length < 9) {
                displayArr.push(item.textContent)
                display.textContent = displayArr.join("")
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