// Exemplos de eventos JavaScript
// Cada função demonstra um evento diferente

// 1. Evento 'submit' do formulário
function exemploSubmit() {
  const form = document.createElement("form");
  form.innerHTML = '<input name="nome"><button type="submit">Enviar</button>';
  form.addEventListener("submit", function (event) {
    event.preventDefault();
    alert("Formulário enviado!");
  });
  document.body.appendChild(form);
}

// 2. Evento 'mouseenter' em um card
function exemploMouseEnter() {
  const card = document.createElement("div");
  card.textContent = "Passe o mouse aqui";
  card.style.border = "2px solid #ccc";
  card.style.padding = "20px";
  card.style.display = "inline-block";
  card.addEventListener("mouseenter", function () {
    card.style.boxShadow = "0 0 10px 2px #00f";
  });
  card.addEventListener("mouseleave", function () {
    card.style.boxShadow = "";
  });
  document.body.appendChild(card);
}

// 3. Evento 'input' em um campo
function exemploInput() {
  const input = document.createElement("input");
  input.placeholder = "Digite algo";
  input.addEventListener("input", function () {
    console.log("Valor atual:", input.value);
  });
  document.body.appendChild(input);
}

// 4. Evento 'focusout' para validação
function exemploFocusOut() {
  const input = document.createElement("input");
  input.placeholder = "Digite e clique fora";
  input.addEventListener("focusout", function () {
    alert("Validando campo...");
  });
  document.body.appendChild(input);
}

// 5. Evento 'DOMContentLoaded'
function exemploDOMContentLoaded() {
  document.addEventListener("DOMContentLoaded", function () {
    console.log("DOM carregado!");
  });
}

// 6. Evento 'keydown' para Caps Lock
function exemploKeyDown() {
  const input = document.createElement("input");
  input.type = "password";
  input.placeholder = "Senha";
  const aviso = document.createElement("span");
  input.addEventListener("keydown", function (e) {
    if (e.getModifierState && e.getModifierState("CapsLock")) {
      aviso.textContent = "Caps Lock Ativado!";
    } else {
      aviso.textContent = "";
    }
  });
  document.body.appendChild(input);
  document.body.appendChild(aviso);
}

// 7. Evento 'dblclick' em imagem
function exemploDblClick() {
  const img = document.createElement("img");
  img.src = "https://via.placeholder.com/100";
  img.alt = "Clique duas vezes";
  img.style.cursor = "pointer";
  img.addEventListener("dblclick", function () {
    alert("Imagem em Full Screen!");
  });
  document.body.appendChild(img);
}

// 8. Evento 'change' em input
function exemploChange() {
  const input = document.createElement("input");
  input.placeholder = "Mude o valor e saia";
  input.addEventListener("change", function () {
    alert("Valor alterado!");
  });
  document.body.appendChild(input);
}

// 9. Evento 'load' na janela
function exemploLoad() {
  window.addEventListener("load", function () {
    console.log("Página totalmente carregada!");
  });
}

// 10. Evento 'click' para desabilitar botão
function exemploDesabilitarBotao() {
  const btn = document.createElement("button");
  btn.textContent = "Enviar Pedido";
  btn.addEventListener("click", function () {
    btn.disabled = true;
    btn.textContent = "Enviando...";
    setTimeout(() => {
      btn.disabled = false;
      btn.textContent = "Enviar Pedido";
    }, 2000);
  });
  document.body.appendChild(btn);
}

// Para testar, chame as funções no console ou adicione chamadas no final do arquivo.
