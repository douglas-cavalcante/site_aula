const input = document.getElementById("senha");
const aviso = document.getElementById("aviso");
input.addEventListener("keydown", function (e) {
  if (e.getModifierState && e.getModifierState("CapsLock")) {
    aviso.textContent = "Caps Lock Ativado!";
  } else {
    aviso.textContent = "";
  }
});
