function footer(el) {
  const componentEl = document.createElement("footer");
  componentEl.innerHTML = `
  <div class="footer">
      <img class="footer__logo" src="./assets/donut.svg" alt="donut logo" />
      <div class="footer__social-container">
        <a href="#" class="footer__social"
          >Instagram
          <img
            class="footer__social-img"
            src="./assets/instagram.svg"
            alt="instagram logo"
        /></a>
        <a href="#" class="footer__social"
          >Linkedin
          <img
            class="footer__social-img"
            src="./assets/linkedin.svg"
            alt="linkedin logo"
        /></a>
        <a href="#" class="footer__social"
          >Github
          <img
            class="footer__social-img"
            src="./assets/github.svg"
            alt="github logo"
        /></a>
      </div>
    </div>
  `;
  el.appendChild(componentEl);
}
