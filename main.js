const body = document.querySelector('body');
const buttonCanvas = document.querySelector('.canvas-btn');


buttonCanvas.addEventListener('click', newCanvas);


function newCanvas() {

    const width = 250;
    const height = 250;
    const canvas = document.createElement('canvas');
    canvas.width = width;
    canvas.height = height;
    canvas.classList = 'canvas'
}



// return a random number
function random (min, max) {
    return min + Math.random() * (max - min);
}

function randomColor() {
    return `hsla(${random(0, 360)} 100% 755% / 0.75)`;
}