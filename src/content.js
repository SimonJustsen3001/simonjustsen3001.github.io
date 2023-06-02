// let button = document.getElementById("change-language-button");
let isDanish = true;

// button.onclick = () => {
//   isDanish = !isDanish;
//   updateAddress();
// };

let description = document.querySelector(".description");
let aboutMeText = document.querySelector(".about-text");
let workText = document.querySelector(".work-text");
let workTitle = document.querySelector(".work-title");
let workValue1 = document.querySelector(".work-value-1");
let workValue2 = document.querySelector(".work-value-2");
let workValue3 = document.querySelector(".work-value-3");
let educationText = document.querySelector(".education-text");
let education1Title = document.querySelector(".education-1-title");
let educationStatus = document.querySelector(".education-status");
console.log(workText);

const updateAddress = () => {
  console.log("test");
  if (isDanish) {
    description.innerHTML =
      "Som en entusiastisk og positiv person, stræber jeg efter at bringe godt humør med hvorend jeg tager hen. \
      Min fritid bruger jeg som regel på programmeringsprojekter eller på mine venner.";
    aboutMeText.innerHTML = "Om mig";
    workText.innerHTML = "Arbejdserfaring";
    workTitle.innerHTML = "3. Nøglebærer - Fuldtid";
    workValue1.innerHTML = "Arbejde sammen for et fælles mål";
    workValue2.innerHTML = "At løse problemer under pres";
    workValue3.innerHTML = "Ansvar for oplæring af nye medarbejdere";
    educationText.innerHTML = "Uddannelse";
    education1Title.innerHTML = "Kandidat i datalogi";
    educationStatus.innerHTML = "(afbrudt)";
  } else {
    description.innerHTML = "address";
  }
};

updateAddress();
