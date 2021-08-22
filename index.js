function showaboutMeInfo(object = {}) {
  const $divContent = document.querySelector(".about-me__results");
  const $template = document.querySelector("#about-me__template");

  $template.content.querySelector(".about-me__title").textContent =
    object.title;
  $template.content.querySelector(".about-me__info").textContent =
    object.paragraph;
  $template.content.querySelector(".about-me__img").src = object.image;

  const clone = document.importNode($template.content, true);
  $divContent.appendChild(clone);
}
function getAbouMeInfo() {
  return fetch(
    "https://cdn.contentful.com/spaces/phnizhvstb09/environments/master/entries?access_token=ltGCEIoBJUsndZf8YOYbC4nSDhqbrkCiAJVZmkAbhtw&content_type=author"
  )
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      console.log(data.includes.Asset[0].fields.file.url);
      const obj = {
        title: data.items[0].fields.titlePhoto,
        paragraph: data.items[0].fields.profileDescription,
        image: "https:" + data.includes.Asset[0].fields.file.url,
      };
      return obj;
    });
}

(function () {
  const headerContainer = document.querySelector(".header-index");
  const footerContainer = document.querySelector(".footer-index");
  const contactContainer = document.querySelector(".contact-index");
  header(headerContainer);
  contact(contactContainer);
  footer(footerContainer);

  getAbouMeInfo().then((obj) => {
    showaboutMeInfo(obj);
  });
})();
