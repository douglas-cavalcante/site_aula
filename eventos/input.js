const input = document.getElementById("inputExemplo");
// Cria o contador de caracteres
const contador = document.createElement("span");
contador.style.marginLeft = "10px";
contador.style.fontSize = "0.95em";
input.parentNode.insertBefore(contador, input.nextSibling);


input.addEventListener("input", function () {
  const valor = input.value;
  contador.textContent = valor.length + "/20";
  // Não altera a borda aqui
  console.log("Valor atual:", valor);
});

input.addEventListener("blur", function () {
  const valor = input.value;
  if (valor.length >= 20) {
    input.style.border = "2px solid red";
  } else {
    input.style.border = "";
  }
});
