document.body.pictureEnlarged = false;

const enlargePicture = (event) => {

    let markerElement = document.body

    if (!markerElement.pictureEnlarged) {
        let newPic = event.target.cloneNode()
        newPic.style.width = '100%'
        newPic.style.height = '100%'
        newPic.style.objectFit = 'contain'

        let e = elt('div', newPic)
        e.classList.add('appendElement')

        document.body.appendChild(e);
        e.style.left = ((getViewport()[0] - e.offsetWidth) * 0.5).toString() + 'px'
        e.style.top = ((getViewport()[1] - e.offsetHeight) * 0.5).toString() + 'px'
        markerElement.pictureEnlarged = true;

        event.stopPropagation()
    }
}

document.body.onclick = () => {
    if (document.body.pictureEnlarged) {
        document.querySelector('.appendElement').remove();
        document.body.pictureEnlarged = false;
    }
}