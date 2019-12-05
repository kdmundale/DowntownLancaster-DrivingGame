
/* story 1 seeing car and obstacles on the road*/
const mileadge = document.querySelector(".mileadge");
const startScreen = document.querySelector(".startScreen");
const gameArea = document.querySelector(".gameArea");
const deathScreen = document.querySelector(".deathScreen");

const button = document.querySelector("Button")
button.addEventListener("click",start);



let player = {
  speed: 5
};
let keys = {
    ArrowRight: false
        ,ArrowLeft: false
        
};

document.addEventListener("keydown", pressOn);
document.addEventListener("keyup", pressOff);

function playGame() {
    let car = document.querySelector(".car");
    let road = gameArea.getBoundingClientRect();
    console.log(road);
    console.log(player.x);
    if(player.start) {
        if (keys.ArrowLeft && player.x > 0) {
            player.x -= player.speed;
        }
        if (keys.ArrowRight && player.x < road.width)
            player.x += player.speed;
    }
        car.getElementsByClassName.left = player.x + 'px';
        window.requestAnimationFrame(playGame);
    }


function pressOn(e) {
    e.perventDefault();
    keys[e.key] = true;
    console.log(keys);
}


function pressOff(e) {
    e.perventDefault();
    keys[e.key] = false;
    console.log(keys);
}

function start(){
  startScreen.classList.add("hide");
  gameArea.classList.remove("hide");
  player.start=true;
  window.requestAnimationFrame(playGame);
  let car = document.createElement("div");
  car.innerText= "car";
  car.setAttribute("class","car");
  gameArea.appendChild(car);
}














/* story 2 making the road and obstacles to scroll*/









 /* story 3A moving car from left to right with aroow keys*/











/* 3B knowing you have hit an obstacle*/











/* 4 barrier to keep player on the road*/











/* 5 scrolling speed increasing to increaes the difficulty of the game*/










/* 6 mileage counter*/












/* 7 rest the game*/


    
