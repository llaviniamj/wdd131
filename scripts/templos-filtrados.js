const templos = [
  {
    nomeDoTemplo: "Brasília Brasil",
    localizacao: "Brasília, DF, Brasil",
    consagracao: "2023, 17 de setembro",
    area: 25000,
    urlDaImagem: "imagens/templo1.jpg"
  },
  {
    nomeDoTemplo: "São Paulo Brasil",
    localizacao: "São Paulo, SP, Brasil",
    consagracao: "1978, 30 de outubro",
    area: 59246,
    urlDaImagem: "imagens/templo2.jpg"
  },
  {
    nomeDoTemplo: "Curitiba Brasil",
    localizacao: "Curitiba, PR, Brasil",
    consagracao: "2008, 1 de junho",
    area: 27850,
    urlDaImagem: "imagens/templo3.jpg"
  },
  {
    nomeDoTemplo: "Recife Brasil",
    localizacao: "Recife, PE, Brasil",
    consagracao: "2000, 15 de dezembro",
    area: 37200,
    urlDaImagem: "imagens/templo4.jpg"
  },
  {
    nomeDoTemplo: "Fortaleza Brasil",
    localizacao: "Fortaleza, CE, Brasil",
    consagracao: "2019, 2 de junho",
    area: 36000,
    urlDaImagem: "imagens/templo5.jpg"
  },
  {
    nomeDoTemplo: "Rio de Janeiro Brasil",
    localizacao: "Rio de Janeiro, RJ, Brasil",
    consagracao: "2022, 8 de maio",
    area: 29966,
    urlDaImagem: "imagens/templo6.jpg"
  },
  {
    nomeDoTemplo: "Seul Coreia",
    localizacao: "Seul, Coreia do Sul",
    consagracao: "1985, 14 de dezembro",
    area: 28057,
    urlDaImagem: "imagens/templo7.jpg"
  },
  {
    nomeDoTemplo: "Paris França",
    localizacao: "Le Chesnay, França",
    consagracao: "2017, 21 de maio",
    area: 44175,
    urlDaImagem: "imagens/templo8.jpg"
  },
  {
    nomeDoTemplo: "Trujillo Peru",
    localizacao: "Trujillo, Peru",
    consagracao: "2015, 21 de junho",
    area: 28200,
    urlDaImagem: "imagens/templo9.jpg"
  },
  {
    nomeDoTemplo: "Tijuana México",
    localizacao: "Tijuana, Baja California, México",
    consagracao: "2015, 13 de dezembro",
    area: 33367,
    urlDaImagem: "imagens/templo10.jpg"
  },
  {
    nomeDoTemplo: "Cardston Alberta",
    localizacao: "Cardston, Alberta, Canadá",
    consagracao: "1899, 26 de julho", 
    area: 88562,
    urlDaImagem: "imagens/templo11.jpg"
  },
  {
    nomeDoTemplo: "Salta Argentina",
    localizacao: "Salta, Argentina",
    consagracao: "2024, 16 de junho",
    area: 95000, 
    urlDaImagem: "imagens/templo12.jpg"
  },
  {
    nomeDoTemplo: "Salt Lake",
    localizacao: "Salt Lake City, Utah, Estados Unidos",
    consagracao: "1893, 6 de abril",
    area: 382207, 
    urlDaImagem: "imagens/templo13.jpg"
  },
  {
    nomeDoTemplo: "Los Angeles Califórnia",
    localizacao: "Los Angeles, Califórnia, Estados Unidos",
    consagracao: "1956, 11 de março",
    area: 190614, 
    urlDaImagem: "imagens/templo14.jpg"
  },
  {
    nomeDoTemplo: "Taipei Taiwan",
    localizacao: "Taipé, Taiwan",
    consagracao: "1984, 17 de novembro",
    area: 9945, 
    urlDaImagem: "imagens/templo15.jpg"
  }
];

const gallery = document.querySelector(".gallery");
const filterTitle = document.querySelector("#filter-title");
const navLinks = document.querySelectorAll("nav a");

function criarCartoesTemplos(listaTemplos) {
    gallery.innerHTML = "";
    
    listaTemplos.forEach((templo) => {
        const figure = document.createElement("figure");
        figure.classList.add("temple-card");

        const titulo = document.createElement("h3");
        titulo.textContent = templo.nomeDoTemplo;

        const local = document.createElement("p");
        local.innerHTML = `<span class="label">LOCALIZAÇÃO:</span> ${templo.localizacao}`;

        const consagracao = document.createElement("p");
        consagracao.innerHTML = `<span class="label">DEDICADO:</span> ${templo.consagracao}`;

        const area = document.createElement("p");
        area.innerHTML = `<span class="label">TAMANHO:</span> ${templo.area.toLocaleString()} sq ft`;

        const imagem = document.createElement("img");
        imagem.src = templo.urlDaImagem;
        imagem.alt = `Templo de ${templo.nomeDoTemplo}`;
        imagem.loading = "lazy";
        imagem.width = 400;
        imagem.height = 250;

        figure.appendChild(titulo);
        figure.appendChild(local);
        figure.appendChild(consagracao);
        figure.appendChild(area);
        figure.appendChild(imagem);

        gallery.appendChild(figure);
    });
}

function obterAnoConsagracao(stringConsagracao) {
    const ano = stringConsagracao.match(/\d{4}/);
    return ano ? parseInt(ano[0], 10) : 0;
}

document.querySelector("#home").addEventListener("click", (e) => {
    e.preventDefault();
    atualizarLinkAtivo(e.target);
    filterTitle.textContent = "Página Inicial";
    criarCartoesTemplos(templos);
});

document.querySelector("#antigos").addEventListener("click", (e) => {
    e.preventDefault();
    atualizarLinkAtivo(e.target);
    filterTitle.textContent = "Templos Antigos (antes de 1900)";
    const filtrados = templos.filter((t) => obterAnoConsagracao(t.consagracao) < 1900);
    criarCartoesTemplos(filtrados);
});

document.querySelector("#novos").addEventListener("click", (e) => {
    e.preventDefault();
    atualizarLinkAtivo(e.target);
    filterTitle.textContent = "Templos Novos (depois de 2000)";
    const filtrados = templos.filter((t) => obterAnoConsagracao(t.consagracao) > 2000);
    criarCartoesTemplos(filtrados);
});

document.querySelector("#grandes").addEventListener("click", (e) => {
    e.preventDefault();
    atualizarLinkAtivo(e.target);
    filterTitle.textContent = "Templos Grandes (> 90.000 sq ft)";
    const filtrados = templos.filter((t) => t.area > 90000);
    criarCartoesTemplos(filtrados);
});

document.querySelector("#pequenos").addEventListener("click", (e) => {
    e.preventDefault();
    atualizarLinkAtivo(e.target);
    filterTitle.textContent = "Templos Pequenos (< 10.000 sq ft)";
    const filtrados = templos.filter((t) => t.area < 10000);
    criarCartoesTemplos(filtrados);
});

function atualizarLinkAtivo(linkClicado) {
    navLinks.forEach((link) => link.classList.remove("active"));
    linkClicado.classList.add("active");
}

const hamburgerBtn = document.querySelector("#hamburger-btn");
const primaryNav = document.querySelector("#primary-nav");
const openIcon = document.querySelector(".open-icon");
const closeIcon = document.querySelector(".close-icon");

hamburgerBtn.addEventListener("click", () => {
    primaryNav.classList.toggle("open");
    const isOpen = primaryNav.classList.contains("open");
    openIcon.hidden = isOpen;
    closeIcon.hidden = !isOpen;
});

document.querySelector("#currentyear").textContent = new Date().getFullYear();
document.querySelector("#lastModified").textContent = `Última modificação: ${document.lastModified}`;

criarCartoesTemplos(templos);