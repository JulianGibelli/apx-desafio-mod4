function main() {
  const headerEl = document.querySelector(".nav__container");
  renderizarHeader(headerEl);
  const footerEl = document.querySelector(".footer-container");
  renderizarFooter(footerEl);
  const abreVentanaEl = document.querySelector(".hamburger-boton")
  const ventana = document.querySelector(".ventana")
  const cierraVentanaEl = document.querySelector(".cierra-ventana")
  const navLinksEls = document.querySelectorAll(".nav-list__link")
  mostrarVentana(abreVentanaEl,ventana,navLinksEls)
  cierraVentana(cierraVentanaEl,ventana,navLinksEls)

  let imagenes = [];
  let i = 0;

  fetch(
    "https://cdn.contentful.com/spaces/jb1r9afsbuas/environments/master/entries?access_token=Bp07sEm8Gzhbq3GlrGE6fe42u3hfARsJMEFkhMNLmwU"
  ).then(function (res) {
    res.json()
    .then(function (json) {
      json.includes.Asset.forEach((elemento) => {
        console.log(elemento.fields.file["url"]);
        imagenes.push(elemento.fields.file["url"]);
      });
      //sacar hasta aca
      imagenes.reverse()
      console.log(imagenes)
      json.items.forEach((element) => {
        
        let titulo = element.fields.titulo;
        let descripcion = element.fields.descripcion;
        let url = element.fields.link;

        const template = document.querySelector("#templardo");
        template.innerHTML =`
        <div class="card">
            <img class="imagen" src="`+imagenes[i]+`">
            <h2 class="tituloPrincipal"><mark>`+titulo+`</mark></h2>
            <p>`+descripcion+`</p>
            <a target="_blank" href="`+url+`">Ver mas</a>
        </div>
        `;
        var contenedor = document.querySelector(".main-container")
        var clon = template.content.cloneNode(true);
        contenedor.appendChild(clon);
        i = i + 1;
      });
    });
  });  

}

main();
