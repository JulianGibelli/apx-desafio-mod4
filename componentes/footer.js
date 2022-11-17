function renderizarFooter(dondeRenderizo) {
  const nuevoContainer = document.createElement("div");

  nuevoContainer.innerHTML = `    
    <footer class="footer">
        <div class="footer-icon-container">
            <a target="_blank" href="https://github.com/JulianGibelli" title="Github" ><i class="fa-brands fa-square-github fa-2xl"></i></a>
            <a target="_blank" href="https://www.linkedin.com/in/julian-gibelli-41189a177/" title="Linkedin" ><i class="fa-brands fa-linkedin fa-2xl"></i></a>
        </div>
    </footer>
    `;
  dondeRenderizo.appendChild(nuevoContainer);
}
