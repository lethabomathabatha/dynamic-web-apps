
const MAX_NUMBER = 50
const MIN_NUMBER = -25
const STEP_AMOUNT = 1; 
const DEFAULT = 0;


const number = document.querySelector('[data-key="number"]')
const subtract = document.querySelector('[data-key="subtract"]')
const add = document.querySelector('[data-key="add"]')
const reset = document.querySelector('[data-key="reset"]')

const resetAlert = document.querySelector('sl-alert')


// subtracting
const subtractHandler = () => {
    const newValue = parseInt(number.value) - STEP_AMOUNT
    number.value = newValue

    if (add.disabled === true) {
        add.disabled = false
    }

    if (newValue <= MIN_NUMBER) {
        subtract.disabled = true
    }
}

// adding
const addHandler = () => {
    const newValue = parseInt(number.value) + STEP_AMOUNT
    number.value = newValue

    if (subtract.disabled === true) {
        subtract.disabled = false
    }

    if (newValue >= MAX_NUMBER) {
        add.disabled = true
        
    }
}

// counter reset
const resetHandler = (e) => {
    e.preventDefault;
    const defaultValue = DEFAULT;
    number.value = defaultValue;
    resetAlert.show()
 }

subtract.addEventListener ('click', subtractHandler);
add.addEventListener ('click', addHandler);
reset.addEventListener ('click', resetHandler);




