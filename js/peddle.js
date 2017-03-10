var Peddle = (function () {
    var peddleX = 200;

    var drawPeddle = function () {
        canvas.fillRect(peddleX, 550, 100, 10);
        canvas.stroke();
    };

    var left = function () {
        peddleX = peddleX - 40;
        drawPeddle();
    };

    var right = function () {
        peddleX = peddleX + 40;
        drawPeddle();
    };

    var clear = function () {
        canvas.clearRect(peddleX,550,100,10);
    };

    var getPeddleX = function () {
        return peddleX;
    };

    return{
        drawPeddle : drawPeddle,
        left : left,
        right : right,
        clear : clear,
        getPeddleX : getPeddleX
    };

})();
