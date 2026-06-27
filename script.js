document.addEventListener("DOMContentLoaded", function () {

  const botao = document.getElementById("entrar");
  const senha = document.getElementById("senha");
  const mensagem = document.getElementById("mensagem");

  botao.addEventListener("click", function () {

    if (senha.value.toLowerCase() === "saudade") {

      mensagem.innerText = "Acesso concedido... Memórias desbloqueadas.";

      setTimeout(() => {
        window.location.href = "https://foil-end-8b7.notion.site/2-O-38cc5fba4545805da359e4572dde1509";
      }, 1500);

    } else {
      mensagem.innerText = "Acesso negado. Tentativa registrada.";
    }

  });

});