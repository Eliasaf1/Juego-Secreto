let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numerosMaximos = 10;


//Funcion para asignar un elemento HTML 
function asignarElementoHTML(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

//Funcion para verificar el numero que ingresa el usuario con el que arroja la funcion "generarNumeroSecreto"
function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
        if (numeroDeUsuario === numeroSecreto) {
            asignarElementoHTML('p',`Bien hecho, el numero secreto es ${numeroSecreto}, lo adivinaste en ${intentos} ${intentos ===1 ? 'intento' : 'intentos'}`);

            //Habilitar el boton de nuevo juego
            document.getElementById('reiniciar').removeAttribute('disabled');

    //Si el usuario falla en adivinar el numero del juego
    } else {
        if (numeroDeUsuario < numeroSecreto)
            asignarElementoHTML('p',`El numero secreto es mayor a ${numeroDeUsuario}`);
        else 
            asignarElementoHTML('p',`El numero secreto es menor a ${numeroDeUsuario}`);
    }
    intentos++;
    limpiarCaja();

    return;
}
//esta funcion limpia la caja 
function limpiarCaja() {
    document.querySelector('#valorUsuario').value = '';
}
//funcion para los textos iniciales del juego
function condicionesIniciales(){
    asignarElementoHTML ('h1','Juego del numero secreto');
    asignarElementoHTML ('p', 'Ingresa un numero del 1 al 10');
    numeroSecreto = generarNumeroSecreto();
    intentos =1;

}

//Se genera un numero aleatorio entre el 1 y 10
function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*10)+1;

console.log(numeroGenerado);
console.log(listaNumerosSorteados);

//si ya sorteamos todos los numeros
    if (listaNumerosSorteados.length == numerosMaximos){
        asignarElementoHTML ('p', 'Ya se sortearon todos los numeros posibles');
    } else {

        //Si el numero generado esta incluido en la lista 
        if (listaNumerosSorteados.includes(numeroGenerado)) {
            return generarNumeroSecreto();
        } else {
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }    
}

function reiniciarJuego() {
    //Limpiar caja
    limpiarCaja();
    //mostar los mensajes del inicio del juego
    //Generar un nuevo numero
    //Reiniciar el numero de intentos
    condicionesIniciales();
    //Deshabilitar el boton de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled', 'true');
    
}
condicionesIniciales();

