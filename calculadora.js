let resultado;
let operacion;
function add(a, b) {

    resultado = a + b;
    return resultado;
}
function rest(a, b) {

    resultado = a - b;
    return resultado;
}
function mult(a, b) {
    resultado = a * b;
    return resultado;
}
function divi(a, b) {
    resultado = a / b;
    return resultado;
}

function operador(a, b) {
    if (operacion == "sum") {
        add(a, b);
    }
    else if (operacion == "rest") {
        rest(a, b);
    }
    else if (operacion == "mult") {
        mult(a, b);
    }
    else if (operacion == "divi") {
        divi(a, b);
    }
    console.log(operacion)
}
const pantalla = document.querySelector('#screen');

let display = '';

function addNumero(numero) {
    display += `${numero}`;
    console.log(display);
    const num = document.createElement('p');
    num.textContent = `${numero}`
    pantalla.appendChild(num);

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

const decimal = document.querySelector('#decimal');
decimal.addEventListener('click', () => { addNumero(".") });

function signos(operator) {

    operacion = `${operator}`
    console.log(operacion);
    console.log(a);
}
const suma = document.querySelector('#suma');
suma.addEventListener('click', () => { signos(`sum`) })

const resta = document.querySelector('#resta');
resta.addEventListener('click', () => { signos(`rest`) })

const multiplicacion = document.querySelector('#mult');
multiplicacion.addEventListener('click', () => { signos(`mult`) })

const division = document.querySelector('#divi');
division.addEventListener('click', () => { signos(`divi`) })

const igual = document.querySelector('#igual');
igual.addEventListener('click', () => { operador() });