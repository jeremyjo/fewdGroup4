const slides = document.querySelector(".slider-items").children;

const slideItems = document.querySelector(".slider-items");

const prev = document.querySelector(".prevS");
const next = document.querySelector(".nextS");

// console.log(next);

const totalSlides = slides.length;
let index = 0;
const duration = 6000;

prev.onclick = function () {
  slide("prevS");
};

next.onclick = function () {
  slide("nextS");
};

function slide(direction) {
  progress();
  //   console.log(direction);
  if (direction == "nextS") {
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

  if (direction == "prevS") {
    if (index == 0) {
      index = totalSlides - 1;
    } else {
      index--;
    }
  }
  //   console.log(index);

  // stoppes auto slide when user clicks
  clearInterval(timer);

  //starting auto slider again

  timer = setInterval(autoSlide, duration);

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
  document.querySelector(".numberS").innerHTML = index + 1 + "/" + totalSlides;
  document.querySelector(".innerS").style.width = (index + 1) * width + "%";
}

//next slide progress meter

function progress() {
  document.querySelector(".progressSlide").innerHTML = "";
  const div = document.createElement("div");

  div.style.width = "0px";
  div.style.position = "absolute";
  div.style.left = "0";
  div.style.top = "0";
  div.style.backgroundColor = "#a1a9fe";
  div.style.height = "5px";
  div.id = "progressSlide";
  div.style.animation = "progressSlide " + duration / 1000 + "s linear";
  document.querySelector(".progressSlide").appendChild(div);
}
// auto slide
function autoSlide() {
  slide("nextS");
}
let timer = setInterval(autoSlide, duration);

slideInfo();
progress();
