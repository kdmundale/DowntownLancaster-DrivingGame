const mileadge = document.querySelector(".mileadge");
const startScreen = document.querySelector(".startScreen");
const gameArea = document.querySelector(".gameArea");
const deathScreen = document.querySelector(".deathScreen");

let player = {
  speed: 5,
  delay: 3000,
  safe: true
};

let death = ['Really?\nThat was pathetic.\n' ,
            'Wow, you suck.\n I mean, we weren\'t even going that fast!\nYou only made it\n' ,
            'Ok. Not terrible.\n You dodged a few potholes, stayed on the road...\nBut you\'re still not driving me anywhere.\n' ,
            'Alright now, Tokyo Drift.\nI\'d trust you with a lowrider\non Prince Street!\n' ];

const button = document.querySelector(".start");
button.addEventListener("click",start);

const restart = document.querySelector(".respawn");
restart.addEventListener("click",reload);
let position = [10, 15, 20, 30, 45, 50, 55, 60, 70, 80];
let miles =0;

function reload() {
  window.location.reload();
}

let keys = {
    ArrowUp: false,
    ArrowDown: false,
    ArrowRight: false,
    ArrowLeft: false
};

document.addEventListener("keydown", pressOn);
document.addEventListener("keyup", pressOff);

function moveLines() {
      let lines = document.querySelectorAll(".line");
      lines.forEach(function (item) {
      if (item.y >= window.innerHeight) {
          item.y -= window.innerHeight;
      }
      item.y += player.speed;
      item.style.top = item.y + "px";
      })
      let lines2 = document.querySelectorAll(".line2");
      lines2.forEach(function (item) {
      if (item.y >= window.innerHeight) {
          item.y -= window.innerHeight;
      }
      item.y += player.speed;
      item.style.top = item.y + "px";
    });
  }

function movePotholes() {
    let potholes = document.querySelectorAll(".potholes");
    potholes.forEach(function (item) {
        if (item.y >= window.innerHeight) {
            item.y -= window.innerHeight;
        }
        item.y += player.speed;
        item.style.top = item.y + "px";
        });
    let car = document.querySelector(".car");
    potholes.forEach(function (item) {
         if (isCollide (car, item)) {
            player.safe = false;
            console.log(player.safe);
            console.log("pothole collision");
            gameArea.classList.add("hide");
            deathScreen.classList.remove("hide");
            mileadge.style.display= "none";
            let result = document.getElementById("result");

              if (miles < 1) {
                result.innerText = death[0]+ miles + ' miles';
              }

              else if (miles == 1) {
                result.innerText = death[0]+ miles + ' mile';
              }

              else if (1 < miles && miles < 10) {
                result.innerText = death[1] + miles + ' miles';
              }

              else if (10 <= miles && miles < 25) {
                result.innerText = death[2] + miles + ' miles';
              }

              else {
                result.innerText = death[3] + miles + ' miles';
              }
          }
        });
}

function moveTrees() {
    let trees = document.querySelectorAll(".trees");
    trees.forEach(function (item) {
        if (item.y >= window.innerHeight) {
            item.y -= window.innerHeight;
        }
        item.y += player.speed;
        item.style.top = item.y + "px";
        });
    let trees2 = document.querySelectorAll(".trees2");
    trees2.forEach(function (item) {
        if (item.y >= window.innerHeight) {
            item.y -= window.innerHeight;
        }
        item.y += player.speed;
        item.style.top = item.y + "px";
        });
    let car = document.querySelector(".car");
    trees.forEach(function (item) {
         if (isCollide (car, item)) {
            player.safe = false;
            console.log(player.safe);
            console.log("tree collision");
            gameArea.classList.add("hide");
            deathScreen.classList.remove("hide");
            mileadge.style.display= "none";
            let result = document.getElementById("result");

              if (miles < 1) {
                result.innerText = death[0]+ miles + ' miles';
              }

              else if (miles == 1) {
                result.innerText = death[0]+ miles + ' mile';
              }

              else if (1 < miles && miles < 10) {
                result.innerText = death[1] + miles + ' miles';
              }

              else if (10 <= miles && miles < 25) {
                result.innerText = death[2] + miles + ' miles';
              }

              else {
                result.innerText = death[3] + miles + ' miles';
              }
          }
        });
    trees2.forEach(function (item) {
         if (isCollide (car, item)) {
            player.safe = false;
            console.log(player.safe);
            console.log("tree collision");
            gameArea.classList.add("hide");
            deathScreen.classList.remove("hide");
            mileadge.style.display= "none";
            let result = document.getElementById("result");

              if (miles < 1) {
                result.innerText = death[0]+ miles + ' miles';
              }

              else if (miles == 1) {
                result.innerText = death[0]+ miles + ' mile';
              }

              else if (1 < miles && miles < 10) {
                result.innerText = death[1] + miles + ' miles';
              }

              else if (10 <= miles && miles < 25) {
                result.innerText = death[2] + miles + ' miles';
              }

              else {
                result.innerText = death[3] + miles + ' miles';
              }
          }
        });
}

let goFast = Date.now();
let go = Date.now();

function playGame() {
if (player.safe == true) {
  let old = document.querySelector(".potholes");
    if (old.y > (Math.max(500,window.innerHeight))){
      for(let x=0; x<1; x++){
          let div = document.createElement('div');
          div.classList.add("potholes");
          div.y= 10;
          div.style.top = (x*10) + "px";
          div.style.left = position[(Math.floor(Math.random()*10))] + "%";
          gameArea.replaceChild(div, old);
          miles++;
          mileadge.textContent = "MILES DRIVEN: "+ miles ;
          console.log(miles);
      }
    }

  let car = document.querySelector(".car");

    let active = false;
    let currentX;
    let currentY;
    let initialX;
    let initialY;
    let xOffset = 0;
    let yOffset = 0;

    gameArea.addEventListener("touchstart", dragStart, false);
    gameArea.addEventListener("touchend", dragEnd, false);
    gameArea.addEventListener("touchmove", drag, false);

    gameArea.addEventListener("mousedown", dragStart, false);
    gameArea.addEventListener("mouseup", dragEnd, false);
    gameArea.addEventListener("mousemove", drag, false);

    function dragStart(e) {
      if (e.type === "touchstart") {
        initialX = e.touches[0].clientX - xOffset;
        initialY = e.touches[0].clientY - yOffset;
      } else {
        initialX = e.clientX - xOffset;
        initialY = e.clientY - yOffset;
      }

      if (e.target === car) {
        active = true;
      }
    }

    function dragEnd(e) {
      initialX = currentX;
      initialY = currentY;

      active = false;
    }

    function drag(e) {
      if (active) {

        e.preventDefault();

        if (e.type === "touchmove") {
          currentX = e.touches[0].clientX - initialX;
          currentY = e.touches[0].clientY - initialY;
        } else {
          currentX = e.clientX - initialX;
          currentY = e.clientY - initialY;
        }

        xOffset = currentX;
        yOffset = currentY;

        setTranslate(currentX, currentY, car);
      }
    }

    function setTranslate(xPos, yPos, el) {
      el.style.transform = "translate3d(" + xPos + "px, " + yPos + "px, 0)";
    }

  moveLines();
  movePotholes();
  moveTrees();
  if (player.speed < 25){
    let elapsed = -(goFast-Date.now());
        if (elapsed > player.delay){
          player.speed++;
          player.delay-=75;
          goFast = Date.now();
          }
  } else {
    player.speed = 20;
    player.delay = 1400;
  }

  let road = gameArea.getBoundingClientRect();
  let vehicle = car.getBoundingClientRect();
    if(player.start) {
        if (keys.ArrowUp && player.y > road.top){
          player.y -= player.speed;
        } else if (keys.ArrowDown && player.y < road.bottom){
          player.y += player.speed;
        } else if (keys.ArrowLeft && player.x > 0) {
            player.x -= player.speed;
        } else if (keys.ArrowRight && player.x < (road.width - vehicle.width)){
            player.x += player.speed;
        }
    car.style.left = player.x + "px";
    car.style.top = player.y + "px";


    window.requestAnimationFrame(playGame);
  }
} else if (player.safe == false) {
  console.log("collision dectected");
}
}

function pressOn(e) {
  e.preventDefault();
  keys[e.key] = true;
}

function pressOff(e) {
  e.preventDefault();
  keys[e.key] = false;
}

function start(){
    startScreen.classList.add("hide");
    gameArea.classList.remove("hide");
    mileadge.classList.remove("hide");
    mileadge.style.display= "inline";
    player.start=true;
      for(let x=0; x<7; x++){
        let div = document.createElement('div');
        div.classList.add("line");
        div.y= x*150;
        div.style.top = (x*150) + "px";
        gameArea.appendChild(div);
      }
      for(let x=0; x<7; x++){
        let div = document.createElement('div');
        div.classList.add("line2");
        div.y= x*150;
        div.style.top = (x*150) + "px";
        gameArea.appendChild(div);
      }
      for(let x=0; x<10; x++){
        let div = document.createElement('div');
        div.classList.add("trees");
        div.y= x*150;
        div.style.top = (x*150) + "px";
        gameArea.appendChild(div);
      }
      for(let x=0; x<10; x++){
        let div = document.createElement('div');
        div.classList.add("trees2");
        div.y= x*150;
        div.style.top = (x*150) + "px";
        gameArea.appendChild(div);
      }
    let div = document.createElement('div');
    div.classList.add("potholes");
    div.y= 10;
    div.style.top =10 + "px";
    div.style.left = position[(Math.floor(Math.random()*10))] + "%";
    gameArea.appendChild(div);

    window.requestAnimationFrame(playGame);
    let car = document.createElement("div");
    car.setAttribute("class","car");
    gameArea.appendChild(car);
    player.x = car.offsetLeft;
    player.y = car.offsetTop;
}
function isCollide(a, b) {
  let aRect = a.getBoundingClientRect();
  let bRect = b.getBoundingClientRect();
  return !(
      (aRect.bottom < bRect.top) || (aRect.top > bRect.bottom) || (aRect.right < bRect.left) || (aRect.left > bRect.right));
}
