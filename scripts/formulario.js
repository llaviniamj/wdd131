// Array de Produtos Fornecido
const produtos = [
  {
    id: "fc-1888",
    nome: "capacitor de fluxo",
    classificacaomedia: 4.5
  },
  {
    id: "fc-2050",
    nome: "fios elétricos",
    classificacaomedia: 4.7
  },
  {
    id: "fs-1987",
    nome: "circuitos de tempo",
    classificacaomedia: 3.5
  },
  {
    id: "ac-2000",
    nome: "reator de baixa tensão",
    classificacaomedia: 3.9
  },
  {
    id: "jj-1969",
    nome: "equalizador de distorção",
    classificacaomedia: 5.0
  }
];

document.addEventListener("DOMContentLoaded", () => {
    const selectProduto = document.getElementById("produto");

    // Popula as opções do select dinamicamente
    produtos.forEach(prod => {
        const option = document.createElement("option");
        option.value = prod.id; // Atribui o id como valor do option
        option.textContent = prod.nome; // Atribui o nome como texto exibido
        selectProduto.appendChild(option);
    });

    // Atualiza os dados dinâmicos do rodapé
    setFooterDates();
});

function setFooterDates() {
    const yearSpan = document.getElementById("year");
    const lastModifiedPara = document.getElementById("lastModified");

    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }
    if (lastModifiedPara) {
        lastModifiedPara.textContent = `Última Modificação: ${document.lastModified}`;
    }
}