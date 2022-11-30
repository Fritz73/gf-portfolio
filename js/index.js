let coverLogo = document.querySelector('.cover > .cover-image-wrapper')
let coverArea = document.querySelector('.cover')

let originalLogoPosition = (coverArea.offsetHeight - coverLogo.offsetHeight) * 0.48

coverLogo.style.bottom = String(originalLogoPosition) + 'px';

document.addEventListener('scroll', () => {
    coverLogo.style.bottom = String(-document.documentElement.scrollTop + originalLogoPosition) + 'px';
});