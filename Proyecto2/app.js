//lo definimos en una variable para saber bien a que elemento nos estamos refiriendo


//mas avanzado en las clases se ha eliminado la declaracion de variables
// y se realizo todo en una funcion para luego llamarlas en dos veces y achicar el codigo

//------------------------------------------------------
let numeroSecreto = 0;
let intentos = 0;

function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
};

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    console.log(intentos);
    if(numeroDeUsuario === numeroSecreto){
        asignarTextoElemento('p',`Acertaste el numero en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`); 
        //vamos a agregar codigo, se va a habilitar el boton desabilitado de nuevo juego, una vez
        //que el usuario acierte.
        document.getElementById('reiniciar').removeAttribute('disabled');   
    } 
    else{
        //esto es para cuando el usuario no acerto
        if(numeroDeUsuario > numeroSecreto){
            asignarTextoElemento('p', 'El numero secreto es menor');
        }
        else{
            asignarTextoElemento('p','El numero secreto es mayor');
        }
        intentos++;
        limpiarCaja();
    }
    return;
};
//aqui hemos creado una funcion que se utilizara para limpiar la caja de intentos
//y luego volveremos a llamar a la funcion en la parte del codigo donde esta lo que sucedera
// cuando el usuario no acierta.
function limpiarCaja(){
    document.querySelector('#valorUsuario').value = '';
};

function generarNumeroSecreto(){
    return Math.floor(Math.random()*10)+1;
};

function condicionesIniciales(){
    asignarTextoElemento('h1', 'Juego del numero secreto');
    asignarTextoElemento('p','Indica un numero del 1 al 10');
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
};

function reiniciarJuego(){
    //primero va a limpiar la caja
    limpiarCaja();
    //Indicar de nuevo el mensaje del inicio
    
    //generar un nuevo numero aleatorio
    
    //inicializar el numero de intentos
    condicionesIniciales();
    //dejar nuevamente el segundo boton desabilitado
    document.querySelector('#reiniciar').setAttribute('disabled','true');
    
};

condicionesIniciales();

