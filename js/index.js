const images = [
    'img/bloodcells.jpg',
    'img/bloodcells-2.jpg',
    'img/bloodcells-3.jpg'
]

let currIdx = 0

function showCurrImage() {
    const imageContainer = document.querySelector('.current')
    imageContainer.src = images[currIdx];
}

showCurrImage();

function nextImage() {
    currIdx++;
    if (currIdx >= images.length) currIdx = 0; 
    showCurrImage();
}

function prevtImage() {
    currIdx--;
    if (currIdx < 0) currIdx = images.length - 1; 
    showCurrImage();
}

document.querySelector('.prev').addEventListener('click', prevtImage)
document.querySelector('.next').addEventListener('click', nextImage)
//carousell end

const imageDescription = [
    'Red blood cells, carrying oxygen and nutrients throughout the body',
    'White blood cells, which fight infection and help you recover',
    'Platelets, which are responsible for the formation of clots to stop bleeding'
]

let currDescIdx = 0

function showCurrDescription() {
    const textContainer = document.querySelector('.image-description');
    textContainer.innerText = imageDescription[currDescIdx];
}
showCurrDescription();

function nextImageDescription() {
    currDescIdx++;
    if (currDescIdx >= imageDescription.length) currDescIdx = 0; 
    showCurrDescription();
}

function prevtImageDescription() {
    currDescIdx--;
    if (currDescIdx < 0) currDescIdx = imageDescription.length - 1; 
    showCurrDescription();
}

document.querySelector('.prev').addEventListener('click', prevtImageDescription)
document.querySelector('.next').addEventListener('click', nextImageDescription)

//----------

