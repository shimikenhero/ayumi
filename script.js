/* 写真リスト */

const images = [

"2856C812-51A6-4756-8D68-9FCB0AA09324.JPEG",
"IMG_9268.JPEG",
"IMG_9325.JPEG",
"IMG_9772.JPEG",

"IMG_9275.JPEG",
"IMG_9550.JPEG",
"IMG_9648.JPEG",
"IMG_9724.JPEG",
"IMG_9666.jpeg",
"IMG_9664.jpeg"

];

let current = 0;

const bg = document.getElementById("background");

function changeBackground(){

bg.style.opacity = 0;

setTimeout(()=>{

bg.style.backgroundImage = "url('" + images[current] + "')";

bg.style.opacity = 1;

current++;

if(current >= images.length){
current = 0;
}

},800);

}

/* 最初 */

changeBackground();

/* 5秒ごと */

setInterval(changeBackground,5000);



/* タイプライター */

const text =
"4ヶ月記念日おめでとう。\nいつもありがとう。\nこれからもよろしくね。\n大好きだよ。";

let i = 0;

const speed = 80;

function typeWriter(){

if(i < text.length){

document.getElementById("message").innerHTML += text.charAt(i);

i++;

setTimeout(typeWriter,speed);

}

}

typeWriter();



/* ハート */

function createHeart(){

const heart = document.createElement("div");

heart.classList.add("heart");

heart.innerHTML = "❤";

heart.style.left = Math.random()*100 + "vw";

heart.style.bottom = "-20px";

heart.style.fontSize = (15 + Math.random()*25) + "px";

document.body.appendChild(heart);

setTimeout(()=>{

heart.remove();

},7000);

}

setInterval(createHeart,700);



/* 🌸 桜エフェクト */

const canvas = document.getElementById("sparkle");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let petals = [];

for(let i=0;i<40;i++){

petals.push({

x:Math.random()*canvas.width,
y:Math.random()*canvas.height,
size:Math.random()*12+8,
speedY:Math.random()*1+0.5,
speedX:Math.random()*1-0.5,
rotate:Math.random()*360

});

}

function drawPetal(p){

ctx.save();

ctx.translate(p.x,p.y);
ctx.rotate(p.rotate);

ctx.fillStyle="rgba(255,182,193,0.9)";

ctx.beginPath();

ctx.moveTo(0,0);

ctx.bezierCurveTo(-p.size,-p.size,p.size,-p.size,0,p.size);
ctx.bezierCurveTo(-p.size,p.size,p.size,p.size,0,0);

ctx.fill();

ctx.restore();

}

function animate(){

ctx.clearRect(0,0,canvas.width,canvas.height);

for(let p of petals){

drawPetal(p);

p.y += p.speedY;
p.x += p.speedX;
p.rotate += 0.01;

if(p.y > canvas.height){

p.y = -20;
p.x = Math.random()*canvas.width;

}

}

requestAnimationFrame(animate);

}

animate();