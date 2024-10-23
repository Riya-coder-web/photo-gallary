document.addEventListener('DOMContentLoaded', () => {
    const lightbox = document.getElementById('lightbox');
    const lightboxImage = document.getElementById('lightbox-image');
    const description = document.getElementById('description');
    const thumbnails = document.querySelectorAll('.thumbnail img');
    const close = document.querySelector('.close');
    const prev = document.querySelector('.prev');
    const next = document.querySelector('.next');
    let currentIndex;

    // Function to open lightbox
    function openLightbox(index) {
        const imgData = thumbnails[index];
        lightboxImage.src = imgData.getAttribute('data-full');
        description.textContent = imgData.getAttribute('data-description');
        lightbox.style.display = 'block';
        currentIndex = index;
    }

    // Function to close lightbox
    function closeLightbox() {
        lightbox.style.display = 'none';
    }

    // Function to show the next image
    function showNext() {
        currentIndex = (currentIndex + 1) % thumbnails.length;
        openLightbox(currentIndex);
    }

    // Function to show the previous image
    function showPrev() {
        currentIndex = (currentIndex - 1 + thumbnails.length) % thumbnails.length;
        openLightbox(currentIndex);
    }

    // Event Listeners
    thumbnails.forEach((thumbnail, index) => {
        thumbnail.addEventListener('click', () => openLightbox(index));
    });

    close.addEventListener('click', closeLightbox);
    next.addEventListener('click', showNext);
    prev.addEventListener('click', showPrev);

    // Close lightbox when clicking outside of the image
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox || e.target === close) {
            closeLightbox();
        }
    });
});
