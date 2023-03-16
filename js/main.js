let navBar = document.querySelector('nav');
let navBarHeight = navBar.offsetHeight;
let coverHeight = document.querySelector('.cover').offsetHeight;

let lastScrollPosition = 0;
document.addEventListener('scroll', () => {
    let scrollPosition = document.documentElement.scrollTop;
    if (scrollPosition < coverHeight - navBarHeight) {
        navBar.style.backgroundColor = 'rgba(0,0,0,0)';
    }
    else {
        navBar.style.backgroundColor = '#000';
        if (scrollPosition > lastScrollPosition) {
            navBar.style.top = '-200px';
            projectDrawerDisappear();
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
let coverImageMoveDown;
if (viewportWidth / viewportHeight < 1) {
    coverImageMoveDown = .3;
} else {
    coverImageMoveDown = .1;
}

setInterval(() => {
    viewportWidth = getViewport()[0];
    viewportHeight = getViewport()[1];
    if (viewportWidth / viewportHeight < 1) {
        coverImageMoveDown = .3;
    } else {
        coverImageMoveDown = .1;
    }
}, 1000)


const elt = (type, ...children) => {
    let node = document.createElement(type);
    for (let child of children) {
        if (typeof (child) !== 'string')
            node.appendChild(child)
        else
            node.appendChild(document.createTextNode(child))
    }
    return node;
}

let appearOnLoad = document.querySelectorAll('section:not(.cover) > div, section:not(.cover) > h2');

let coverDescription = document.querySelector('.cover > .description-wrapper');
let cover = document.querySelector('.cover');

cover.style.backgroundPositionY = String(coverImageMoveDown * coverHeight) + 'px';
document.addEventListener('scroll', () => {
    coverDescription.style.top = String(document.documentElement.scrollTop) + 'px';
    cover.style.backgroundPositionY = String(-0.7 * document.documentElement.scrollTop + coverImageMoveDown * coverHeight) + 'px';
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


let menuDrawer = document.querySelector('nav .menu-drawer')

menuDrawer.onclick = (e) => {
    let navItem = document.querySelector('nav .nav-item-wrapper')
    if (!navItem.visible) {
        menuDrawer.style.rotate = '-90deg'
        navItem.classList.add('visible')
        document.body.style.overflow = 'hidden'
    } else {
        menuDrawer.style.rotate = '0deg'
        navItem.classList.remove('visible')
        document.body.style.overflow = 'scroll'
    }
    navItem.visible = !navItem.visible
    e.stopPropagation()
}

let designProjectsExtend = document.querySelector('nav .project-menu .material-symbols-outlined');
let projectDrawer = document.querySelector('nav .projects');
let homeLink = document.querySelector('nav .project-menu');
function projectDrawerDisappear() {
    projectDrawer.classList.remove('show-projects')
    homeLink.classList.remove('projects-extended')
    designProjectsExtend.classList.remove('expand-rotate')
    designProjectsExtend.style.color = 'aliceblue'
}
function projectDrawerAppear() {
    projectDrawer.classList.add('show-projects')
    homeLink.classList.add('projects-extended')
    designProjectsExtend.classList.add('expand-rotate')
    designProjectsExtend.style.color = 'rgb(141, 176, 251)'
}


if (window.matchMedia('(hover: none)').matches) {
    designProjectsExtend.onclick = () => {
        if (projectDrawer.classList.contains('show-projects')) {
            projectDrawerDisappear()
        }
        else {
            projectDrawerAppear()
        }
    }
} else {
    homeLink.onmouseout = () => {
        projectDrawerDisappear()
    }
    homeLink.onmouseover = () => {
        projectDrawerAppear()
    }
}
