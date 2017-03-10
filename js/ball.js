var Ball = (function () {
    var drawBall = function () {
        canvas.beginPath();
        canvas.arc(ballX,ballY,5,0,2*Math.PI);
        canvas.fillStyle = "blue";
        canvas.fill();
        canvas.closePath();
    };
    return{
        drawBall : drawBall
    };
})();
