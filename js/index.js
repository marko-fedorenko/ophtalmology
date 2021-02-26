const imageData = [
{
    url:'img/bloodcells.jpg',
    description:'Red blood cells, carrying oxygen and nutrients throughout the body',
},
{
    url:'img/bloodcells-2.jpg',
    description: 'White blood cells, which fight infection and help you recover',
},
{
    url: 'img/bloodcells-3.jpg',
    description:'Platelets, which are responsible for the formation of clots to stop bleeding'
}   
]

let currIdx = 0

function showCurrImage() {
    const imageContainer = document.querySelector('.current')
    imageContainer.src = imageData[currIdx].url;
    const textContainer = document.querySelector('.image-description');
    textContainer.innerText = imageData[currIdx].description;
}

showCurrImage();

function nextImage() {
    currIdx++;
    if (currIdx >= imageData.length) currIdx = 0; 
    showCurrImage();
}

function prevtImage() {
    currIdx--;
    if (currIdx < 0) currIdx = imageData.length - 1; 
    showCurrImage();
}

document.querySelector('.prev').addEventListener('click', prevtImage)
document.querySelector('.next').addEventListener('click', nextImage)
//carousell end

