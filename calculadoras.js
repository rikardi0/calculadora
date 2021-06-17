const screen = document.querySelector('#screen');

const firstNum = document.createElement('p');
screen.appendChild(firstNum);
const secondNum = document.createElement('p');
screen.appendChild(secondNum);
const result = document.createElement('p');
screen.appendChild(result);
const sign = document.createElement('p');

let firstNumber = 0;
let secondNumber = 0;
let numCont = 0;


function addNumber(number) {
    numCont++;
    if (changeNumber == "si" || equalCont == "si") {
        secondNumber += `${number}`;
        secondNum.textContent += `${number}`;
        screen.removeChild(sign);


    }
    else if (changeNumber !== "si") {
        firstNumber += `${number}`;
        firstNum.textContent += `${number}`;
    }
};
function defineOperator() {
    if (equalCont > 1) {
    }
    else if (firstCont > 1 || secondCont > 1) {
        result.textContent = "Sintax ERROR";
        screen.removeChild(secondNum);
        screen.removeChild(firstNum);
    }
    else if (operation == undefined) {
        result.textContent = firstNumber;
        screen.removeChild(firstNum);
    }
    else {
        result.textContent = `${firstNumber}`;
        secondNumber = 0;
        firstCont = 0;
        secondCont = 0;
    }
};
let firstResultado;
let operation;
function add() {
    let a = parseFloat(firstNumber);
    let b = parseFloat(secondNumber);
    firstResultado = a + b;
    firstNumber = firstResultado.toFixed(0);
}
function rest() {
    firstResultado = firstNumber - secondNumber;
    firstNumber = firstResultado.toFixed(0);
}
function mult() {
    firstResultado = firstNumber * secondNumber;
    firstNumber = firstResultado.toFixed(0);
}
function divi() {
    firstResultado = firstNumber / secondNumber;
    firstNumber = firstResultado.toFixed(3);
}

let equalCont;
function operator() {
    equalCont = "si";
    if (operation == "+") {
        add();
    }
    else if (operation == "-") {
        rest();
    }
    else if (operation == "x") {
        mult();
    }
    else if (operation == "/") {
        divi();
    }
    defineOperator(); 
    screen.removeChild(secondNum);
}

let changeNumber = 0;
function signs(operator) {
    operation = `${operator}`
    sign.textContent = `${operator}`
    changeNumber = "si";
    screen.appendChild(sign);
    screen.removeChild(firstNum);
}

let firstCont = 0;
let secondCont = 0;
function deci(number) {
    numCont++;
    if (changeNumber == "si") {
        secondNumber += `${number}`;
        secondNum.textContent += `${number}`;
        secondCont++;
    }
    else {
        firstNumber += `${number}`;
        firstNum.textContent += `${number}`;
        firstCont++;
    }
}

const siete = document.querySelector('#siete');
siete.addEventListener('click', () => { addNumber(7) });
const ocho = document.querySelector('#ocho');
ocho.addEventListener('click', () => { addNumber(8) });
const nueve = document.querySelector('#nueve');
nueve.addEventListener('click', () => { addNumber(9) });
const cuatro = document.querySelector('#cuatro');
cuatro.addEventListener('click', () => { addNumber(4) });
const cinco = document.querySelector('#cinco');
cinco.addEventListener('click', () => { addNumber(5) });
const seis = document.querySelector('#seis');
seis.addEventListener('click', () => { addNumber(6) });
const uno = document.querySelector('#uno');
uno.addEventListener('click', () => { addNumber(1) });
const dos = document.querySelector('#dos');
dos.addEventListener('click', () => { addNumber(2) });
const tres = document.querySelector('#tres');
tres.addEventListener('click', () => { addNumber(3) });
const cero = document.querySelector('#cero');
cero.addEventListener('click', () => { addNumber(0) });

const igual = document.querySelector('#igual');
igual.addEventListener('click', () => {
    if (numCont < 1) {
    }
    else {
        operator()
    }
});
const suma = document.querySelector('#suma');
suma.addEventListener('click', () => {
    if (numCont < 1) {
    }
    else {
        signs(`+`)
    }
});
const resta = document.querySelector('#resta');
resta.addEventListener('click', () => {
    if (numCont < 1) {
    }
    else {
        signs(`-`)
    }
});
const multiplicacion = document.querySelector('#mult');
multiplicacion.addEventListener('click', () => {
    if (numCont < 1) {
    }
    else {
        signs(`x`)
    }
});

const division = document.querySelector('#divi');
division.addEventListener('click', () => {
    if (numCont < 1) {
    }
    else {
        signs(`/`)
    }
});

const clear = document.querySelector('#clear');
clear.addEventListener('click', () => {
    location.reload()
})
const decimal = document.querySelector('#decimal');
decimal.addEventListener('click', () => { deci(".") });