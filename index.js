function main() {
  const headerEl = document.querySelector(".nav__container");
  renderizarHeader(headerEl);
  const footerEl = document.querySelector(".footer-container")
  renderizarFooter(footerEl)

  const abreVentanaEl = document.querySelector(".hamburger-boton")
  const ventana = document.querySelector(".ventana")
  const cierraVentanaEl = document.querySelector(".cierra-ventana")
  const navLinksEls = document.querySelectorAll(".nav-list__link")
  mostrarVentana(abreVentanaEl,ventana,navLinksEls)
  cierraVentana(cierraVentanaEl,ventana,navLinksEls)
}

main();
