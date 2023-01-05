const anchor = document.getElementById('anchor');
const rect = anchor.getBoundingClientRect();
const anchorX = rect.left + rect.width/2;
const anchorY = rect.top + rect.height/2;
const eyes = document.getElementsByClassName("eyes");

let rectDocument = document.documentElement.getBoundingClientRect();
let maxChangeX = Math.abs(rectDocument.width - anchorX);
let maxChangeY = Math.abs(rectDocument.height - anchorY);
let wUnit = maxChangeX / 12;
let hUnit = maxChangeY / 2;

window.addEventListener("mousemove", e => {
    const mouseX = e.clientX;
    const mouseY = e.clientY;

    let radians =  Math.atan2(mouseY - anchorY, mouseX - anchorX);
    let angleDeg = radians * (180/Math.PI) * -1;

    let wMove = (mouseX - anchorX) / wUnit;
    let hMove = (mouseY - anchorY) / hUnit;
    for (let eye of eyes) {
        eye.style.transform = `translate(${wMove}px,${hMove}px)`;
        anchor.style.filter = `hue-rotate(${angleDeg}deg)`;
    }
});

window.addEventListener("resize", e => {
    rectDocument = document.documentElement.getBoundingClientRect();
    maxChangeX = Math.abs(rectDocument.width - anchorX);
    maxChangeY = Math.abs(rectDocument.height - anchorY);
    wUnit = maxChangeX / 10;
    hUnit = maxChangeY / 2;
});
