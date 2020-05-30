//colors shifts images

const colorChoicePI = document.querySelectorAll(".colorPI");
const productspi = document.querySelectorAll(".productPI");

function changeColor() {
  let color = this.getAttribute("color");
  let productpi = document.querySelector(`.productPI[color="${color}"]`);

  colorChoicePI.forEach((c) => c.classList.remove("activePI"));
  this.classList.add("activePI"); //color-buttons changes

  document.documentElement.style.setProperty;

  productspi.forEach((s) => s.classList.remove("showPI"));
  productpi.classList.add("showPI");
}

colorChoicePI.forEach((c) => c.addEventListener("click", changeColor));

function teaCost() {
  num1 = document.getElementById("amountPI").value;
  num2 = 10;
  document.getElementById("totalPI").innerHTML = num1 * num2;
}
//prevent default behavior - no jump when you click on link
const defaultPI = document.querySelectorAll(".sharePI");

defaultPI[0].addEventListener("click", function (event) {
  event.preventDefault();
});

const defaultPIBUY = document.querySelectorAll(".buyPI");

defaultPIBUY[0].addEventListener("click", function (event) {
  event.preventDefault();
});
