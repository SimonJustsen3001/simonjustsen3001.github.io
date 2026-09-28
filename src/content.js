let button = document.getElementById("change-language-button");
let isDanish = true;
let content = null;

const setText = (selector, text) => {
  let element = document.querySelector(selector);
  if (element) {
    element.textContent = text;
  }
};

const createElement = (tag, className, text) => {
  let element = document.createElement(tag);
  element.className = className;
  element.textContent = text;
  return element;
};

const renderSkills = (selector, skills) => {
  let list = document.querySelector(selector);
  if (!list) return;
  list.replaceChildren();

  skills.forEach((skill) => {
    list.append(createElement("li", "skill", skill));
  });
};

const renderEntries = (selector, items) => {
  let list = document.querySelector(selector);
  if (!list) return;
  list.replaceChildren();

  items.forEach((item) => {
    let entry = createElement("div", "entry", "");

    let topRow = createElement("div", "title-year-wrapper", "");
    topRow.append(
      createElement("h4", "title", item.title),
      createElement("p", "title-year", item.year)
    );

    let bottomRow = createElement("div", "title-year-wrapper", "");
    bottomRow.append(createElement("p", "title-place", item.place));
    if (item.type) {
      bottomRow.append(createElement("p", "title-type", item.type));
    }

    entry.append(topRow, bottomRow);

    if (item.points && item.points.length > 0) {
      let points = createElement("ul", "title-points", "");
      item.points.forEach((point) => {
        points.append(createElement("li", "title-point", point));
      });
      entry.append(points);
    }

    list.append(entry);
  });
};

const updateAddress = () => {
  let language = isDanish ? content.da : content.en;

  setText(".knowledge-text", language.knowledgeText);
  setText(".some-knowledge-text", language.someKnowledgeText);
  renderSkills(".knowledge-list", language.knowledge);
  renderSkills(".some-knowledge-list", language.someKnowledge);
  setText(".name", language.name);
  setText(".about-text", language.aboutMe);
  setText(".description", language.description);
  setText(".work-text", language.workTitle);
  setText(".education-text", language.educationTitle);

  renderEntries(".work-list", language.work);
  renderEntries(".education-list", language.education);

  button.innerHTML = `<img class='language-icon' src='${language.flag}'>`;
};

button.onclick = () => {
  if (!content) return;
  isDanish = !isDanish;
  updateAddress();
};

fetch("src/content.json")
  .then((response) => response.json())
  .then((data) => {
    content = data;
    updateAddress();
  });
