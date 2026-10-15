const catalogoLivros = [

  { id: 1, titulo: "O Senhor dos Anéis: A Sociedade do Anel", autor: "J.R.R. Tolkien", genero: "fantasia", capa: "images/livro-1.jpg" },
  { id: 2, titulo: "O Senhor dos Anéis: As Duas Torres", autor: "J.R.R. Tolkien", genero: "fantasia", capa: "images/livro-1.jpg" },
  { id: 3, titulo: "O Senhor dos Anéis: O Retorno do Rei", autor: "J.R.R. Tolkien", genero: "fantasia", capa: "images/livro-1.jpg" },
  { id: 4, titulo: "O Hobbit", autor: "J.R.R. Tolkien", genero: "fantasia", capa: "images/livro-1.jpg" },
  { id: 5, titulo: "O Silmarillion", autor: "J.R.R. Tolkien", genero: "fantasia", capa: "images/livro-1.jpg" },
  { id: 6, titulo: "O Príncipe Cruel (O Povo do Ar Vol. 1)", autor: "Holly Black", genero: "fantasia", capa: "images/livro-1.jpg" },
  { id: 7, titulo: "O Rei Perverso (O Povo do Ar Vol. 2)", autor: "Holly Black", genero: "fantasia", capa: "images/livro-1.jpg" },
  { id: 8, titulo: "A Rainha do Nada (O Povo do Ar Vol. 3)", autor: "Holly Black", genero: "fantasia", capa: "images/livro-1.jpg" },
  { id: 9, titulo: "Como o Rei de Elfhame Aprendeu a Odiar Histórias", autor: "Holly Black", genero: "fantasia", capa: "images/livro-1.jpg" },
  { id: 10, titulo: "O Herdeiro Roubado", autor: "Holly Black", genero: "fantasia", capa: "images/livro-1.jpg" },
  { id: 11, titulo: "Corte de Espinhos e Rosas", autor: "Sarah J. Maas", genero: "fantasia", capa: "images/livro-1.jpg" },
  { id: 12, titulo: "Corte de Névoa e Fúria", autor: "Sarah J. Maas", genero: "fantasia", capa: "images/livro-1.jpg" },
  { id: 13, titulo: "Corte de Asas e Ruína", autor: "Sarah J. Maas", genero: "fantasia", capa: "images/livro-1.jpg" },
  { id: 14, titulo: "Trono de Vidro", autor: "Sarah J. Maas", genero: "fantasia", capa: "images/livro-1.jpg" },
  { id: 15, titulo: "A Vida Invisível de Addie LaRue", autor: "V.E. Schwab", genero: "fantasia", capa: "images/livro-1.jpg" },
  { id: 16, titulo: "Um Tom Mais Escuro de Magia", autor: "V.E. Schwab", genero: "fantasia", capa: "images/livro-1.jpg" },
  { id: 17, titulo: "O Nome do Vento", autor: "Patrick Rothfuss", genero: "fantasia", capa: "images/livro-1.jpg" },
  { id: 18, titulo: "O Tavor dos Sábios", autor: "Patrick Rothfuss", genero: "fantasia", capa: "images/livro-1.jpg" },
  { id: 19, titulo: "O Caminho dos Reis", autor: "Brandon Sanderson", genero: "fantasia", capa: "images/livro-1.jpg" },
  { id: 20, titulo: "Nascidos da Bruma: O Império Final", autor: "Brandon Sanderson", genero: "fantasia", capa: "images/livro-1.jpg" },

  { id: 21, titulo: "Duna", autor: "Frank Herbert", genero: "ficcao", capa: "images/livro-2.jpg" },
  { id: 22, titulo: "Messias de Duna", autor: "Frank Herbert", genero: "ficcao", capa: "images/livro-2.jpg" },
  { id: 23, titulo: "Filhos de Duna", autor: "Frank Herbert", genero: "ficcao", capa: "images/livro-2.jpg" },
  { id: 24, titulo: "1984", autor: "George Orwell", genero: "ficcao", capa: "images/livro-2.jpg" },
  { id: 25, titulo: "Admirável Mundo Novo", autor: "Aldous Huxley", genero: "ficcao", capa: "images/livro-2.jpg" },
  { id: 26, titulo: "Fahrenheit 451", autor: "Ray Bradbury", genero: "ficcao", capa: "images/livro-2.jpg" },
  { id: 27, titulo: "Neuromancer", autor: "William Gibson", genero: "ficcao", capa: "images/livro-2.jpg" },
  { id: 28, titulo: "Fundação", autor: "Isaac Asimov", genero: "ficcao", capa: "images/livro-2.jpg" },
  { id: 29, titulo: "Eu, Robô", autor: "Isaac Asimov", genero: "ficcao", capa: "images/livro-2.jpg" },
  { id: 30, titulo: "O Guia do Mochileiro das Galáxias", autor: "Douglas Adams", genero: "ficcao", capa: "images/livro-2.jpg" },

  { id: 31, titulo: "Orgulho e Preconceito", autor: "Jane Austen", genero: "romance", capa: "images/livro-3.jpg" },
  { id: 32, titulo: "Razão e Sensibilidade", autor: "Jane Austen", genero: "romance", capa: "images/livro-3.jpg" },
  { id: 33, titulo: "Emanuelle", autor: "Jane Austen", genero: "romance", capa: "images/livro-3.jpg" },
  { id: 34, titulo: "Os Sete Maridos de Evelyn Hugo", autor: "Taylor Jenkins Reid", genero: "romance", capa: "images/livro-3.jpg" },
  { id: 35, titulo: "Daisy Jones & The Six", autor: "Taylor Jenkins Reid", genero: "romance", capa: "images/livro-3.jpg" },
  { id: 36, titulo: "É Assim que Termina", autor: "Colleen Hoover", genero: "romance", capa: "images/livro-3.jpg" },
  { id: 37, titulo: "Teto Para Dois", autor: "Beth O'Leary", genero: "romance", capa: "images/livro-3.jpg" },
  { id: 38, titulo: "Vermelho, Branco e Sangue Azul", autor: "Casey McQuiston", genero: "romance", capa: "images/livro-3.jpg" },
  { id: 39, titulo: "A Hipótese do Amor", autor: "Ali Hazelwood", genero: "romance", capa: "images/livro-3.jpg" },
  { id: 40, titulo: "Leitura de Verão", autor: "Emily Henry", genero: "romance", capa: "images/livro-3.jpg" },

  { id: 41, titulo: "E Não Sobrou Nenhum", autor: "Agatha Christie", genero: "misterio", capa: "images/livro-4.jpg" },
  { id: 42, titulo: "Assassinato no Expresso do Oriente", autor: "Agatha Christie", genero: "misterio", capa: "images/livro-4.jpg" },
  { id: 43, titulo: "O Iluminado", autor: "Stephen King", genero: "misterio", capa: "images/livro-4.jpg" },
  { id: 44, titulo: "Misery: Louca Obsessão", autor: "Stephen King", genero: "misterio", capa: "images/livro-4.jpg" },
  { id: 45, titulo: "Garota Exemplar", autor: "Gillian Flynn", genero: "misterio", capa: "images/livro-4.jpg" },
  { id: 46, titulo: "A Paciente Silenciosa", autor: "Alex Michaelides", genero: "misterio", capa: "images/livro-4.jpg" },
  { id: 47, titulo: "O Código Da Vinci", autor: "Dan Brown", genero: "misterio", capa: "images/livro-4.jpg" },
  { id: 48, titulo: "Anjos e Demônios", autor: "Dan Brown", genero: "misterio", capa: "images/livro-4.jpg" },
  { id: 49, titulo: "Manual de Assassinos para Boas Garotas", autor: "Holly Jackson", genero: "misterio", capa: "images/livro-4.jpg" },
  { id: 50, titulo: "Um Estudo em Vermelho", autor: "Arthur Conan Doyle", genero: "misterio", capa: "images/livro-4.jpg" }
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
    container.innerHTML = `<p style="grid-column: 1/-1; text-align: center; padding: 2rem;">Nenhum livro encontrado para este filtro.</p>`;
    return;
  }

  livros.forEach(livro => {
    const naEstante = estante.includes(livro.id);
    const card = document.createElement("article");
    card.className = "card";

    card.innerHTML = `
      <img src="${livro.capa}" alt="Capa do livro ${livro.titulo}" loading="lazy" onerror="this.src='https://via.placeholder.com/250x350?text=Livro'">
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
    container.innerHTML = `<p style="grid-column: 1/-1; text-align: center; padding: 2rem;">Sua estante virtual está vazia. Escolha livros no catálogo acima para salvar aqui!</p>`;
    return;
  }

  favoritos.forEach(livro => {
    const card = document.createElement("article");
    card.className = "card";
    card.innerHTML = `
      <img src="${livro.capa}" alt="Capa do livro ${livro.titulo}" loading="lazy" onerror="this.src='https://via.placeholder.com/250x350?text=Livro'">
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