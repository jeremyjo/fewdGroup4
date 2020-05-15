const slides = document.querySelector(".slider-items").children;

const slideItems = document.querySelector(".slider-items");

const prev = document.querySelector(".prev");
const next = document.querySelector(".next");

// console.log(next);

const totalSlides = slides.length;
let index = 0;
const duration = 6000;

prev.onclick = function () {
  slide("prev");
};

next.onclick = function () {
  slide("next");
};

function slide(direction) {
  progress();
  //   console.log(direction);
  if (direction == "next") {
    if (index == totalSlides - 1) {
      //if index is equal to totalSlides
      //then index =0
      index = 0;
    } else {
      //if index is not equal to totalSlides length then  index++
      index++;
    }
  }
  //   console.log(index);
  //   console.log(totalSlides - 1 + " total-slides:");
  //totalSlides starting from 0; 0-1-2 slides

  if (direction == "prev") {
    if (index == 0) {
      index = totalSlides - 1;
    } else {
      index--;
    }
  }
  //   console.log(index);

  for (let i = 0; i < slides.length; i++) {
    slides[i].classList.remove("active");
    //removes active class from all slides
  }
  slides[index].classList.add("active");
  slideInfo();
}

let width = 100 / totalSlides;
// console.log(width);

//slide info
function slideInfo() {
  document.querySelector(".number").innerHTML = index + 1 + "/" + totalSlides;
  document.querySelector(".inner").style.width = (index + 1) * width + "%";
}

//next slide progress meter

function progress() {
  document.querySelector(".progress").innerHTML = "";
  const div = document.createElement("div");

  div.style.width = "0px";
  div.style.position = "absolute";
  div.style.left = "0";
  div.style.top = "0";
  div.style.backgroundColor = "#a1a9fe";
  div.style.height = "5px";
  div.id = "progress";
  div.style.animation = "progress " + duration / 1000 + "s linear";
  document.querySelector(".progress").appendChild(div);
}
// auto slide
function autoSlide() {
  slide("next");
}
const timer = setInterval(autoSlide, duration);

slideInfo();
progress();
