//  adicionarEventoTecla('.tecla_pom', '#som_tecla_pom');
//  adicionarEventoTecla('.tecla_clap', '#som_tecla_clap');
//  adicionarEventoTecla('.tecla_tim', '#som_tecla_tim');
//  adicionarEventoTecla('.tecla_puff', '#som_tecla_puff');
//  adicionarEventoTecla('.tecla_splash', '#som_tecla_splash');
//  adicionarEventoTecla('.tecla_toim', '#som_tecla_toim');
//  adicionarEventoTecla('.tecla_psh', '#som_tecla_psh');
//  adicionarEventoTecla('.tecla_tic', '#som_tecla_tic');
//  adicionarEventoTecla('.tecla_tom', '#som_tecla_tom');
//  
//  function tocarSom(som) {
//      document.querySelector(som).play();
//  }
//  
//  function adicionarEventoTecla(seletorTecla, seletorSom) {
//      const tecla = document.querySelector(seletorTecla);
//      tecla.addEventListener('click', () => tocarSom(seletorSom))
//  }

const listaDeTeclas = document.querySelectorAll('.tecla');

listaDeTeclas[0].onclick = tocaSomPom;

function tocaSomPom() {
    document.querySelector('#som_tecla_pom').play();
}