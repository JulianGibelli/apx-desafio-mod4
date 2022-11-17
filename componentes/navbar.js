function renderizarHeader(enDonde) {
  const nuevoContainer = document.createElement("div");
  nuevoContainer.innerHTML = `
    <nav>
    <ul class="nav-list">
        <li><i class="fa-sharp fa-solid fa-code fa-lg icono"></i><a href="./index.html">JulianGibelli</a></li>
        <li><a href="./portfolio.html" class="nav-list__link">Portfolio</a></li>
        <li><a href="#" class="nav-list__link">Servicios</a></li>
        <li><a href="./contacto.html" class="nav-list__link">Contacto</a></li>
        <li>

          <button class="hamburger-boton"><i class="fa-solid fa-bars hamburger"></i></button>

          <div class="ventana">
            <button class="cierra-ventana"><i class="fa-solid fa-xmark fa-lg"></i></button>
            <div class="ventana-contenido">
              <ul class="nav-list">
                <li><a href="./portfolio.html" class="nav-list__link">Portfolio</a></li>
                <li><a href="#" class="nav-list__link">Servicios</a></li>
                <li><a href="./contacto.html" class="nav-list__link">Contacto</a></li>
              </ul>
            </div>
          </div>

        </li>
    </ul>
</nav> 
    `;
  enDonde.appendChild(nuevoContainer);
}

function mostrarVentana(el,ven,links){
  el.addEventListener("click",()=>{
    ven.style.display = "inherit"
    links.forEach(link => {
      link.style.display = "block"
    });
  })
}

function cierraVentana(el,ven,links){
  el.addEventListener("click",()=>{
    ven.style.display = ""
    links.forEach(link => {
      link.style.display = ""
    });
  })
}