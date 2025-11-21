const cardConteiner = document.querySelector(".card-conteiner");
const campoBusca = document.querySelector("#campo-busca");
const botaoBusca = document.querySelector("#botao-busca");
let dadosCompletos = []; // Armazena todos os dados carregados uma vez

async function carregarDadosIniciais() {
  try {
    const resposta = await fetch("data.json");
    if (!resposta.ok) {
      throw new Error(`Erro ao carregar os dados: ${resposta.statusText}`);
    }
    dadosCompletos = await resposta.json();
    renderizarCards(dadosCompletos); // Renderiza todos os cards na carga inicial
  } catch (error) {
    console.error("Falha na requisição:", error);
    cardConteiner.innerHTML = "<p>Ocorreu um erro ao carregar as informações das franquias. Tente novamente mais tarde.</p>";
  }
}

function iniciarBusca() {
  const termoBusca = campoBusca.value.toLowerCase();

  // Filtra a partir do conjunto completo de dados
  const dadosFiltrados = dadosCompletos.filter((dado) =>
    dado.nome.toLowerCase().includes(termoBusca)
  );
  renderizarCards(dadosFiltrados);
}

function renderizarCards(dadosParaRenderizar) {
  cardConteiner.innerHTML = "";

  // Cria um DocumentFragment para otimizar a performance
  const fragment = document.createDocumentFragment();

  if (dadosParaRenderizar.length === 0) {
    cardConteiner.innerHTML = "<p>Nenhuma franquia encontrada.</p>";
    return;
  }

  dadosParaRenderizar.forEach((dado, index) => {
    const cardElement = document.createElement("article");
    // Adiciona um atraso na animação para um efeito escalonado a cada renderização
    cardElement.style.animationDelay = `${index * 100}ms`;
    // A propriedade 'animation-fill-mode: forwards' no CSS garante que o estado final da animação seja mantido.
    // Para reiniciar a animação, removemos e adicionamos a classe.
    cardElement.classList.remove("card"); // Garante que a animação possa ser re-acionada
    void cardElement.offsetWidth; // Força um "reflow" do DOM, essencial para reiniciar a animação
    cardElement.classList.add("card"); // Adiciona a classe que pode conter a animação

    cardElement.innerHTML = criarCardHTML(dado);
    fragment.appendChild(cardElement);
  });
  cardConteiner.appendChild(fragment);
}

function criarCardHTML(dado) {
  // Cria o HTML para as tags, envolvendo cada uma em um <span> para estilização futura
  const tagsHTML = dado.tags.map(tag => `<span class="tag">${tag}</span>`).join('');

  return `
    <img src="${dado.imagem}" alt="Logo do ${dado.nome}" class="card-imagem" loading="lazy" onerror="this.onerror=null;this.src='https://via.placeholder.com/150?text=Logo+Indisponível';">
    <h2>${dado.nome}</h2>
    <p><b>Ano de fundação:</b> ${dado.data_criacao}</p>
    <p>${dado.descricao}</p> 
    <div class="tags-container">
      ${tagsHTML}
    </div>
    <a href="${dado.link}" target="_blank">Saiba mais</a>`;
}

// Adiciona os "escutadores de evento"
botaoBusca.addEventListener("click", iniciarBusca);
campoBusca.addEventListener("keyup", (event) => {
  if (event.key === "Enter") {
    iniciarBusca();
  }
});

// Chama a função para carregar e exibir os dados quando o script é carregado
carregarDadosIniciais();
