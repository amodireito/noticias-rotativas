let currentBanner = 0;
const banners = document.querySelectorAll('.banner');

function showBanner(index) {
    banners.forEach(banner => banner.style.display = 'none');
    banners[index].style.display = 'block';
}

function nextBanner() {
    currentBanner = (currentBanner + 1) % banners.length;
    showBanner(currentBanner);
}

setInterval(nextBanner, 8000); // Altere 3000 para a duração desejada em milissegundos

window.onload = () => showBanner(currentBanner);
