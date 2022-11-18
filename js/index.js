let coverLogo = document.querySelector('.cover > .cover-image-wrapper');

document.addEventListener('scroll', () => {
    coverLogo.style.bottom = String(-document.documentElement.scrollTop + 0.18 * getViewport()[1]) + 'px';
});