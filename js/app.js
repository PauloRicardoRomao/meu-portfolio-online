function botaoMenu() {
    const topo = document.getElementById('topo1');
    const naveg = document.getElementById('navegacao');
    const botao = document.getElementById('button-menu');

    const displayTopo = getComputedStyle(topo).display; // Correção crucial
    const displayTamanho = window.visualViewport.width;

  if (displayTopo === 'block' && displayTamanho <= "576"){
      // Abre o menu
      topo.style.width = '80%';
      topo.style.height = '100%';
      naveg.style.display = 'block';
      topo.style.position = 'absolute';
      topo.style.left = "0";
      topo.style.top = "0";
      topo.style.display = "flex";
      botao.style.width = "100%";
      botao.style.height = "15%";
      topo.style.alignitems = "flex-start";
      topo.style.justifycontent = "space-around";
      console.log("Valor de displayTopo:", displayTamanho); // Para depuração
      console.warn("Valor de displayTopo inesperado:", displayTamanho);
  } else if (displayTopo === 'flex' && displayTamanho <= "576") {
      // Fecha o menu
      topo.style.width = '100%';
      topo.style.height = '25%';
      naveg.style.display = 'none';
      topo.style.removeProperty('position');
      topo.style.width = "100%";
      topo.style.height = "15%";
      topo.style.display = "block";
      botao.style.display = "block";
      botao.style.width = "30%";
      botao.style.height = "auto";
      topo.style.alignitems = "center";
      topo.style.justifycontent = "center";
  } else {
      console.log("Valor de displayTopo:", displayTopo); // Para depuração
      console.warn("Valor de displayTopo inesperado:", displayTopo);
  }
}

