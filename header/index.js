function togle() {
  const $abreVentana = document.querySelector(".nav__icon-open");
  const $cerrarVentana = document.querySelector(".nav__icon-close");
  const ventanaEl = document.querySelector(".nav__menu");
  $abreVentana.addEventListener("click", function () {
    ventanaEl.style.display = "initial";
  });
  $cerrarVentana.addEventListener("click", () => {
    // hereda el valor anterior al poner comillas vacias
    ventanaEl.style.display = "";
  });
}

function header(el) {
  const componentEl = document.createElement("nav");
  componentEl.innerHTML = `
  <div class="nav">
    <a href="./index.html">
      <img src="./assets/donut.svg" alt="donut logo" class="nav__logo" />
    </a>
    <div class="nav__icon-menu">
      <div class="nav__icon-open">
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div class="nav__menu">
        <div class="nav__icon">
          <span class="nav__icon-close">x</span>
        </div>
        <div class="nav__menu-content">
        <a class="nav__menu-item" href="../portfolio.html">Portfolio</a>
        <a class="nav__menu-item" href="../servicios.html">Servicios</a>
        <a class="nav__menu-item" href="../formulario.html">Contacto</a>
        </div>
        </div>
        </div>
        <div class="nav__items-container">
        <a class="nav__item" href="../portfolio.html">Portfolio</a>
        <a class="nav__item" href="../servicios.html">Servicios</a>
        <a class="nav__item" href="../formulario.html">Contacto</a>
        </div>
  </div>
  `;
  el.appendChild(componentEl);
  togle();
}
