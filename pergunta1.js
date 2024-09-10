document.addEventListener("DOMContentLoaded", function () {
    const noButton = document.querySelector("#no");
    const card = document.querySelector("#card");
    const question = document.querySelector("#question");
    const message = document.querySelector("#answer");

    // Exibir a mensagem caso seja selecionado o 'Sim'
    document.querySelector("#yes").addEventListener("click", function () {
        card.style.backgroundImage =
            "url('https://img1.picmix.com/output/stamp/normal/5/1/0/1/1171015_f458c.gif')";
        question.style.display = "none";
        message.style.display = "flex";

        // Aguarda 7 segundos antes de redirecionar para outra página
        setTimeout(function () {
            window.location.href = "index.html"; // Substitua "outra_pagina.html" pelo URL ou caminho da página desejada
        }, 3000);
    });

    // Movimento aleatório do botão 'Não'
    noButton.addEventListener("mouseover", function () {
        let width = window.innerWidth - noButton.offsetWidth;
        let height = window.innerHeight - noButton.offsetHeight;

        this.style.position = "absolute";
        this.style.top = Math.random() * height + "px";
        this.style.left = Math.random() * width + "px";
    });
});
