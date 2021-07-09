let c = document.getElementById('c').getContext('2d');
let tx = 0;
let ty = 0;
let penUsable = false;
function translateTo(x, y) {
    if (penUsable) {
        c.lineTo(x+tx, y+ty);
    } else {
        c.moveTo(x+tx, y+ty);
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
    translateTo(-20, 30); 
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
