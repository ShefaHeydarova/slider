let slide = document.querySelectorAll(".slide");
let pass =  document.querySelectorAll(".pass");
let slideNumber = 0;

let nextIcon = document.querySelector(".next");
let lastIcon = document.querySelector(".last");

let line = document.querySelector(".line");
let a = 0;

nextIcon.addEventListener("click", () => {
  nextSlide(); 
  a = 0;
});

lastIcon.addEventListener("click", () => {
  lastSlide();
  a = 0;
});

function updateSlide() {
  for (let item of slide) {
    item.classList.remove("active");
    item.classList.add("slide-hidden");
  }

  slide[slideNumber].classList.add("active");

  for (let item of pass) {
    item.classList.remove("circle-active");
    item.classList.add("pass-clear");
  }
  pass[slideNumber].classList.add("circle-active");
}

function nextSlide() {
  if (slideNumber == slide.length - 1) {
    slideNumber = 0;
  } else {
    slideNumber++;
  }
  updateSlide();
}

function lastSlide() {
  if (slideNumber == 0) {
    slideNumber = slide.length - 1;
  } else {
    slideNumber--;
  }
  updateSlide();
}

function lineMove() {
  a +=10;
  line.style.width = a + "%";

  if (a == 100) {
    a = 0;
    nextSlide();
  }
}

setInterval(lineMove, 400);
