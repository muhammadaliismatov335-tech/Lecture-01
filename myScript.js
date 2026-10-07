let myH1 = document.createElement("H1");
myH1.innerHTML = "Hello World!";
document.body.append(myH1);

let myCanvas = document.getElementById("myCanvas");
let ctx = myCanvas.getContext("2d");

let myBackground = new Image();
myBackground.src = "ground.png";

function myGame(){
    ctx.drawImage(myBackground, 0, 0);
}

let game = setInterval(myGame, 100);