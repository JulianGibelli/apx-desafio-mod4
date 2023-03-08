(function main(){
  const headerEl = document.querySelector(".nav__container");
  renderizarHeader(headerEl);
  const footerEl = document.querySelector(".footer-container");
  renderizarFooter(footerEl);

  const abreVentanaEl = document.querySelector(".hamburger-boton");
  const ventana = document.querySelector(".ventana");
  const cierraVentanaEl = document.querySelector(".cierra-ventana");
  const navLinksEls = document.querySelectorAll(".nav-list__link");
  mostrarVentana(abreVentanaEl, ventana, navLinksEls);
  cierraVentana(cierraVentanaEl, ventana, navLinksEls);
})()


function formulario() {
  const url = "https://apx-api.vercel.app/api/utils/dwf";
  const valores2 = {};
  

  const miFormEl = document.querySelector(".form-container__fields");

  miFormEl.addEventListener("submit", (e) => {
    e.preventDefault();

    const data = new FormData(e.target); //convierto mi formulario en un FormData, una tupla
    const valores = Object.fromEntries(data.entries()); //extraigo llave-valor
    console.log(valores);
    valores2.to = "juligibelli@gmail.com";
    valores2.message = JSON.stringify(valores);
    if (valores != "") {
      fetch(url, {
        method: "POST", // or 'PUT'
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(valores2),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log("Success:", data);
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    } else {
      console.error("Formulario con problema...");
    }
  });
}

