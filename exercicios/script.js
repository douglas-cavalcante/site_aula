function calcular() {
  // Entrada
  var altura = Number(document.getElementById("altura").value);
  var peso = Number(document.getElementById("peso").value);

  // Processamento
  var resultado = peso / (altura * altura);

  //Saida

  /* 1 - forma - Colocar o id na container_principal
    document.getElementById("container_principal").append(resultado);
  */

  /* 2  forma - pegar pelo nome className
    console.log(document.getElementsByClassName("container_principal"));
    document.getElementsByClassName("container_principal")[0].append(resultado);
  */

  /*  3 forma - colocar o id no elemento ou selecionar pelo nome className,
  document.getElementById("container_principal").innerHTML += `
  <div class="teste"> 
       <img src="https://lh3.googleusercontent.com/a/ACg8ocKg3SX9GQ4pV0Rag_0m3kVdIq_AZ4hwkvU6MYjHlYv_qrBQiQ=s88-c-k-no-mo" />
       <p>123</p>
       <h1>teste</h1>
    </div>`;  
   */

  /* 4 Forma -  Exibir conteudo que estava escondido */
  document.getElementById("resultado").style.display = "flex";
  document.getElementById("resultado_imc").append(resultado);

  /* if (!altura) {
    document.getElementById("altura").style.borderColor = "red";
  }
*/
}
