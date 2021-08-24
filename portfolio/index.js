function showPortfolioInfo(object = {}) {
  const $divContent = document.querySelector(".portfolio__results");
  const $template = document.querySelector("#portfolio__template");
  const fragment = document.createDocumentFragment();

  $template.content.querySelector(".portfolio__img").src = object.image;
  $template.content.querySelector(".portfolio__item-title").textContent =
    object.title;
  $template.content.querySelector(".portfolio__item-paragraph").textContent =
    object.paragraph;
  $template.content.querySelector(".portfolio__item-link").href = object.link;

  const clone = document.importNode($template.content, true);
  fragment.appendChild(clone);
  $divContent.appendChild(fragment);
}
function getPortfolioInfo() {
  return fetch(
    "https://cdn.contentful.com/spaces/phnizhvstb09/environments/master/entries?access_token=ltGCEIoBJUsndZf8YOYbC4nSDhqbrkCiAJVZmkAbhtw&content_type=portfolio"
  )
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      const arrayObj = data.items.map((e) => {
        const obj = {
          image: `https:${data.includes.Asset[0].fields.file.url}`,
          title: e.fields.portfolioTitle,
          paragraph: e.fields.portfolioParagraph,
          link: e.fields.portfolioLink,
        };
        return obj;
      });
      return arrayObj;
    });
}
(function () {
  const headerContainer = document.querySelector(".header-index");
  const footerContainer = document.querySelector(".footer-index");
  header(headerContainer);
  footer(footerContainer);

  getPortfolioInfo().then((item) => {
    for (const i of item) {
      showPortfolioInfo(i);
    }
  });
})();
