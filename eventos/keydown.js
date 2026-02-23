const input = document.getElementById("senha");
const aviso = document.getElementById("aviso");

input.addEventListener("keydown", function (event) {
  if (event.getModifierState && event.getModifierState("CapsLock")) {
    aviso.textContent = "Caps Lock Ativado!";
  } else {
    aviso.textContent = "";
  }
});
