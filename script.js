/* 写真 */

const images=[

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

let current=0;

const bg=document.getElementById("background");

function changeBackground(){

bg.style.opacity=0;

setTimeout(()=>{

bg.style.backgroundImage="url("+images[current]+")";
bg.style.opacity=1;

current++;

if(current>=images.length){
current=0;
}

},800);

}

changeBackground();
setInterval(changeBackground,5000);



/* タイプライター */

const text=
"4ヶ月記念日おめでとう。\nいつもありがとう。\nこれからもよろしくね。\n大好きだよ。";

let i=0;

function typeWriter(){

if(i<text.length){

document.getElementById("message").innerHTML+=text.charAt(i);

i++;

setTimeout(typeWriter,80);

}

}

typeWriter();



/* 🌸 桜 */

const canvas=document.getElementById("sakura");

const ctx=canvas.getContext("2d");

canvas.width=window.innerWidth;
canvas.height=window.innerHeight;

let petals=[];

for(let i=0;i<35;i++){

petals.push({

x:Math.random()*canvas.width,
y:Math.random()*canvas.height,

size:Math.random()*10+6,

speedY:Math.random()*0.8+0.3,
speedX:Math.random()*0.6-0.3,

rotation:Math.random()*360,
rotationSpeed:(Math.random()-0.5)*0.02

});

}

function drawPetal(p){

ctx.save();

ctx.translate(p.x,p.y);
ctx.rotate(p.rotation);

ctx.fillStyle="rgba(255,192,203,0.9)";

ctx.beginPath();

for(let i=0;i<5;i++){

ctx.rotate(Math.PI*2/5);

ctx.beginPath();

ctx.moveTo(0,0);

ctx.bezierCurveTo(
p.size*0.4,-p.size*0.4,
p.size*0.9,-p.size*0.2,
0,-p.size
);

ctx.bezierCurveTo(
-p.size*0.9,-p.size*0.2,
-p.size*0.4,-p.size*0.4,
0,0
);

ctx.fill();

}

ctx.restore();

}

function animate(){

ctx.clearRect(0,0,canvas.width,canvas.height);

for(let p of petals){

drawPetal(p);

p.y+=p.speedY;
p.x+=p.speedX;

p.rotation+=p.rotationSpeed;

if(p.y>canvas.height+20){

p.y=-20;
p.x=Math.random()*canvas.width;

}

}

requestAnimationFrame(animate);

}

animate();