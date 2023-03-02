let divButton = document.querySelector("#divForButton");
let button = document.querySelector("#startButton");
let divGame = document.querySelector("#secondDiv");
let divGameOver = document.querySelector("#gameOver");
let scoreDisplay = document.querySelector("#score");
let multDisplay = document.querySelector("#mult");
let nameOfPlayerOver = document.querySelector("#nameofplayer");
nameOfPlayerOver.style.display = "none";
let score = 0;
let mult = 1
let life = 10;
let nameee = "";
let scoreBase = document.querySelector("#scoreBase");
let ansScore = localStorage.getItem("score");
ansScoreConvert = JSON.parse(ansScore);
if (ansScoreConvert === null){
    ansScoreConvert = [];
}
let superduck = false;

let player = {
    nom : nameee,
    score : 0,
}


function controle(){
    let saisie =document.getElementById("nom").value;
    console.log(saisie);
    return saisie;
}

button.addEventListener("click", () => {
    if (controle().length >= 1){
        nameee = controle();
        player.nom = nameee;
        divButton.style.display = "none";
        divGame.style.display = "flex";
        startGame();
    }
})

function startGame(){
    divGame.addEventListener("click", (e) =>{
        if (e.target.className === "duck"){
            if (superduck === true){
                score+=mult*10
                scoreDisplay.innerHTML = score.toString();
                mult++;
                multDisplay.innerHTML = mult.toString()+"x";
                e.target.remove();
            }else {
                score += mult;
                scoreDisplay.innerHTML = score.toString();
                mult++;
                multDisplay.innerHTML = mult.toString() + "x";
                e.target.remove();
            }
        }else{
            life --;
            let bullets = document.querySelectorAll("#bullet");
            bullets[bullets.length-1].remove();
            mult = 1;
            multDisplay.innerHTML ="1x";
            if (life<=0){
                divGame.style.display = "none";
                divGameOver.style.display = "flex";
                clearInterval(a);
                a = null;
                nameOfPlayerOver.style.display ="flex";
                nameOfPlayerOver.innerHTML = nameee +" "+score.toString();
                localStorage.removeItem("score");
                player.score = score;
                ansScoreConvert.push(player);
                let ansJson = JSON.stringify(ansScoreConvert);
                localStorage.setItem("score",ansJson);
            }
        }
    })
    let a = setInterval(spawnDuck,1000);
}
function randomiser(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

function spawnDuck(){
    let x = randomiser(0,300);
    let y = 0
    let duck = document.createElement("img");
    if (randomiser(0,10)===0){
        superduck = true;
        duck.src='./assets/images/duck.png';
        duck.draggable = "false";
        duck.style.bottom = ("0px");
        duck.style.left = (x.toString()+"px");
        duck.className = "duck";
        duck.alt = "ERROR";
    }else{
    duck.src = "./assets/images/duck.gif";
    duck.draggable = "false";
    duck.style.bottom = ("0px");
    duck.style.left = (x.toString()+"px");
    duck.className = "duck";
    duck.alt = "ERROR";}
    divGame.insertAdjacentElement("beforeend",duck);
    let duration = randomiser(2000,3000)*(1/mult)*3;
    duck.animate([
        {
            transform : "translateY(0px) translateX(" + x + "px"+ ")",
        },
        {
            transform: 'translateY(' + -500+ 'px) translateX(' + randomiser(-100, 300) + 'px)'
        }
    ],  {
        duration : duration,
        iterations : 1

    });
    setTimeout(() => {
        duck.remove();
        if (life<=0){
            divGame.style.display = "none";
            divGameOver.style.display = "flex";
            if (a!=null){
            clearInterval(a);}
        }
    
    },duration);
}