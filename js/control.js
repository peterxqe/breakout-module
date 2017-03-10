var Control = (function () {

    var keyboardControl = function () {
        document.addEventListener('keydown', function(event) {
            if(event.keyCode == 37 && Peddle.getPeddleX()!= 0|| event.keyCode == 65 && Peddle.getPeddleX()!= 0) {
                Peddle.clear();
                Peddle.left();

            }
            else if(event.keyCode == 39 && Peddle.getPeddleX()!= 720|| event.keyCode == 68 && Peddle.getPeddleX()!= 720) {
                Peddle.clear();
                Peddle.right();
            }
        });
    };
    return{
        keyboardControl : keyboardControl
    };

})();
