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
"4ヶ月記念日だよ!\nいつも一緒にいてくれてありがとう!\nこれからもたくさん思い出作っていこう!\n大好きだよ。";

let i=0;

function typeWriter(){

if(i<text.length){

const char=text.charAt(i);

if(char==="\n"){
document.getElementById("message").innerHTML+="<br>";
}else{
document.getElementById("message").innerHTML+=char;
}

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

// 花びらを50個に増加
for(let i=0;i<50;i++){

petals.push({

x:Math.random()*canvas.width,
y:Math.random()*canvas.height,

size:Math.random()*12+7,

speedY:Math.random()*0.6+0.2,
speedX:Math.random()*0.8-0.4,

rotation:Math.random()*360,
rotationSpeed:(Math.random()-0.5)*0.03,

opacity:Math.random()*0.7+0.3,
opacitySpeed:(Math.random()-0.5)*0.01

});

}

function drawPetal(p){

ctx.save();

ctx.globalAlpha=Math.min(1,Math.max(0,p.opacity));

ctx.translate(p.x,p.y);
ctx.rotate(p.rotation);

// グラデーション効果でより立体的に
const gradient=ctx.createRadialGradient(0,0,0,0,0,p.size);
gradient.addColorStop(0,"rgba(255,230,240,0.95)");
gradient.addColorStop(0.5,"rgba(255,192,203,0.85)");
gradient.addColorStop(1,"rgba(255,150,190,0.5)");

ctx.fillStyle=gradient;

// 5弁の花びら
for(let i=0;i<5;i++){

ctx.rotate(Math.PI*2/5);

ctx.beginPath();

ctx.moveTo(0,0);

ctx.bezierCurveTo(
p.size*0.45,-p.size*0.45,
p.size*1,-p.size*0.25,
0,-p.size*1.1
);

ctx.bezierCurveTo(
-p.size*1,-p.size*0.25,
-p.size*0.45,-p.size*0.45,
0,0
);

ctx.fill();

}

// 中心の円
ctx.globalAlpha=1;
ctx.fillStyle="rgba(255,200,220,0.7)";
ctx.beginPath();
ctx.arc(0,0,p.size*0.3,0,Math.PI*2);
ctx.fill();

ctx.restore();

}

function animate(){

ctx.clearRect(0,0,canvas.width,canvas.height);

for(let p of petals){

drawPetal(p);

p.y+=p.speedY;
p.x+=p.speedX;

p.rotation+=p.rotationSpeed;

p.opacity+=p.opacitySpeed;

// オパシティの反転
if(p.opacity>1 || p.opacity<0){
p.opacitySpeed*=-1;
}

if(p.y>canvas.height+20){

p.y=-20;
p.x=Math.random()*canvas.width;
p.opacity=Math.random()*0.7+0.3;

}

}

requestAnimationFrame(animate);

}

animate();

// ウィンドウリサイズ対応
window.addEventListener('resize',()=>{
canvas.width=window.innerWidth;
canvas.height=window.innerHeight;
});