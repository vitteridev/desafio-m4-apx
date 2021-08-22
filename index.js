function showaboutMeInfo(object = {}) {
  const $divContent = document.querySelector(".about-me__results");
  const $template = document.querySelector("#about-me__template");
  const fragment = document.createDocumentFragment();

  $template.content.querySelector(".about-me__title").textContent =
    object.title;
  $template.content.querySelector(".about-me__info").textContent =
    object.paragraph;
  $template.content.querySelector(".about-me__img").src = object.link;

  const clone = document.importNode($template.content, true);
  fragment.appendChild(clone);
  $divContent.appendChild(fragment);
}
function getAbouMeInfo() {
  return fetch(
    "https://cdn.contentful.com/spaces/phnizhvstb09/environments/master/entries?access_token=ltGCEIoBJUsndZf8YOYbC4nSDhqbrkCiAJVZmkAbhtw&content_type=author"
  )
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      const obj = {
        title: data.items[0].fields.titlePhoto,
        paragraph: data.items[0].fields.profileDescription,
        link: `//${data.includes.Asset[0].fields.file.url}`,
      };
      return obj;
    });
}

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
  fetch(
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
  const contactContainer = document.querySelector(".contact-index");
  header(headerContainer);
  contact(contactContainer);
  footer(footerContainer);

  getAbouMeInfo().then((item) => {
    showaboutMeInfo(item);
  });

  getServicesInfo().then((item) => {
    showServicesInfo(item);
  });
})();
