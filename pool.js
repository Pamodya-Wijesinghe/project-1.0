// Change the main image
function changeImage(imageSrc) {
    document.getElementById('current-image').src = imageSrc;
}

// Scroll thumbnails horizontally
const thumbnails = document.getElementById('thumbnails');
let scrollPosition = 0;

function scrollThumbnails(direction) {
    const thumbnailWidth = 110; // Width of thumbnail + gap
    const visibleThumbnails = Math.floor(thumbnails.parentElement.offsetWidth / thumbnailWidth);

    if (direction === 'left') {
        scrollPosition = Math.max(scrollPosition - thumbnailWidth * visibleThumbnails, 0);
    } else {
        scrollPosition = Math.min(
            scrollPosition + thumbnailWidth * visibleThumbnails,
            thumbnails.scrollWidth - thumbnails.parentElement.offsetWidth
        );
    }
    thumbnails.style.transform = `translateX(-${scrollPosition}px)`;
}