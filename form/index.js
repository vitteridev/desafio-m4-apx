function sendInfo(formEl) {
  const formData = new FormData(formEl.target);
  const objeto = Object.fromEntries(formData.entries());
  const messageContact = {
    to: "vitteridev@gmail.com",
    message: `email: ${objeto.email},
        nombre: ${objeto.name}, 
        mensaje: ${objeto.message}`,
  };

  let url = "https://apx-api.vercel.app/api/utils/dwf";

  fetch(url, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(messageContact),
  })
    .then((res) => res.json())
    .catch((error) => console.error("error: " + error))
    .then((send) => console.log(send));
}
function clear(formEl) {
  const form = formEl.target;
  const name = form.name;
  const email = form.email;
  const message = form.message;
  name.value = "";
  email.value = "";
  message.value = "";
}
function contact(el) {
  const componentEl = document.createElement("div");
  componentEl.innerHTML = `
  <section class="contacto">
      <h2 class="contacto__title">Contacto</h2>
      <form class="contacto__form">
        <label>
          <h3 class="contacto__label">NOMBRE</h3>
          <input class="contacto__input" name="name" type="text" />
        </label>
        <label>
          <h3 class="contacto__label">EMAIL</h3>
          <input class="contacto__input" name="email" type="email" />
        </label>
        <label>
          <h3 class="contacto__label">MENSAJE</h3>
          <textarea class="contacto__input contacto__input-msj" name="message"></textarea>
        </label>
        <div class="contacto__submit-cont">
          <button class="contacto__submit-btn">Enviar</button>
        </div>
      </form>
    </section>
  `;
  el.appendChild(componentEl);

  const formEl = componentEl.querySelector(".contacto__form");
  formEl.addEventListener("submit", function (e) {
    e.preventDefault();
    sendInfo(e);
    clear(e);
    alert("Mensaje enviado con exito!");
  });
}
