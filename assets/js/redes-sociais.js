// Carrega os links do arquivo JSON
fetch("assets/redes-sociais.json")
  .then(response => response.json()) // Converte a resposta para JSON
  .then(data => {
    // Associa os links aos botões
    document.getElementById("instagram-btn").onclick = () => window.open(data.instagram, "_blank");
    document.getElementById("whatsapp-btn").onclick = () => window.open(data.whatsapp, "_blank");
    document.getElementById("github-btn").onclick = () => window.open(data.github, "_blank");
  })
  .catch(error => console.error("Erro ao carregar os links:", error));
