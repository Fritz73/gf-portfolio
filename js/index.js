let coverDescription = document.querySelector('.cover > .description-wrapper');
let coverLogo = document.querySelector('.cover > .cover-image-wrapper');

document.addEventListener('scroll', () => {
    coverDescription.style.top = String(document.documentElement.scrollTop) + 'px';
    coverLogo.style.bottom = String(-document.documentElement.scrollTop + 0.18 * getViewport()[1]) + 'px';
});