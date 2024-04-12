function playSonido(idElementoAudio){
    document.querySelector(idElementoAudio).play();
}
//document.querySelectorAll('') nos devuelve un array o lista de todos los elementos que coincidan con el selector.

const listaDeTeclas = document.querySelectorAll('.tecla');

let contador = 0

// cararcteristicas del ciclo while(condiciones) {bloque} 

while(contador < 9){    
    
    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    //console.log(instrumento);

    const idAudio = `#sonido_${instrumento}`
    console.log(idAudio);

    tecla.onclick = function(){
        playSonido(idAudio);
    } ;
    contador = contador + 1
    
}





