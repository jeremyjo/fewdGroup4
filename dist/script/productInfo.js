//colors shifts images

const colorChoicePI = document.querySelectorAll(".colorPI");
const productspi = document.querySelectorAll(".productPI");

function changeColor() {
  //   let primary = this.getAttribute("primary");
  let color = this.getAttribute("color");
  let productpi = document.querySelector(`.productPI[color="${color}"]`);
  //   let gradient = document.querySelector(`.gradient[color="${color}"]`);

  colorChoicePI.forEach((c) => c.classList.remove("activePI"));
  this.classList.add("activePI"); //color-buttons changes

  document.documentElement.style.setProperty;

  productspi.forEach((s) => s.classList.remove("showPI"));
  productpi.classList.add("showPI");

  //   gradients.forEach((g) => g.classList.remove("firstPI"));
  //   gradient.classList.add("firstPI");
}

colorChoicePI.forEach((c) => c.addEventListener("click", changeColor));

function teaCost() {
  num1 = document.getElementById("amountPI").value;
  num2 = 10;
  document.getElementById("totalPI").innerHTML = num1 * num2;
}
