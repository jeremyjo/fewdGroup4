const colorChoice = document.querySelectorAll(".color");
const products = document.querySelectorAll(".product");

function changeColor() {
  let primary = this.getAttribute("primary");
  let color = this.getAttribute("color");
  let product = document.querySelector(`.product[color="${color}"]`);
  let gradient = document.querySelector(`.gradient[color="${color}"]`);

  colorChoice.forEach((c) => c.classList.remove("active"));
  this.classList.add("active");

  document.documentElement.style.setProperty;

  products.forEach((s) => s.classList.remove("show"));
  product.classList.add("show");

  gradients.forEach((g) => g.classList.remove("first"));
  gradient.classList.add("first");
}

colorChoice.forEach((c) => c.addEventListener("click", changeColor));

function teaCost() {
  num1 = document.getElementById("amount").value;
  num2 = 12;
  document.getElementById("total").innerHTML = num1 * num2;
}
