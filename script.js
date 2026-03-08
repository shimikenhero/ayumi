/* 写真リスト */

const images=[
"2856C812-51A6-4756-8D68-9FCB0AA09324.JPEG",
"IMG_9268.JPEG",
"IMG_9325.JPEG",
"IMG_9772.JPEG"
];

let current=0;

const bg=document.getElementById("background");

function changeBackground(){

bg.style.backgroundImage=
"url('"+images[current]+"')";

current++;

if(current>=images.length){

current=0;

}

}

/* 最初 */

changeBackground();

/* 5秒ごと */

setInterval(changeBackground,5000);



/* タイプライター */

const text=
"4ヶ月記念日おめでとう。\nいつもありがとう。\nこれからもよろしくね。\n大好きだよ。";

let i=0;

const speed=80;

function typeWriter(){

if(i<text.length){

document.getElementById("message").innerHTML
+=text.charAt(i);

i++;

setTimeout(typeWriter,speed);

}

}

typeWriter();



/* ハート */

function createHeart(){

const heart=document.createElement("div");

heart.classList.add("heart");

heart.innerHTML="❤";

heart.style.left=Math.random()*100+"vw";

heart.style.bottom="-20px";

heart.style.fontSize=(15+Math.random()*25)+"px";

document.body.appendChild(heart);

setTimeout(()=>{

heart.remove();

},7000);

}

setInterval(createHeart,700);



/* キラキラ */

const canvas=document.getElementById("sparkle");

const ctx=canvas.getContext("2d");

canvas.width=window.innerWidth;

canvas.height=window.innerHeight;

let particles=[];

for(let i=0;i<80;i++){

particles.push({

x:Math.random()*canvas.width,
y:Math.random()*canvas.height,
r:Math.random()*2+1,
d:Math.random()*1

});

}

function draw(){

ctx.clearRect(0,0,canvas.width,canvas.height);

ctx.fillStyle="white";

ctx.beginPath();

for(let i=0;i<particles.length;i++){

let p=particles[i];

ctx.moveTo(p.x,p.y);

ctx.arc(p.x,p.y,p.r,0,Math.PI*2,true);

}

ctx.fill();

update();

}

function update(){

for(let i=0;i<particles.length;i++){

let p=particles[i];

p.y+=p.d;

if(p.y>canvas.height){

p.y=0;

p.x=Math.random()*canvas.width;

}

}

}

setInterval(draw,33);