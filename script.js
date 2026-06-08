let btn = document.getElementById("button");



btn.addEventListener("click", () => {
    const { jsPDF } = window.jspdf;

    const doc = new jsPDF();

    doc.autoTable({
        html: "table"
    });

    doc.save("table.pdf");
});
