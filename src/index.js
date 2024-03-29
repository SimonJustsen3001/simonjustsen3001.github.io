import { gsap } from "gsap";

const wrapper = document.querySelector(".name-wrapper");
const firstNameWrapper = document.querySelector(".first-name");
const lastNameWrapper = document.querySelector(".last-name");
const firstName = "Simon";
const lastName = "Justsen";

const introText = document.querySelector(".intro-text");

const aboutMeWrapper = document.querySelector(".about-me-wrapper");
const wave = document.querySelector(".wave");

let mediaQuery = window.matchMedia("(max-width: 480px)");
console.log(mediaQuery);

let tlWave = gsap
  .timeline({ repeat: 1 })
  .add(gsap.to(wave, { duration: 0.3, rotateZ: -60 }))
  .add(gsap.to(wave, { duration: 0.3, rotateZ: -15 }));

let tlRepeatWave = gsap
  .timeline({ repeat: -1, repeatDelay: 5 })
  .add(tlWave)
  .repeat(-1);

let tlFrontPage = gsap
  .timeline()
  .add(gsap.from(introText, { opacity: 0, duration: 0.5, delay: 2 }))
  .add(gsap.from(aboutMeWrapper, { opacity: 0, y: 40, duration: 0.5 }))
  .add(gsap.from(wave, { opacity: 0, duration: 0.5 }))
  .add(tlRepeatWave);

mediaQuery.addEventListener("change", (e) => {
  if (e.matches) {
    tlWave.pause();
    tlRepeatWave.pause();
  } else {
    tlWave.resume();
    tlRepeatWave.resume();
  }
});

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
