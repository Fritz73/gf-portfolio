let navBar = document.querySelector('nav');
let navBarHeight = navBar.offsetHeight;
let coverHeight = document.querySelector('.cover').offsetHeight;

document.addEventListener('scroll', event => {
    if (document.documentElement.scrollTop < coverHeight - navBarHeight)
        navBar.style.backgroundColor = 'rgba(1,1,1,0)';
    else
        navBar.style.backgroundColor = 'rgba(1,1,1,.5)';
})