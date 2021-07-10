let c = document.getElementById('c').getContext('2d');
let tx = 50;
let ty = 250;
let penUsable = false;
let msg;
c.font = "30px Arial";
let text = false;

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

document.onkeydown = async function (event) {
    if (event.keyCode == 32) {
        jump();
    } else if (event.keyCode == 13){
        msg = prompt('Enter text');
        text = true;
        await new Promise(resolve => setTimeout(resolve, 2000));
        text = false;
    }
}
async function jump() {
    let numFrameUp = parseInt(prompt('Enter the number of frames he goes up'))
    let upvel = parseInt(prompt('Enter the up velocity'))
    let downframs = parseInt(prompt('Enter the number of falling frames'))
    let downvel = parseInt(prompt('Enter the down velocity'));
    for (var i = 0; i <= numFrameUp; i++) {
        ty += upvel;
        await new Promise(resolve => setTimeout(resolve, 10));
    }
    for (var i = 0; i <= downframs; i++) {
        ty -= downvel;
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
    if (text) {
        c.save();
        c.translate(tx, ty + 40);
        c.rotate(180);
        c.fillText(msg);
        c.restore();
    }
    requestAnimationFrame(main);
}
main();
