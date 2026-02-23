const exemplos = [
  {
    nome: "submit",
    titulo: "Evento submit",
    descricao:
      "Disparado ao enviar um formulário. Permite validar ou impedir o envio padrão.",
    arquivo: "submit.html",
    codigo: `form.addEventListener('submit', function(event) {
  event.preventDefault();
  // ...
});`,
  },
  {
    nome: "mouseenter",
    titulo: "Evento mouseenter",
    descricao:
      "Detecta quando o mouse entra na área de um elemento, útil para efeitos visuais.",
    arquivo: "mouseenter.html",
    codigo: `element.addEventListener('mouseenter', function() {
  // ...
});`,
  },
  {
    nome: "input",
    titulo: "Evento input",
    descricao:
      "Disparado sempre que o valor de um campo muda, inclusive colando texto.",
    arquivo: "input.html",
    codigo: `input.addEventListener('input', function() {
  // ...
});`,
  },
  {
    nome: "focusout",
    titulo: "Evento focusout",
    descricao:
      "Ocorre quando um campo perde o foco, ideal para validação pós-interação.",
    arquivo: "focusout.html",
    codigo: `input.addEventListener('focusout', function() {
  // ...
});`,
  },
  {
    nome: "domcontentloaded",
    titulo: "Evento DOMContentLoaded",
    descricao:
      "Disparado quando o HTML foi processado e o DOM está pronto para manipulação.",
    arquivo: "domcontentloaded.html",
    codigo: `document.addEventListener('DOMContentLoaded', function() {
  // ...
});`,
  },
  {
    nome: "keydown",
    titulo: "Evento keydown",
    descricao:
      "Detecta pressionamento de tecla, útil para verificar modificadores como Caps Lock.",
    arquivo: "keydown.html",
    codigo: `input.addEventListener('keydown', function(e) {
  if (e.getModifierState('CapsLock')) {
    // ...
  }
});`,
  },
  {
    nome: "dblclick",
    titulo: "Evento dblclick",
    descricao: "Disparado ao clicar duas vezes rapidamente em um elemento.",
    arquivo: "dblclick.html",
    codigo: `element.addEventListener('dblclick', function() {
  // ...
});`,
  },
  {
    nome: "change",
    titulo: "Evento change",
    descricao: "Ocorre quando o valor de um campo muda e perde o foco.",
    arquivo: "change.html",
    codigo: `input.addEventListener('change', function() {
  // ...
});`,
  },
  {
    nome: "load",
    titulo: "Evento load",
    descricao:
      "Disparado quando todos os recursos da página (imagens, scripts) foram carregados.",
    arquivo: "load.html",
    codigo: `window.addEventListener('load', function() {
  // ...
});`,
  },
  {
    nome: "desabilitar_botao",
    titulo: "Evento click (Desabilitar Botão)",
    descricao:
      "Exemplo de desabilitar botão ao clicar para evitar envios duplicados.",
    arquivo: "desabilitar_botao.html",
    codigo: `btn.addEventListener('click', function() {
  btn.disabled = true;
  // ...
});`,
  },
];

const cardsContainer = document.querySelector(".cards");

exemplos.forEach((exemplo) => {
  const card = document.createElement("div");
  card.className = "card";
  card.innerHTML = `
    <h2>${exemplo.titulo}</h2>
    <p>${exemplo.descricao}</p>
    <pre><code>${exemplo.codigo}</code></pre>
    <a href="${exemplo.arquivo}" target="_blank">Abrir Exemplo</a>
  `;
  cardsContainer.appendChild(card);
});
