const size = 50;
const gap = 5;

function drawSticker(x, y, color, type) {
    ctx.save();
    ctx.fillStyle = color;
    ctx.strokeStyle = '#000';
    ctx.lineWidth = 2;

    ctx.translate(250, 250);
 
if (type === 'top') {
        ctx.transform(1, 0.5, -1, 0.5, 0, 0);
    } else if (type === 'front') {
        ctx.transform(1, 0.5, 0, 1, 0, 0);
    } else if (type === 'right') {
        ctx.transform(1, -0.5, 0, 1, 0, 0);
    }

    ctx.fillRect(x * (size + gap), y * (size + gap), size, size);
    ctx.strokeRect(x * (size + gap), y * (size + gap), size, size);
    ctx.restore();
