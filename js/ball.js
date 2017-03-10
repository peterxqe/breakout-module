var x =0 ,
    y = 0 ;

var Ball = (function () {
    var drawBall = function () {
        console.log("please show me");
        canvas.beginPath();
        canvas.arc(x,y,5,0,2*Math.PI);
        canvas.fillStyle = "blue";
        canvas.fill();
        canvas.closePath();
    };

    var setBallX = function (ballX) {
        x=ballX;
    };

    var setBallY = function (ballY) {
        y=ballY;
    };

    var getBallX = function () {
        return x;
    };

    var getBallY = function () {
        return y;
    };

    return{
        drawBall : drawBall,
        setBallX : setBallX,
        setBallY : setBallY,
        getBallX : getBallX,
        getBallY : getBallY
    };
})();
