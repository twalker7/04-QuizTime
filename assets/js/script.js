var countdownScreen = document.querySelector("#countdown-screen"); // shows seconds left 
//start button 
var startButton = document.querySelector("#start-game-button");  //start button 
var nextButton = document.querySelector("#next-button"); // next button to got to next question set 

//question display text connected to variable 
var questionPrompt = document.querySelector("#question-text");
//answer buttons below question assigned variables 
var choice1button = document.querySelector("#choice1-button");
var choice2button = document.querySelector("#choice2-button");
var choice3button = document.querySelector("#choice3-button");
var choice4button = document.querySelector("#choice4-button");
//score from current game 
var currentScore = 0;
var currentScoreDisplay = document.querySelector("#currentScoreDisplay");
currentScoreDisplay.textContent = currentScore;

//High Scores Log 
var highscoresArr= [];
// Players name variable perpared 
var currentPlayerName;
//the timecut
var timeCut = 0;
// timer countdown function with external/global timeLeft variable 
var timeLeft = 59;
var startCountDown = function(){
  

    var timeInterval = setInterval(function(){
        if( timeLeft > 0 && timeCut === 0){
            countdownScreen.textContent = ":" + timeLeft;
            timeLeft--;
        }else{
            countdownScreen.textContent = timeLeft;
            clearInterval(timeInterval);
    
        }
    }, 1000);
}


 // Array of question-answer objects
 var questionsArray = [ 
    {
        question: "1. what operator symbol is used for multiplication?",
        choices: ["+","x", "*", "/"], //the correct value will be at choices[answerIndex]
        answerIndex: 2
    
    }, 
    {
        question: "2. How many bytes are in one integer?",
        choices: ["8","2", "1","4"],
        answerIndex: 3
    
    },
    {
        question: "3. Which of these is the increment operator? ",
        choices: ["--", "++", "-=", "/="],
        answerIndex: 1
    
    },
    {
        question: "4. Which data type can be used to store multiple values?",
        choices: ["double", "long", "array", "boolean"],
        answerIndex: 2
    
    },
    {
        question: "5. What is the most popular programming language for web development?",
        choices: ["Python", "JavaScript", "C++", "Java"],
        answerIndex: 1
    
    },
    {
        question: "6. How many bytes are in single char?",
        choices: ["1", "2", "4", "8"],
        answerIndex: 0
    
    },
    {
        question: "7. Which operator is used to retrieve a remainder value?",
        choices: ["/", "//", "%", "->"],
        answerIndex: 2    
    
    },
 ];


var gameToken = 0;
//starts the overall game -- including timer 
 var startGame = function(){
     gameToken++;
     if(gameToken > 1){
         return false;
     }
    alert("the quiz has begun!");
    startCountDown(); // countdown timer is activated;
    questionPush();


}
var names = "shit";
// function pushes to next question slide -- quesionCount keeps track of which set of questions and prevents out of bounds
var questionCount = 0 ;
var questionPush = ()=>{
    if(gameToken < 1){
        alert("start the game first!");
        return false;
    }
     console.log("questionPush button pressed");
     if(questionCount < questionsArray.length){
     

       questionPrompt.textContent = questionsArray[questionCount].question;
       choice1button.textContent = questionsArray[questionCount].choices[0];
       choice2button.textContent= questionsArray[questionCount].choices[1];
       choice3button.textContent= questionsArray[questionCount].choices[2];
       choice4button.textContent= questionsArray[questionCount].choices[3];  
      
       questionCount++;

       
     }else{
        timeCut++;
        questionCount++;
        currentPlayerName = prompt("You have completed the quiz! Insert your name") + " - score: " + currentScore + " with " + timeLeft + " seconds to spare";
        highscoresArr.push(currentPlayerName);
        var scoreLog = localStorage.setItem("highscores", JSON.stringify(highscoresArr));
        //localStorage.setItem("names", currentPlayerName);
         
     }
 }
// attach questionPush function to nextbutton -- nextButto will not work before startButton is pressed
nextButton.addEventListener("click", questionPush);

// start button is rigged to start game
startButton.addEventListener("click", startGame);


 //Functions to validate whether or not the correct button was pressed 

    var choiceChecker1 = function(){
        var correctRounds = [5];
    
        if(correctRounds.includes(questionCount - 1)){
            currentScore+=10; 
            questionPush();
        }else{
            console.log("nope");
            questionPush();
        }
        currentScoreDisplay.textContent = currentScore;
    }

    var choiceChecker2 = function(){
        var correctRounds = [2,4];
        
        if(correctRounds.includes(questionCount - 1)){
            currentScore+=10; 
            questionPush();
        }else{
            console.log("nope");
            questionPush();
        }
        currentScoreDisplay.textContent = currentScore;
}

var choiceChecker3 = function(){
        var correctRounds = [0,3,6];
        
        if(correctRounds.includes(questionCount - 1)){
            currentScore+=10; 
            questionPush();
        }else{
            console.log("nope");
            questionPush();
        }
        currentScoreDisplay.textContent = currentScore;
}
var choiceChecker4 = function(){
        var correctRounds = [1];
        if(correctRounds.includes(questionCount - 1)){
            currentScore+=10; 
            questionPush();
        }else{
            console.log("nope");
            questionPush();
        }
        currentScoreDisplay.textContent = currentScore;
}

//buttons connected to eventListeners for the above functions 
    choice1button.addEventListener("click",choiceChecker1);
    choice2button.addEventListener("click",choiceChecker2);
    choice3button.addEventListener("click",choiceChecker3);
    choice4button.addEventListener("click",choiceChecker4);


    // when game reaches the end question (answered) or the time is up -- the current score gets logged  -- name input pops up for it


    


    // high scores button functions but does not retrieve any more than the last "high score"
    var highscoresButton = document.querySelector("#highscores-button");
    highscoresButton.addEventListener("click", function(){
       // alert(localStorage.getItem("names"));
        alert(localStorage.getItem("highscores"));
    });