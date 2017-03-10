//peters module adventure
var c = document.getElementById("area");
var canvas = c.getContext("2d");
var ballX = 400;
var ballY = 500;
var peddleX = 380;
var brickX = 0;
var brickY = 0;
var goDown = false;
var randomNumber = 0;
var divide = 1;
var Game = (function () {
    //private
    var keyboardControl = function () {
        document.addEventListener('keydown', function(event) {
            if(event.keyCode == 37 || event.keyCode == 65) {
                //left arrow or A, slide right.
                peddleMove("right");
            }
            else if(event.keyCode == 39 || event.keyCode == 68) {
                //right arrow or D, slide left.
                peddleMove("left");
            }
        });
    }();

    var peddleMove = function (direction) {
        if (direction == "left"){
            if(peddleX <= 680) {
                peddleX += 40;
                console.log(peddleX);
            }
        }
        if (direction == "right"){
            if(peddleX >= 20) {
                peddleX -= 40;
                console.log(peddleX);
            }
        }
        canvas.clearRect(0,549, 800,100);
        peddle();
    };
    var ballMove = function () {
        if (ballY >= 20 && goDown == false) {
            ballY = ballY - 10;
            canvas.clearRect(ballX-7,ballY,14,16);

        }
        if(ballY <= 605 && goDown==true){
            ballY = ballY + 10;
            canvas.clearRect(ballX-7,ballY-20,20,16);
        }
        if(ballY == 540){
            goDown = false;
            randomNumber = Math.floor((Math.random() * 5) + 1);
            divide = Math.floor((Math.random() * 2) + 1);
        }
        if(ballY == 10){
            goDown = true;
            randomNumber = Math.floor((Math.random() * 5) + 1);
            divide = Math.floor((Math.random() * 2) + 1);
        }
        if(divide ==1){
            ballX = ballX - randomNumber;
        }
        if(divide ==2){
            ballX = ballX + randomNumber;
        }
        if(ballX <= 10){
            divide = 2;
        }
        if(ballX >= 790){
            divide = 1;
        }
        ball();

    };setInterval(function ballTimer(){ballMove()}, 30);

//public
    var ball = function () {
        canvas.beginPath();
        canvas.arc(ballX,ballY,5,0,2*Math.PI);
        canvas.fillStyle = "blue";
        canvas.fill();
        canvas.closePath();
    };

    var peddle = function () {
        canvas.fillRect(peddleX, 550, 100, 10);
        canvas.stroke();
    };

    var brick = function () {
        canvas.fillRect(brickX, brickY, 49, 29);
        canvas.stroke();
        brickX = brickX + 50;
        if (brickX >= 800){
            brickX = 0;
            brickY = brickY + 30;
        }
    };

    return {
        ball: ball,
        peddle: peddle,
        brick: brick
    };

})();
startGame();
function startGame() {
    Game.ball();
    Game.peddle();
    for (var i = 0; i < 64; i++) {
        Game.brick();
    }
}
