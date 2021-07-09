let c = document.getElementById('c').getContext('2d');
let tx = 50;
let ty = 250;
let penUsable = false;
document.getElementById('c').style.transform = 'rotate(180deg)';
//oninput, myrange
document.getElementById('myRange').oninput = function () {
    tx = (this.value / 2);
}
document.getElementById('myYRange').oninput = function () {
    ty = (this.value / 2);
}
function translateTo(x, y) {
    if (penUsable) {
        c.lineTo(x+tx, y+ty);
    } else {
        c.moveTo(x+tx, y+ty);
    }
}

document.onkeydown = function (event) {
    if (event.keyCode == 32) {
        jump();
    }
}
async function jump() {
    let numFrameUp = prompt('Enter the number of frames he goes up')
    let upvel = prompt('Enter the up velocity')
    let downframs = prompt('Enter the number of falling frames')
    let downvel = prompt('Enter the down velocity');
    for (var i = 0; i <= numFrameUp; i++) {
        ty -= upvel;
        await new Promise(resolve => setTimeout(resolve, 10));
    }
    for (var i = 0; i <= downframs; i++) {
        ty += downvel;
        await new Promise(resolve => setTimeout(resolve, 10));
    }
}

function drawHuman() {
    c.beginPath();

    c.clearRect(0, 0, 1500, 500);

    penUsable = false; //drawing head
    translateTo(-40,-40);
    penUsable = true;
    translateTo(40, -40);
    translateTo(40, 40);
    translateTo(-40, 40);
    translateTo(-40, -40);

    penUsable = false; //eyes?
    translateTo(-20, -30); 
    penUsable = true;
    translateTo(-20, 20);
    penUsable = false;
    translateTo(20, -30);
    penUsable = true;
    translateTo(20, 20);
    
    penUsable = false;//chest
    translateTo(-4, -40);
    penUsable = true;
    translateTo(-4, -150);
    translateTo(-40, -200);
    translateTo(-4, -150);
    translateTo(40,-200);
    penUsable = false;
    translateTo(-4, -40);
    penUsable = true;
    translateTo(40, -120);
    penUsable = false;
    translateTo(-4, -40);
    penUsable = true;
    translateTo(-40, -120);

    c.stroke();
}
function main() {
    drawHuman();
    requestAnimationFrame(main);
}
main();
