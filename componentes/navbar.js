function renderizarHeader(enDonde) {
  const nuevoContainer = document.createElement("div");
  nuevoContainer.innerHTML = `
    <nav>
    <ul class="nav-list">
        <li><i class="fa-sharp fa-solid fa-code fa-lg icono"></i><a href="#">JulianGibelli</a></li>
        <li><a href="#" class="nav-list__link">Portfolio</a></li>
        <li><a href="#" class="nav-list__link">Servicios</a></li>
        <li><a href="#" class="nav-list__link">Contacto</a></li>
        <li><a href="#"><i class="fa-solid fa-bars hamburger"></i></a></li>
    </ul>
</nav> 
    `;
  enDonde.appendChild(nuevoContainer);
}
