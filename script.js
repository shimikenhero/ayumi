const text = "4ヶ月記念日おめでとう。\nいつもありがとう。\nこれからもよろしくね。\n大好きだよ。";

let i = 0;
const speed = 80;

function typeWriter(){

    if(i < text.length){

        document.getElementById("message").innerHTML += text.charAt(i);

        i++;

        setTimeout(typeWriter, speed);

    }

}

typeWriter();


// ハート演出

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