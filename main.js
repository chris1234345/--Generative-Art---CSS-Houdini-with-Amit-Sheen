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
    canvas.style.top = random(0, window.innerHeight - height )  + 'px';
    canvas.style.left = random(0, window.innerWidth - width )  + 'px';


    const ctx = canvas.getContext('2d');
    // rectangle
    for (let i = 0, i < 3, i++) {
        const size = random(20, 70);
    const x = random(40, width - 40);
    const y = random(40, height - 40);
    ctx.strokeStyle = randomColor();
    ctx.lineWidth = random(2, 7);
    ctx.strokeRect(x, y, size, size);
    }
   



    ctx.font = '40px system-ui';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillStyle = 'white';
    ctx.strokeStyle ='black';
    ctx.lineWidth = 4;
    ctx.strokeText('!canvas', width/2, height/2);
    ctx.fillText('!canvas', width/2, height/2);

    body.appendChild(canvas);
    setTimeout(() =>{
        body.removeChild(canvas)
    }, 3000)
}



// return a random number
function random (min, max) {
    return min + Math.random() * (max - min);
}

function randomColor() {
    return `hsla(${random(0, 360)} 100% 755% / 0.75)`;
}