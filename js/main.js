let navBar = document.querySelector('nav');
let navBarHeight = navBar.offsetHeight;
let coverHeight = document.querySelector('.cover').offsetHeight;

let lastScrollPosition = 0;
document.addEventListener('scroll', () => {
    let scrollPosition = document.documentElement.scrollTop;
    if (scrollPosition < coverHeight - navBarHeight) {
        navBar.style.backgroundColor = 'rgba(1,1,1,0)';
    }
    else {
        navBar.style.backgroundColor = 'rgba(1,1,1,.5)';
        if (scrollPosition > lastScrollPosition) {
            navBar.style.top = '-200px';
        } else {
            navBar.style.top = '0';
        }
    }
    lastScrollPosition = Math.max(0, scrollPosition);
});


function getViewport() {

    let viewPortWidth;
    let viewPortHeight;

    // the more standards compliant browsers (mozilla/netscape/opera/IE7) use window.innerWidth and window.innerHeight
    if (typeof window.innerWidth != 'undefined') {
        viewPortWidth = window.innerWidth
        viewPortHeight = window.innerHeight
    }

// IE6 in standards compliant mode (i.e. with a valid doctype as the first line in the document)
    else if (typeof document.documentElement != 'undefined'
        && typeof document.documentElement.clientWidth !=
        'undefined' && document.documentElement.clientWidth !== 0) {
        viewPortWidth = document.documentElement.clientWidth
        viewPortHeight = document.documentElement.clientHeight
    }

    // older versions of IE
    else {
        viewPortWidth = document.getElementsByTagName('body')[0].clientWidth
        viewPortHeight = document.getElementsByTagName('body')[0].clientHeight
    }
    return [viewPortWidth, viewPortHeight];
}

let viewportWidth = getViewport()[0];
let viewportHeight = getViewport()[1];
let appearOnLoad = document.querySelectorAll('section:not(.cover) > div, section:not(.cover) > h2');

// for (let i = 0; i < appearOnLoad.length; i++) {
//     let target = appearOnLoad[i];
//     document.addEventListener('scroll', () => {
//         if (target.getBoundingClientRect().top < viewportHeight * 0.8) {
//             target.style.opacity = '1';
//             target.style.top = '0';
//         }
//     });
// }

let coverDescription = document.querySelector('.cover > .description-wrapper');
document.addEventListener('scroll', () => {
    coverDescription.style.top = String(document.documentElement.scrollTop) + 'px';
});


const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.top = '0';
        }
    });
});

appearOnLoad.forEach((el) => observer.observe(el));