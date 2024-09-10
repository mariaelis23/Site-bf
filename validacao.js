document.addEventListener('DOMContentLoaded', function () {
    const formulario = document.querySelector('.formulario-centralizado');
    const checkboxFlamengo = document.getElementById('checkboxFlamengo');

    formulario.addEventListener('submit', function (event) {
        // Prevenir o envio do formulário
        event.preventDefault();

        // Verificar as respostas
        const resposta1 = document.querySelector('input[name="genero1"]:checked')?.value;
        const resposta2 = document.querySelector('input[list="niver"]')?.value;
        const resposta3 = document.querySelector('select[name="Nome"]')?.value;
        const resposta4 = document.querySelector('input[name="genero2"]:checked')?.value;
        const resposta5 = document.querySelector('input[list="categorias"]')?.value;

        const respostasCorretas = {
            resposta1: "T", // Todas as opções
            resposta2: "Nenhuma das opções acima",
            resposta3: "segundo", // 24/08/24
            resposta4: "p", // Boiolinha
            resposta5: "Todas as opções"
        };

        if (
            resposta1 !== respostasCorretas.resposta1 ||
            resposta2 !== respostasCorretas.resposta2 ||
            resposta3 !== respostasCorretas.resposta3 ||
            resposta4 !== respostasCorretas.resposta4 ||
            resposta5 !== respostasCorretas.resposta5 ||
            !checkboxFlamengo.checked
        ) {
            alert('VOCÊ ERROU, PARECE QUE VOCÊ NÃO ME AMA NÉ?! :(');
            formulario.reset(); // Reseta o formulário
        } else {
            // Se todas as respostas estiverem corretas, o formulário é enviado
            window.location.href = 'pergunta.html'; // Redireciona para outra página
        }
    });
});

