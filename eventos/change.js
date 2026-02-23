/*

VARIACAO DO GETELEMENTBYID

var input = document.getElementById("inputChange");

input.addEventListener("change", function () {
  alert("Valor alterado!");
});

*/

function disparar() {
  alert("Disparou");
  document.getElementById("meu_texto").textContent = "meu texto";
}

document.getElementById("inputChange").addEventListener("change", disparar);
