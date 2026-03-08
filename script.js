/* 背景写真リスト */

const images = [
"2856C812-51A6-4756-8D68-9FCB0AA09324.JPEG",
"IMG_9268.JPEG",
"IMG_9325.JPEG",
"IMG_9772.JPEG"
];

let current = 0;

function changeBackground(){

document.body.style.backgroundImage =
"url('" + images[current] + "')";

current++;

if(current >= images.length){

current = 0;

}

}

/* 最初の画像 */

changeBackground();

/* 5秒ごとに変更 */

setInterval(changeBackground,5000);


/* タイプライター文字 */

const text =
"4ヶ月記念日おめでとう。\nいつもありがとう。\nこれからもよろしくね。\n大好きだよ。";

let i = 0;

const speed = 80;

function typeWriter(){

if(i < text.length){

document.getElementById("message").innerHTML
+= text.charAt(i);

i++;

setTimeout(typeWriter, speed);

}

}

typeWriter();


/* ハート演出 */

function createHeart(){

const heart = document.createElement("div");

heart.classList.add("heart");

heart.innerHTML="❤";

heart.style.left = Math.random()*100+"vw";

heart.style.bottom = "-20px";

heart.style.fontSize = (15+Math.random()*25)+"px";

document.body.appendChild(heart);

setTimeout(()=>{

heart.remove();

},6000);

}

setInterval(createHeart,600);