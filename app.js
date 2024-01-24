let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;



function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    
    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento('p',`Acertaste el número en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        //El usuario no acertó.
        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento('p','El número secreto es menor');
        } else {
            asignarTextoElemento('p','El número secreto es mayor');
        }
        intentos++;
        limpiarCaja();
    }
    return;
}

function limpiarCaja() {
    document.querySelector('#valorUsuario').value = '';
}

function generarNumeroSecreto() {
    let numeroGenerado =  Math.floor(Math.random()*numeroMaximo)+1;

    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    //Si ya sorteamos todos los números
    if (listaNumerosSorteados.length == numeroMaximo) {
        asignarTextoElemento('p','Ya se sortearon todos los números posibles');
    } else {
        //Si el numero generado está incluido en la lista 
        if (listaNumerosSorteados.includes(numeroGenerado)) {
            return generarNumeroSecreto();
        } else {
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

function condicionesIniciales() {
    asignarTextoElemento('h1','Juego del número secreto!');
    asignarTextoElemento('p',`Indica un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
    console.log(numeroSecreto);
}

function reiniciarJuego() {
    //limpiar caja
    limpiarCaja();
    //Indicar mensaje de intervalo de números 
    //Generar el número aleatorio
    //Inicializar el número intentos
    condicionesIniciales();
    //Deshabilitar el botón de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled','true');
    
}

condicionesIniciales();
/*
//------------------DESAFIO: Hora de practica---------------------

//EJERCICIO 1
let listaGenerica = [];

//EJERCICIO 2
let lenguajesDeProgramacion = ['JavaScript', 'C', 'C++', 'Kotlin', 'Python'];
console.log(lenguajesDeProgramacion);

//EJERCICIO 3
['Java', 'Ruby', 'GoLang']; lenguajesDeProgramacion.push('Java', 'Ruby', 'GoLang');


//EJERCICIO 4
function programas() {
    return console.log(lenguajesDeProgramacion);
}
programas();

//EJERCICIO 5
function programasRevers() {
    let i = lenguajesDeProgramacion.reverse();
    return console.log(i);
}
programasRevers();

//EJERCICIO 6
let numerosLista = [5, 4, 5, 7, 8, 1, 3];
let suma = 0;
function promedio() {
    for (i = 0; i < numerosLista.length; i++) {

        suma = suma + numerosLista[i];
        //console.log(numerosLista[i]);

    }
    console.log(`la suma es: ${suma / numerosLista.length}`);
}
promedio();


//EJERCICIO 7
let list = [4, 5, 6, 7];
function numMayor() {

    let min = Math.min(...list);
    let max = Math.max(...list);

    console.log(min);
    console.log(max);
}
numMayor();

//EJERCICIO 8
let suma2 = 0;
function listSuma() {
    for (i = 0; i < list.length; i++) {

        suma2 = suma2 + list[i];
    }

    console.log("La suma de la lista es: ", suma2);
}

listSuma();
//EJERCICIO 9
let pos = [5, 8, 3, 4, 15];
function posicion(n) {
    if (pos.includes(n)) {
        console.log(`La posicion del numero ${n} es: ` + pos.indexOf(n) + " En la lista");
    } else {
        console.log('-1')
    }
}

posicion(3);
//EJERCICIO 10
let arr = [5, 3, 8, 4, 22];
let arr2 = [64, 88, 4, 6, 3,];


function arrayList(array1, array2) {
    for (i = 0; i < array1.length; i++) {

        let suma = array1[i] + array2[i];
        console.log(`La suma de ${arr[i]} + ${arr2[i]} es: ${suma}`)
        //for(j=0;j<array2.length;j++){
        //}
    }
    return arr.map((suma,))
}

arrayList(arr, arr2);
//EJERCICIO 11*/