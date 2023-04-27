let coverLogo = document.querySelector('.cover > .cover-image-wrapper')
let coverArea = document.querySelector('.cover')

let originalLogoPosition = (coverArea.offsetHeight - coverLogo.offsetHeight) * 0.48

coverLogo.style.bottom = String(originalLogoPosition) + 'px';

document.addEventListener('scroll', () => {
    coverLogo.style.bottom = String(-document.documentElement.scrollTop + originalLogoPosition) + 'px';
});


//--------------------------------------------------------------------------------------
//------------------------ Auto sort projects on index ---------------------------------
//--------------------------------------------------------------------------------------

let homepageProjects = document.querySelectorAll('main > .product');
for (let i = 0; i < homepageProjects.length; i++) {
    if (i%2)
        homepageProjects[i].classList.add('text-start');
    else
        homepageProjects[i].classList.add('text-end');
}
