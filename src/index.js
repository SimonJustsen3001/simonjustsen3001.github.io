import { gsap } from "gsap";

const wrapper = document.querySelector(".name-wrapper");
const firstNameWrapper = document.querySelector(".first-name");
const lastNameWrapper = document.querySelector(".last-name");
const firstName = "Simon";
const lastName = "Justsen";

let introText = document.querySelector(".intro-text");
gsap.from(introText, { opacity: 0, duration: 0.5, delay: 2 });

const showcaseFrontendWrapper = document.querySelector(
  ".showcase-frontend-technologies"
);

window.onload = function () {
  const stylesheet = document.styleSheets[0];

  const calculateGridSpacing = (gridWrapper, width, height) => {
    const iconSize = Math.floor(width / 3 - 30);
    let rule = `.icons { height: ${iconSize}px }`;
    stylesheet.insertRule(rule);
  };

  calculateGridSpacing(
    showcaseFrontendWrapper,
    showcaseFrontendWrapper.offsetWidth,
    showcaseFrontendWrapper.offsetHeight
  );
};

const createLetters = (name, wrapper) => {
  name.split("").forEach((letter) => {
    let letterDiv = document.createElement("div");
    letterDiv.innerHTML = letter;
    letterDiv.className = "rotating-name";
    wrapper.appendChild(letterDiv);
  });
};

const floatingLetters = () => {
  let letters = gsap.utils.toArray(".rotating-name");
  letters.forEach((letter) => {
    let timeline = gsap.timeline();
    let x1 = calculateRandomXValue();
    let x2 = calculateRandomXValue();

    let y1 = calculateRandomYValue();
    let y2 = calculateRandomYValue();

    timeline.add(
      gsap.to(letter, {
        duration: 0.5,
        y: y1,
        x: x1,
        rotateZ: 360,
      })
    );
    timeline.add(
      gsap.to(letter, {
        duration: 0.5,
        y: y2,
        x: x2,
        rotateZ: 0,
      })
    );
    timeline.add(
      gsap.to(letter, {
        duration: 0.7,
        y: 0,
        x: 0,
        rotateZ: 360,
        ease: "bounce.out",
      })
    );
  });
};

const calculateRandomXValue = () => {
  let randomX = Math.random() * 2 - 1;
  return Math.floor((randomX * wrapper.offsetWidth) / 2);
};

const calculateRandomYValue = () => {
  let randomY = Math.random() * 2 - 1;
  return Math.floor((randomY * wrapper.offsetHeight) / 2);
};

createLetters(firstName, firstNameWrapper);
createLetters(lastName, lastNameWrapper);
setTimeout(floatingLetters, 0);
