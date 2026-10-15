const catalogoLivros = [
  { id: 1, titulo: "O Hobbit", autor: "J.R.R. Tolkien", genero: "fantasia", capa: "images/livro-1.jpg" },
  { id: 2, titulo: "1984", autor: "George Orwell", genero: "ficcao", capa: "images/livro-2.jpg" },
  { id: 3, titulo: "Orgulho e Preconceito", autor: "Jane Austen", genero: "romance", capa: "images/livro-3.jpg" },
  { id: 4, titulo: "Duna", autor: "Frank Herbert", genero: "ficcao", capa: "images/livro-4.jpg" }
];

function obterEstanteSalva() {
  const dados = localStorage.getItem("estanteLivrosTecelao");
  return dados ? JSON.parse(dados) : [];
}

function alternarEstante(idLivro) {
  let estante = obterEstanteSalva();
  const index = estante.indexOf(idLivro);

  if (index === -1) {
    estante.push(idLivro);
    alert("Livro adicionado à sua Estante Virtual!");
  } else {
    estante = estante.filter(id => id !== idLivro);
    alert("Livro removido da sua estante!");
  }

  localStorage.setItem("estanteLivrosTecelao", JSON.stringify(estante));
  
  renderizarCatalogo(catalogoLivros);
  renderizarEstante();
}

function renderizarCatalogo(livros) {
  const container = document.querySelector("#container-catalogo");
  if (!container) return;

  const estante = obterEstanteSalva();
  container.innerHTML = "";

  if (livros.length === 0) {
    container.innerHTML = `<p>Nenhum livro encontrado para o gênero selecionado.</p>`;
    return;
  }

  livros.forEach(livro => {
    const naEstante = estante.includes(livro.id);
    const card = document.createElement("article");
    card.className = "card";

    card.innerHTML = `
      <img src="${livro.capa}" alt="Capa do livro ${livro.titulo}" loading="lazy">
      <div class="card-content">
        <h3>${livro.titulo}</h3>
        <p><strong>Autor:</strong> ${livro.autor}</p>
        <p><strong>Gênero:</strong> ${livro.genero.toUpperCase()}</p>
      </div>
      <button class="btn" onclick="alternarEstante(${livro.id})">
        ${naEstante ? "Remover da Estante" : "Adicionar à Estante"}
      </button>
    `;
    container.appendChild(card);
  });
}

function renderizarEstante() {
  const container = document.querySelector("#container-estante");
  if (!container) return;

  const estante = obterEstanteSalva();
  const favoritos = catalogoLivros.filter(livro => estante.includes(livro.id));

  container.innerHTML = "";

  if (favoritos.length === 0) {
    container.innerHTML = `<p>Sua estante virtual está vazia. Adicione livros através do catálogo acima!</p>`;
    return;
  }

  favoritos.forEach(livro => {
    const card = document.createElement("article");
    card.className = "card";
    card.innerHTML = `
      <img src="${livro.capa}" alt="Capa do livro ${livro.titulo}" loading="lazy">
      <div class="card-content">
        <h3>${livro.titulo}</h3>
        <p><strong>Autor:</strong> ${livro.autor}</p>
      </div>
      <button class="btn" onclick="alternarEstante(${livro.id})">Remover</button>
    `;
    container.appendChild(card);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  renderizarCatalogo(catalogoLivros);
  renderizarEstante();

  const filtroSelect = document.querySelector("#filtro-genero");
  if (filtroSelect) {
    filtroSelect.addEventListener("change", (e) => {
      const genero = e.target.value;
      if (genero === "todos") {
        renderizarCatalogo(catalogoLivros);
      } else {
        const filtrados = catalogoLivros.filter(l => l.genero === genero);
        renderizarCatalogo(filtrados);
      }
    });
  }
});