// Scroll to specific sections
function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
}

// Scroll to footer
function scrollToFooter() {
    document.getElementById('footer').scrollIntoView({ behavior: 'smooth' });
}

// Seleziona gli elementi del lightbox
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const lightboxClose = document.getElementById('lightbox-close');

// Aggiungi un evento click alle immagini
document.querySelectorAll('.gallery img').forEach(img => {
    img.addEventListener('click', (e) => {
        const fullImageSrc = e.target.getAttribute('data-full'); // Ottieni il percorso dell'immagine completa
        if (fullImageSrc) { // Verifica che l'attributo data-full sia presente
            lightboxImg.src = fullImageSrc; // Imposta l'immagine nel lightbox
            lightbox.style.display = 'flex'; // Mostra il lightbox
        }
    });
});

// Chiudi il lightbox al click sul pulsante di chiusura
lightboxClose.addEventListener('click', () => {
    lightbox.style.display = 'none';
    lightboxImg.src = ''; // Rimuovi il percorso per evitare problemi di caching
});

// Chiudi il lightbox al click fuori dall'immagine
lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) { // Assicurati che il click sia sull'overlay, non sull'immagine
        lightbox.style.display = 'none';
        lightboxImg.src = ''; // Rimuovi il percorso dell'immagine
    }
});
