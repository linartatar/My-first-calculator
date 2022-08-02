const userInputium = document.getElementById
("userInput");
let expression = '';

function press(num) {
    expression += num
    userInputium.value = expression
}

function equal() {
    userInputium.value = eval(expression);
    expression = ''
}

function erase() {
    expression = ''
    userInputium.value = expression
}