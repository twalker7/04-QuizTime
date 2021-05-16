var countdownScreen = document.querySelector("#countdown-screen");



// timer countdown function 
var startCountDown = function(){
    var timeLeft = 59; 

    var timeInterval = setInterval(function(){
        if( timeLeft > 0){
            countdownScreen.textContent = ":" + timeLeft;
            timeLeft--;
        }else{
            countdownScreen.textContent = "TIME UP!";
            document.clearInterval(timeInterval);
    
        }
    }, 1000);
}

//starts the overall game -- including timer 
var startGame = function(){
    startCountDown();
}

var startButton = document.querySelector("#start-game");

// start button is rigged to activate the countdown 
startButton.addEventListener("click", startGame);