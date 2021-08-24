function footer(el) {
  const componentEl = document.createElement("footer");
  componentEl.innerHTML = `
  <div class="footer">
      <img class="footer__logo" src="./assets/donut.svg" alt="donut logo" />
      <div class="footer__social-container">
        <a href="https://www.instagram.com/ju_vitteri/" class="footer__social"
          >Instagram
          <img
            class="footer__social-img"
            src="./assets/instagram.svg"
            alt="instagram logo"
        /></a>
        <a href="https://www.linkedin.com/in/junior-vitteri-077a3b1ab/" class="footer__social"
          >Linkedin
          <img
            class="footer__social-img"
            src="./assets/linkedin.svg"
            alt="linkedin logo"
        /></a>
        <a href="https://github.com/vitteridev" class="footer__social"
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
