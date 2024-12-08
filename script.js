let caixa = document.getElementById("caixa_presente");
let caixa_comp = document.getElementById("caixa_comp");
let container_caixa = document.getElementById("container_present");
let tampa = document.getElementById("tampa");
let caixa_baixo = document.getElementById("caixa");
let gif = document.getElementById("gif");
let texto = document.getElementsByTagName("h2")

caixa.classList.add("animacao");

caixa.addEventListener("click", () => {
  caixa.classList.remove("animacao");
  container_caixa.style.display = "flex";
  caixa_comp.style.display = "none";
  texto[0].style.display = "none";
  gif.style.display = "block";
  gif.style.animation = "gif 4s";
  tampa.style.animation = "abrir-tampa 2s";
  caixa_baixo.style.animation = "abrir-caixa 2s";
});
