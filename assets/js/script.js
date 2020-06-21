var startBtn = document.getElementById('start');
var scoreEl = document.getElementById('score');

function timer() {
    //initial time
    var timeLeft = 75;

    //user setInterval method
    var timeInterval = setInterval(function(){
        if (timeLeft > 0) {
            scoreEl.textContent = 'Score: ' + timeLeft;
            timeLeft--;
        } else {
            scoreEl.textContent = ''
            clearInterval(timeInterval);
        }
    }, 1000);
}

startBtn.onclick = timer;