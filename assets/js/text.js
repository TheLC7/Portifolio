const text = "Capistrano|DEV";
let index = 0;
let isDeleting = false;

function typeWriter() {
    const element = document.getElementById("text");

    if (!isDeleting && index < text.length) {
        element.innerHTML = text.substring(0, index + 1);
        index++;
        setTimeout(typeWriter, 120); // ALTERE O TEMPO AQUI (em milissegundos) - Tempo para digitar cada caractere
    } else if (isDeleting && index > 0) {
        element.innerHTML = text.substring(0, index - 1);
        index--;
        setTimeout(typeWriter, 50); // ALTERE O TEMPO AQUI (em milissegundos) - Tempo para apagar cada caractere
    } else {
        isDeleting = !isDeleting;
        setTimeout(typeWriter, 1300); // ALTERE O TEMPO AQUI (em milissegundos) - Tempo de espera antes de recomeçar o ciclo
    }
}

window.onload = typeWriter;
