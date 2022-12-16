let em = document.querySelector('.cover > .cover-image-wrapper')
let coverArea = document.querySelector('.cover')

let originalLogoPosition = (coverArea.offsetHeight) * 0.45

em.style.bottom = String(originalLogoPosition) + 'px';

document.addEventListener('scroll', () => {
    em.style.bottom = String(-document.documentElement.scrollTop + originalLogoPosition) + 'px';
});