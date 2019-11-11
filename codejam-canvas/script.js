import { b, a } from './data.js'; 

let canvas = document.querySelector(".main__canvas"), ctx = canvas.getContext("2d");

let e4 = document.querySelector(".e4"), e32 = document.querySelector(".e32"), e256 = document.querySelector(".e256");
let img = new Image();
img.src = './assets/image.png';

let active = 0;

e4.addEventListener('click', () => {
    let  width = a[0].length, height = a.length, scale = canvas.width/height;
    e4.classList.add('active');
    if(active !== 0){
        active.classList.remove('active');
        active = e4;
    }  else active = e4;

    for(let row = 0; row < height; row++) {
        for(let col = 0; col < width; col++) { 
            ctx.fillStyle = '#' + a[row][col]; 
            ctx.fillRect(col * scale, row * scale, scale, scale); 
        }
    }
});


e32.addEventListener('click', () => {
    let  width = b[0].length, height = b.length, scale = canvas.width/height;
    e32.classList.add('active');
    if(active !== 0){
        active.classList.remove('active');
        active = e32;
    }  else active = e32;

    for(let row = 0; row < height; row++) {
        for(let col = 0; col < width; col++) { 
            ctx.fillStyle = `rgba(${b[row][col][0]}, ${b[row][col][1]}, ${b[row][col][2]})`; 
            ctx.fillRect(col * scale, row * scale, scale, scale); 
        }
    }
});


e256.addEventListener('click', () => {
    e256.classList.add('active');
    if(active !== 0){
        active.classList.remove('active');
        active = e256;
    }  else active = e256;
    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
});