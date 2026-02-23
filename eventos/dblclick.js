const img = document.getElementById("imgDblClick");

function clique2vezes() {
  document.getElementById("imgDblClick").setAttribute("src", "123");
  alert("Imagem em Full Screen!");
}

img.addEventListener("dblclick", clique2vezes);
