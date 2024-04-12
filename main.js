function playSonido(idElementoAudio) {
  document.querySelector(idElementoAudio).play();
}
//document.querySelectorAll('') nos devuelve un array o lista de todos los elementos que coincidan con el selector.

const listaDeTeclas = document.querySelectorAll(".tecla");

for (let contador = 0; contador < listaDeTeclas.length; contador++) {
  const tecla = listaDeTeclas[contador];
  const instrumento = tecla.classList[1];
  //console.log(contador);
  const idAudio = `#sonido_${instrumento}`;
  //console.log(idAudio);

  tecla.onclick = function () {
    playSonido(idAudio);
  };
  tecla.onkeydown = function (evento) {
    if (evento.code === "Space" || evento.code === "Enter") {
      tecla.classList.add("activa");
    }
    console.log(evento.code === "Space" || evento.code === "Enter");
    
    tecla.onkeyup = function () {
      tecla.classList.remove("activa");
    };
  };
}
