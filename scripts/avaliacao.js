document.addEventListener("DOMContentLoaded", () => {
    // Gerenciamento do contador no localStorage
    let count = localStorage.getItem("reviewCounter");
    
    if (!count) {
        count = 1;
    } else {
        count = parseInt(count, 10) + 1;
    }
    
    localStorage.setItem("reviewCounter", count);

    // Exibe o número de avaliações no elemento
    const reviewCountDisplay = document.getElementById("reviewCount");
    if (reviewCountDisplay) {
        reviewCountDisplay.textContent = count;
    }

    // Atualiza o rodapé
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