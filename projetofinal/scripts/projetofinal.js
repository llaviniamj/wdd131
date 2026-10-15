const catalogoLivros = [
  {
    id: 1,
    titulo: "O Senhor dos Anéis: A Sociedade do Anel",
    autor: "J.R.R. Tolkien",
    genero: "fantasia",
    capa: "https://m.media-amazon.com/images/I/61T24g+StSL._SY466_.jpg"
  },
  {
    id: 2,
    titulo: "O Senhor dos Anéis: As Duas Torres",
    autor: "J.R.R. Tolkien",
    genero: "fantasia",
    capa: "https://m.media-amazon.com/images/I/41+rIB0PvgL._SY445_SX342_ML2_.jpg"
  },
  {
    id: 3,
    titulo: "O Senhor dos Anéis: O Retorno do Rei",
    autor: "J.R.R. Tolkien",
    genero: "fantasia",
    capa: "https://m.media-amazon.com/images/I/41KWSPU9wcL._SY445_SX342_ML2_.jpg"
  },
  {
    id: 4,
    titulo: "O Hobbit",
    autor: "J.R.R. Tolkien",
    genero: "fantasia",
    capa: "https://m.media-amazon.com/images/I/511+-lOOtsL._SY445_SX342_ML2_.jpg"
  },
  {
    id: 5,
    titulo: "O Silmarillion",
    autor: "J.R.R. Tolkien",
    genero: "fantasia",
    capa: "https://m.media-amazon.com/images/I/51EZZWkTECL._SY445_SX342_ML2_.jpg"
  },
  {
    id: 6,
    titulo: "O Príncipe Cruel (O Povo do Ar Vol. 1)",
    autor: "Holly Black",
    genero: "fantasia",
    capa: "https://m.media-amazon.com/images/I/51BSHmTVwsS._SY445_SX342_ML2_.jpg"
  },
  {
    id: 7,
    titulo: "O Rei Perverso (O Povo do Ar Vol. 2)",
    autor: "Holly Black",
    genero: "fantasia",
    capa: "https://m.media-amazon.com/images/I/512ku-SieYS._SY445_SX342_ML2_.jpg"
  },
  {
    id: 8,
    titulo: "A Rainha do Nada (O Povo do Ar Vol. 3)",
    autor: "Holly Black",
    genero: "fantasia",
    capa: "https://m.media-amazon.com/images/I/91vZBs7i-+L._SY466_.jpg"
  },
  {
    id: 9,
    titulo: "Como o Rei de Elfhame Aprendeu a Odiar Histórias",
    autor: "Holly Black",
    genero: "fantasia",
    capa: "https://m.media-amazon.com/images/I/91aPLkKqCoS._SY425_.jpg"
  },
  {
    id: 10,
    titulo: "O Herdeiro Roubado",
    autor: "Holly Black",
    genero: "fantasia",
    capa: "https://m.media-amazon.com/images/I/512n+Qu2UHL._SY445_SX342_ML2_.jpg"
  },
  {
  id: 11,
    titulo: "As Crônicas de Nárnia: O Leão, a Feiticeira e o Guarda-Roupa",
    autor: "C.S. Lewis",
    genero: "fantasia",
    capa: "https://m.media-amazon.com/images/I/51gUvs6Pr+L._SY445_SX342_QL70_ML2_.jpg"
  },
  {
    id: 12,
    titulo: "Percy Jackson: O Ladrão de Raios",
    autor: "Rick Riordan",
    genero: "fantasia",
    capa: "https://m.media-amazon.com/images/I/41TkASJZejL._SY445_SX342_QL70_ML2_.jpg"
  },
  {
    id: 13,
    titulo: "Eragon",
    autor: "Christopher Paolini",
    genero: "fantasia",
    capa: "https://m.media-amazon.com/images/I/51EhcIq9VbL._SY445_SX342_QL70_ML2_.jpg"
  },
  {
    id: 14,
    titulo: "A Bússola de Ouro",
    autor: "Philip Pullman",
    genero: "fantasia",
    capa: "https://m.media-amazon.com/images/I/51o8qHslM0L._SY445_SX342_QL70_ML2_.jpg"
  },
  {
    id: 15,
    titulo: "O Feiticeiro de Terramar",
    autor: "Ursula K. Le Guin",
    genero: "fantasia",
    capa: "https://m.media-amazon.com/images/I/71zq6I-37uL._SY425_.jpg"
  },
  {
    id: 16,
    titulo: "Coraline",
    autor: "Neil Gaiman",
    genero: "fantasia",
    capa: "https://m.media-amazon.com/images/I/51mvgz2QY9L._SY445_SX342_QL70_ML2_.jpg"
  },
  {
    id: 17,
    titulo: "O Nome do Vento",
    autor: "Patrick Rothfuss",
    genero: "fantasia",
    capa: "https://m.media-amazon.com/images/I/51bRkcp1sLL._SY445_SX342_QL70_ML2_.jpg"
  },
  {
    id: 18,
    titulo: "O Temor do Sábio",
    autor: "Patrick Rothfuss",
    genero: "fantasia",
    capa: "https://m.media-amazon.com/images/I/51FLFO-T+sL._SY445_SX342_QL70_ML2_.jpg"
  },
  {
    id: 19,
    titulo: "O Caminho dos Reis",
    autor: "Brandon Sanderson",
    genero: "fantasia",
    capa: "https://m.media-amazon.com/images/I/512WiQoGYXL._SY445_SX342_QL70_ML2_.jpg"
  },
  {
    id: 20,
    titulo: "Nascidos da Bruma: O Império Final",
    autor: "Brandon Sanderson",
    genero: "fantasia",
    capa: "https://m.media-amazon.com/images/I/51T1AQz+xeL._SY445_SX342_ML2_.jpg"
  },

  {
    id: 21,
    titulo: "Duna",
    autor: "Frank Herbert",
    genero: "ficcao",
    capa: "https://m.media-amazon.com/images/I/41MRn6hy8-L._SY445_SX342_ML2_.jpg"
  },
  {
    id: 22,
    titulo: "Messias de Duna",
    autor: "Frank Herbert",
    genero: "ficcao",
    capa: "https://m.media-amazon.com/images/I/51DhRBNvM1L._SY445_SX342_ML2_.jpg"
  },
  {
    id: 23,
    titulo: "Filhos de Duna",
    autor: "Frank Herbert",
    genero: "ficcao",
    capa: "https://m.media-amazon.com/images/I/51mqUvezh2L._SY445_SX342_ML2_.jpg"
  },
  {
    id: 24,
    titulo: "1984",
    autor: "George Orwell",
    genero: "ficcao",
    capa: "https://m.media-amazon.com/images/I/51VXYaKO-sL._SY445_SX342_ML2_.jpg"
  },
  {
    id: 25,
    titulo: "Admirável Mundo Novo",
    autor: "Aldous Huxley",
    genero: "ficcao",
    capa: "https://m.media-amazon.com/images/I/61hOp6UFvCL._SY466_.jpg"
  },
  {
    id: 26,
    titulo: "Fahrenheit 451",
    autor: "Ray Bradbury",
    genero: "ficcao",
    capa: "https://m.media-amazon.com/images/I/41PVVpQf-sL._SY445_SX342_ML2_.jpg"
  },
  {
    id: 27,
    titulo: "Neuromancer",
    autor: "William Gibson",
    genero: "ficcao",
    capa: "https://m.media-amazon.com/images/I/51TMmMNtZiL._SY445_SX342_ML2_.jpg"
  },
  {
    id: 28,
    titulo: "Fundação",
    autor: "Isaac Asimov",
    genero: "ficcao",
    capa: "https://m.media-amazon.com/images/I/41D5QQMs-TL._SX342_SY445_ML2_.jpg"
  },
  {
    id: 29,
    titulo: "Eu, Robô",
    autor: "Isaac Asimov",
    genero: "ficcao",
    capa: "https://m.media-amazon.com/images/I/41uH8zurEeL._SY445_SX342_ML2_.jpg"
  },
  {
    id: 30,
    titulo: "O Guia do Mochileiro das Galáxias",
    autor: "Douglas Adams",
    genero: "ficcao",
    capa: "https://m.media-amazon.com/images/I/51B7vacPfEL._SY445_SX342_ML2_.jpg"
  },

  {
    id: 31,
    titulo: "Orgulho e Preconceito",
    autor: "Jane Austen",
    genero: "romance",
    capa: "https://m.media-amazon.com/images/I/51AHB+f-0DL._SY445_SX342_ML2_.jpg"
  },
  {
    id: 32,
    titulo: "Razão e Sensibilidade",
    autor: "Jane Austen",
    genero: "romance",
    capa: "https://m.media-amazon.com/images/I/51QfR1xtc6S._SY445_SX342_ML2_.jpg"
  },
  {
    id: 33,
    titulo: "Emma",
    autor: "Jane Austen",
    genero: "romance",
    capa: "https://m.media-amazon.com/images/I/51Lt+IloUnL._SY445_SX342_ML2_.jpg"
  },
  {
    id: 34,
    titulo: "Stardust: O Mistério das Estrelas",
    autor: "Neil Gaiman",
    genero: "romance",
    capa: "https://m.media-amazon.com/images/I/91y75TYZhtL._SY466_.jpg"
  },
  {
    id: 35,
    titulo: "Daisy Jones & The Six",
    autor: "Taylor Jenkins Reid",
    genero: "romance",
    capa: "https://m.media-amazon.com/images/I/91KL76cFphL._SY425_.jpg"
  },
  {
    id: 36,
    titulo: "O Jardim Secreto",
    autor: "Frances Hodgson Burnett",
    genero: "romance",
    capa: "https://m.media-amazon.com/images/I/816U+FetlWL._SY522_.jpg"
  },
  {
    id: 37,
    titulo: "Teto Para Dois",
    autor: "Beth O'Leary",
    genero: "romance",
    capa: "https://m.media-amazon.com/images/I/81LbmZtfeoL._SY425_.jpg"
  },
  {
   id: 38,
    titulo: "A Ilha do Tesouro",
    autor: "Robert Louis Stevenson",
    genero: "romance",
    capa: "https://m.media-amazon.com/images/I/51Dzdz6lyfL._SY445_SX342_QL70_ML2_.jpg"
  },
  {
    id: 39,
    titulo: "Viagem ao Centro da Terra",
    autor: "Júlio Verne",
    genero: "romance",
    capa: "https://m.media-amazon.com/images/I/51tUv8qGiHL._SY445_SX342_QL70_ML2_.jpg"
  },
  {
    id: 40,
    titulo: "Vinte Mil Léguas Submarinas",
    autor: "Júlio Verne",
    genero: "romance",
    capa: "https://m.media-amazon.com/images/I/61TOyb6BhoL._SY342_.jpg"
  },

  {
    id: 41,
    titulo: "E Não Sobrou Nenhum",
    autor: "Agatha Christie",
    genero: "misterio",
    capa: "https://m.media-amazon.com/images/I/51YZLh9K7NL._SY445_SX342_ML2_.jpg"
  },
  {
    id: 42,
    titulo: "Assassinato no Expresso do Oriente",
    autor: "Agatha Christie",
    genero: "misterio",
    capa: "https://m.media-amazon.com/images/I/51fLtg6MDIL._SY445_SX342_ML2_.jpg"
  },
  {
    id: 43,
    titulo: "O Iluminado",
    autor: "Stephen King",
    genero: "misterio",
    capa: "https://m.media-amazon.com/images/I/51wt58SEkUL._SY445_SX342_ML2_.jpg"
  },
  {
    id: 44,
    titulo: "Misery: Louca Obsessão",
    autor: "Stephen King",
    genero: "misterio",
    capa: "https://m.media-amazon.com/images/I/91ocgbfq55L._SY425_.jpg"
  },
  {
    id: 45,
    titulo: "Garota Exemplar",
    autor: "Gillian Flynn",
    genero: "misterio",
    capa: "https://m.media-amazon.com/images/I/41aKH9fwf0L._SY445_SX342_ML2_.jpg"
  },
  {
    id: 46,
    titulo: "A Paciente Silenciosa",
    autor: "Alex Michaelides",
    genero: "misterio",
    capa: "https://m.media-amazon.com/images/I/41J3FApF8yL._SY445_SX342_QL70_ML2_.jpg"
  },
  {
    id: 47,
    titulo: "O Código Da Vinci",
    autor: "Dan Brown",
    genero: "misterio",
    capa: "https://m.media-amazon.com/images/I/416lvPCh0cL._SY445_SX342_QL70_ML2_.jpg"
  },
  {
    id: 48,
    titulo: "Anjos e Demônios",
    autor: "Dan Brown",
    genero: "misterio",
    capa: "https://m.media-amazon.com/images/I/41wkwEKWPWL._SY445_SX342_QL70_ML2_.jpg"
  },
  {
    id: 49,
    titulo: "Manual de Assassinos para Boas Garotas",
    autor: "Holly Jackson",
    genero: "misterio",
    capa: "https://m.media-amazon.com/images/I/51TMWrD8b5L._SY445_SX342_QL70_ML2_.jpg"
  },
  {
    id: 50,
    titulo: "Um Estudo em Vermelho",
    autor: "Arthur Conan Doyle",
    genero: "misterio",
    capa: "https://m.media-amazon.com/images/I/51V2E5d5VaL._SY445_SX342_QL70_ML2_.jpg"
  }
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
    container.innerHTML = `<p style="grid-column: 1/-1; text-align: center; padding: 2rem;">Sua estante virtual está vazia. Adicione livros através do catálogo acima!</p>`;
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