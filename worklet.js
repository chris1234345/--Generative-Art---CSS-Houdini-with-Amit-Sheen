registerPaint('foo', class {
    static get inputProperties(){
        return['--count'];
    }

    paint(ctx, size, props) {
        const {width, height} = size;
        const count = props.get('count');
        
        for (let i = 0; i < 3; i++ ) {
            const size = random(20, 70);
            const x = random(40, width - 40) - size / 2;
            const y = random(40, height - 40) - size / 2;
            ctx.strokeStyle = randomColor();
            ctx.lineWidth = random(2, 7);
            
            ctx.save();
            ctx.translate(width / 2, height / 2);
            ctx.rotate(random(0, Math.PI * 0.5));
            ctx.translate(width / -2, height / - 2);
            
        
        
            ctx.strokeRect(x, y, size, size);
        
            ctx.restore();
        
        
            ctx.beginPath();
            ctx.moveTo(random(0, width), random(0, height));
            ctx.lineTo(random(0, width), random(0, height));
            ctx.lineTo(random(0, width), random(0, height));
            ctx.closePath();
            ctx.strokeStyle = randomColor();
            ctx.lineWidth = random(2, 7);
            ctx.stroke();
        
            ctx.beginPath();
            ctx.arc(random(40, width - 40 ), random(40, height - 40), random(10, 40), 0, Math.PI * 2);
            ctx.strokeStyle = randomColor();
            ctx.lineWidth = random(2, 7);
            ctx.stroke();
            }
    }
});

function random(min, max) {
    return min + Math.random() * (max - min);
}

function randomColor() {
    return `hsla(${random(0, 360)} 100% 75% / 0.75)`;
}