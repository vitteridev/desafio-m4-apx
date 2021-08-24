function showServicesInfo(object = {}) {
  const $divContent = document.querySelector(".services__results");
  const $template = document.querySelector("#services__template");
  const fragment = document.createDocumentFragment();

  $template.content.querySelector(".services__img").src = object.link;
  $template.content.querySelector(".services__item-title").textContent =
    object.title;
  $template.content.querySelector(".services__item-paragraph").textContent =
    object.paragraph;

  const clone = document.importNode($template.content, true);
  fragment.appendChild(clone);
  $divContent.appendChild(fragment);
}

function findInIncludes(assetId, includes) {
  const match = includes.find((inc) => {
    return inc.sys.id == assetId;
  });
  return match;
}

function getServicesInfo() {
  return fetch(
    "https://cdn.contentful.com/spaces/phnizhvstb09/environments/master/entries?access_token=ltGCEIoBJUsndZf8YOYbC4nSDhqbrkCiAJVZmkAbhtw&content_type=services"
  )
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      const arrayObj = data.items.map((e) => {
        const obj = {
          title: e.fields.serviceTitle,
          paragraph: e.fields.serviceParagraph,
          imageID: e.fields.serviceImage.sys.id,
          include: data.includes.Asset,
        };
        return obj;
      });
      arrayObj.forEach((i) => {
        const matchID = findInIncludes(i.imageID, i.include);
        i.link = `${matchID.fields.file.url}`;
      });
      return arrayObj;
    });
}
(function () {
  const headerContainer = document.querySelector(".header-index");
  const footerContainer = document.querySelector(".footer-index");
  header(headerContainer);
  footer(footerContainer);

  getServicesInfo().then((item) => {
    for (const i of item) {
      showServicesInfo(i);
    }
  });
})();
