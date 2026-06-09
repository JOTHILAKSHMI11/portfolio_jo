function downloadPDF() {
    const downloadButton = document.getElementById("button");
    const element = document.getElementById("content");

    if (downloadButton) {
        downloadButton.style.display = 'none';
    }

    html2pdf()
        .set({
            margin: 9,
            filename: 'portfolio.pdf',
            image: { type: 'jpeg', quality: 1 },
            html2canvas: { scale: 2, useCORS: true },
            jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
        })
        .from(element)
        .save()
        .then(() => {
            if (downloadButton) {
                downloadButton.style.display = 'block'; 
            }
        });
}
