const card = document.getElementById("card");
card.addEventListener("mouseenter", function () {
  card.style.boxShadow = "0 0 10px 2px #00f";
});
card.addEventListener("mouseleave", function () {
  card.style.boxShadow = "";
});
