const pantalla = document.querySelector('#screen');

const firstNum = document.createElement('p');
pantalla.appendChild(firstNum);
const segNum = document.createElement('p');
pantalla.appendChild(segNum);

let primerNumero = 0;
let segundoNumero = 0;
let contadorNumero = 0; 
function addNumero(numero) {
    contadorNumero++;
if (activadorSegundo == "si") {
        segundoNumero += `${numero}`;
        segNum.textContent += `${numero}`;
        pantalla.removeChild(sig);
    }
    else if (contadorResultado > 0) {
        pantalla.removeChild(result);
        primerNumero += `${numero}`;
        firstNum.textContent += `${numero}`;
    }

    else {
        primerNumero += `${numero}`;
        firstNum.textContent += `${numero}`;
    }



};

const siete = document.querySelector('#siete');
siete.addEventListener('click', () => { addNumero(7) });
const ocho = document.querySelector('#ocho');
ocho.addEventListener('click', () => { addNumero(8) });
const nueve = document.querySelector('#nueve');
nueve.addEventListener('click', () => { addNumero(9) });


const cuatro = document.querySelector('#cuatro');
cuatro.addEventListener('click', () => { addNumero(4) });
const cinco = document.querySelector('#cinco');
cinco.addEventListener('click', () => { addNumero(5) });
const seis = document.querySelector('#seis');
seis.addEventListener('click', () => { addNumero(6) });


const uno = document.querySelector('#uno');
uno.addEventListener('click', () => { addNumero(1) });
const dos = document.querySelector('#dos');
dos.addEventListener('click', () => { addNumero(2) });
const tres = document.querySelector('#tres');
tres.addEventListener('click', () => { addNumero(3) });

const cero = document.querySelector('#cero');
cero.addEventListener('click', () => { addNumero(0) });

let firstResultado;
let resultado;

function add() {
    let a = parseFloat(primerNumero);
    let b = parseFloat(segundoNumero);
    firstResultado = a + b;

    resultado = firstResultado.toFixed(0);

}
function rest() {

    firstResultado = primerNumero - segundoNumero;
    resultado = firstResultado.toFixed(0);

}
function mult() {
    firstResultado = primerNumero * segundoNumero;
    resultado = firstResultado.toFixed(0);

}
function divi() {
    firstResultado = primerNumero / segundoNumero;
    resultado = firstResultado.toFixed(3);

}

let operacion;
let contadorIgual = 0;
let contadorResultado = 0;
const result = document.createElement('p');
function operador() {
    pantalla.appendChild(result);
    contadorIgual++;
    if (operacion == "+") {
        add(primerNumero, segundoNumero);
    }
    else if (operacion == "-") {
        rest(primerNumero, segundoNumero);
    }
    else if (operacion == "x") {
        mult(primerNumero, segundoNumero);
    }
    else if (operacion == "/") {
        divi(primerNumero, segundoNumero);
    }
    if (contadorIgual > 1) {

    }
    else if (primerContador > 1 || segundoContador > 1) {
        result.textContent = "Sintax ERROR";
        pantalla.removeChild(segNum);
        pantalla.removeChild(firstNum);
    }

    else if (operacion == undefined) {
        result.textContent = primerNumero;
        pantalla.removeChild(firstNum);
        primerNumero = 0;
        segundoNumero = 0;
        contadorResultado++;

    }
    else {
        result.textContent = `${resultado}`;
        contadorResultado++;

    }

    pantalla.removeChild(segNum);

}

const igual = document.querySelector('#igual');
igual.addEventListener('click', () => {
    if (contadorNumero < 1) {
    }
    else {
        operador()
    }
});

let activadorSegundo;
const sig = document.createElement('p');


function signos(operator) {
    operacion = `${operator}`
    sig.textContent = `${operator}`
    activadorSegundo = 'si';

    pantalla.appendChild(sig);
    pantalla.removeChild(firstNum);
}

const suma = document.querySelector('#suma');
suma.addEventListener('click', () => {
    if (contadorNumero < 1) {

    }
    else {
        signos(`+`)
    }
});

const resta = document.querySelector('#resta');
resta.addEventListener('click', () => {
    if (contadorNumero < 1) {

    }
    else {
        signos(`-`)
    }
});


const multiplicacion = document.querySelector('#mult');
multiplicacion.addEventListener('click', () => {
    if (contadorNumero < 1) {

    }
    else {
        signos(`x`)
    }
});


const division = document.querySelector('#divi');
division.addEventListener('click', () => {
    if (contadorNumero < 1) {

    }
    else {
        signos(`/`)
    }
});

let primerContador = 0;
let segundoContador = 0;
function deci(numero) {
    if (activadorSegundo == "si") {
        segundoNumero += `${numero}`;
        segNum.textContent += `${numero}`;
        segundoContador++;
    }
    else {
        primerNumero += `${numero}`;
        firstNum.textContent += `${numero}`;
        primerContador++;
    }
}
const decimal = document.querySelector('#decimal');
decimal.addEventListener('click', () => { deci(".") });

const clear = document.querySelector('#clear');
clear.addEventListener('click', () => {
    location.reload()
})
