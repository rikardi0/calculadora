const pantalla = document.querySelector('#screen');

const firstNum = document.createElement('p');
pantalla.appendChild(firstNum);
const segNum = document.createElement('p');
pantalla.appendChild(segNum);
const result = document.createElement('p');
pantalla.appendChild(result);
const sig = document.createElement('p');

let primerNumero = 0;
let segundoNumero = 0;
let contadorNumero = 0;


function addNumero(numero) {
    contadorNumero++;
    if (activadorSegundo == "si" || contadorIgual == "si") {
        segundoNumero += `${numero}`;
        segNum.textContent += `${numero}`;
        pantalla.removeChild(sig);
        

    }
    else if (activadorSegundo !== "si") {
        primerNumero += `${numero}`;
        firstNum.textContent += `${numero}`;
    }
};

let firstResultado;
let resultado;
let operacion;
function add() {
    let a = parseFloat(primerNumero);
    let b = parseFloat(segundoNumero);
    firstResultado = a + b;
    primerNumero = firstResultado.toFixed(0);

}
function rest() {
    firstResultado = primerNumero - segundoNumero;
    primerNumero = firstResultado.toFixed(0);

}
function mult() {
    firstResultado = primerNumero * segundoNumero;
    primerNumero = firstResultado.toFixed(0);

}
function divi() {
    firstResultado = primerNumero / segundoNumero;
    primerNumero = firstResultado.toFixed(3);
}
let contadorIgual;
function operador() {
    contadorIgual = "si";
    if (operacion == "+") {
        add();
    }
    else if (operacion == "-") {
        rest();
    }
    else if (operacion == "x") {
        mult();
    }
    else if (operacion == "/") {
        divi();
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
    }
    else {
        result.textContent = `${primerNumero}`;
        segundoNumero = 0;
        primerContador = 0;
        segundoContador = 0;
    }
    pantalla.removeChild(segNum);
}
let activadorSegundo = 0;
function signos(operator) {
    operacion = `${operator}`
    sig.textContent = `${operator}`
    activadorSegundo = "si";
    pantalla.appendChild(sig);
    pantalla.removeChild(firstNum);
   
}

let primerContador = 0;
let segundoContador = 0;
function deci(numero) {
    contadorNumero++;
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

const igual = document.querySelector('#igual');
igual.addEventListener('click', () => {
    if (contadorNumero < 1) {
    }
    else {
        operador()
    }
});

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

const clear = document.querySelector('#clear');
clear.addEventListener('click', () => {
    location.reload()
})
const decimal = document.querySelector('#decimal');
decimal.addEventListener('click', () => { deci(".") });
