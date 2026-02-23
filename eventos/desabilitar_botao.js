const btn = document.getElementById("btnPedido");
btn.addEventListener("click", function () {
  btn.disabled = true;
  btn.textContent = "Enviando...";
  setTimeout(() => {
    btn.disabled = false;
    btn.textContent = "Enviar Pedido";
  }, 2000);
});
