document.addEventListener("DOMContentLoaded", () => {
    let count = localStorage.getItem("reviewCounter");
    
    if (!count) {
        count = 1;
    } else {
        count = parseInt(count, 10) + 1;
    }
    
    localStorage.setItem("reviewCounter", count);

    const reviewCountDisplay = document.getElementById("reviewCount");
    if (reviewCountDisplay) {
        reviewCountDisplay.textContent = count;
    }

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