let button = document.getElementById("change-language-button");
let isDanish = true;

button.onclick = () => {
  isDanish = !isDanish;
  updateAddress();
};

let knowledgeText = document.querySelector(".knowledge-text");
let someKnowledgeText = document.querySelector(".some-knowledge-text");

let description = document.querySelector(".description");
let aboutMeText = document.querySelector(".about-text");
let workText = document.querySelector(".work-text");
let workTitle = document.querySelector(".work-title");
let workValue1 = document.querySelector(".work-value-1");
let workValue2 = document.querySelector(".work-value-2");
let workValue3 = document.querySelector(".work-value-3");
let educationText = document.querySelector(".education-text");
let education1University = document.querySelector(".university-1");
let education1Title = document.querySelector(".education-1-title");
let education1Status = document.querySelector(".education-status");
let education1Value1 = document.querySelector(".education-1-value-1");
let education1Value2 = document.querySelector(".education-1-value-2");
let education2University = document.querySelector(".university-2");
let education2Title = document.querySelector(".education-2-title");
let education2Value1 = document.querySelector(".education-2-value-1");
let education2Value2 = document.querySelector(".education-2-value-2");
let education2Value3 = document.querySelector(".education-2-value-3");

const updateAddress = () => {
  if (isDanish) {
    knowledgeText.innerHTML = "Jeg har arbejdet med";
    someKnowledgeText.innerHTML = "Jeg har arbejdet lidt med";

    description.innerHTML =
      "Som en passioneret softwareudvikler er jeg drevet af at løse komplekse problemer og forbedre mine evner. \
      Min positive energi og interesse for software supplerer min tekniske dygtighed både professionelt og i min fritid. \
      når jeg udforsker nye programmeringsprojekter";
    aboutMeText.innerHTML = "Om mig";
    workText.innerHTML = "Arbejdserfaring";
    workTitle.innerHTML = "3. Nøglebærer - Fuldtid";
    workValue1.innerHTML = "Arbejde sammen for et fælles mål";
    workValue2.innerHTML = "At løse problemer under pres";
    workValue3.innerHTML = "Ansvar for oplæring af nye medarbejdere";
    educationText.innerHTML = "Uddannelse";
    education1University.innerHTML = "Universitet";
    education1Title.innerHTML = "Kandidat i Datalogi";
    education1Status.innerHTML = "(afbrudt)";
    education1Value1.innerHTML = "Funktionel programmering";
    education1Value2.innerHTML = "Data varehuse";
    education2University.innerHTML = "Universitet";
    education2Title.innerHTML = "Bachelor i Datalogi";
    education2Value1.innerHTML = "Imperativ og Objektorienteret programmering";
    education2Value2.innerHTML = "Web programmering";
    education2Value3.innerHTML = "Database design og modellering";
    button.innerHTML = "<img class='language-icon' src='public/dk.svg'>";
  } else {
    knowledgeText.innerHTML = "I have worked with";
    someKnowledgeText.innerHTML = "I have worked a little with";

    description.innerHTML =
      "As a passionate software developer, I am driven to solve complex problems and improve my skills. \
      My positive energy and interest in software complements my technical proficiency, \
      both professionally and in my free time as I explore new programming projects.";
    aboutMeText.innerHTML = "About me";
    workText.innerHTML = "Work Experience";
    workTitle.innerHTML = "3. Key Carrier - Full time";
    workValue1.innerHTML = "Work together for a common goal";
    workValue2.innerHTML = "Solving problems under pressure";
    workValue3.innerHTML = "Responsible for training new employees";
    educationText.innerHTML = "Education";
    education1University.innerHTML = "University";
    education1Title.innerHTML = "Master's degree in Computer Science";
    education1Status.innerHTML = "(not completed)";
    education1Value1.innerHTML = "Functional programming";
    education1Value2.innerHTML = "Data warehouses";
    education2University.innerHTML = "University";
    education2Title.innerHTML = "Bachelor's degree in Computer Science";
    education2Value1.innerHTML = "Imperative og Objectoriented programming";
    education2Value2.innerHTML = "Web programming";
    education2Value3.innerHTML = "Database design and modelling";
    button.innerHTML = "<img class='language-icon' src='public/gb.svg'>";
  }
};

updateAddress();
