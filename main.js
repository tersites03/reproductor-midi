function playSonido(idElementoAudio){
    document.querySelector(idElementoAudio).play();
}
//document.querySelectorAll('') nos devuelve un array o lista de todos los elementos que coincidan con el selector.

const listaDeTeclas = document.querySelectorAll('.tecla');

let contador = 0

// cararcteristicas del ciclo while(condiciones) {bloque} 

while(contador < 9){
    listaDeTeclas[contador].onclick = playSonido;
    contador = contador + 1
    console.log('vuelta ' + contador);
}





