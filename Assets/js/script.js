//------timer variables
let timeLeft = 80; //TODO: Update total time
var timerInterval = "";
//------element variables
var timerEl = document.querySelector("#timer");
var startButton = document.querySelector("#start-button");
var homeContainer = document.querySelector(".home-container");
var questionContainer = document.querySelector(".question-container");
var resultsContainer = document.querySelector(".results-container");
var highscoreContainer = document.querySelector(".highscore-container");
var restartButton = document.querySelector("#try-again");
var clearButton = document.querySelector("#clear-scores");
//------question variables
var question = document.getElementById("question");
var options = Array.from(document.getElementsByClassName("option"));
var acceptingAnswer = false; 
var currentQuestion = {}; //will be an object
var questionCounter = 0; //what question are you on?
var availableQuestions = [] //full question set, take questions out of available array to give new questions
var randomQuestion = Math.floor(Math.random() * availableQuestions.length);
//------highscore variables
var username = document.getElementById("username");
var submitButton = document.querySelector("#submit-button");
var finalScore = document.querySelector("#final-score");


//------question list TODO: update questions
var questions = [
    {
        question: "What is your favourite colour?",
        option1: "yellow",
        option2: "green",
        option3: "blue",
        option4: "red",
        answer: 3 //index of options that is the answer
    },
    {
        question: "What is your favourite animal?",
        option1: "monkey",
        option2: "lion",
        option3: "giraffe",
        option4: "elephant",
        answer: 1 //index of options that is the answer
    },
    {
        question: "Who is your favourite finding nemo character?",
        option1: "dory",
        option2: "nemo",
        option3: "marlin",
        option4: "bruce",
        answer: 4 //index of options that is the answer
    },
    {
        question: "What is your favourite number?",
        option1: "This is option 1",
        option2: "This is option 2",
        option3: "This is option 3",
        option4: "This is option 4",
        answer: 2//index of options that is the answer
    },
]

//------event listeners
//calls the startGame function
startButton.addEventListener("click", function(event) {
    event.preventDefault();
    startQuiz();
});

function startQuiz () {
    questionCounter = 0; //always start at 0
    score = 0;
    availableQuestions = [...questions]; //copy all questions from the question array, spreadout by new arrays
    console.log(availableQuestions); //TODO:: REMOVE AT THE END OF THIS
    homeContainer.style.display = "none";
    questionContainer.style.display = "block ";
    resultsContainer.style.display = "none";
    highscoreContainer.style.display = "none";
    timer();
    getQuestions();
}

//------start the quiz
function timer() {
    var timeInterval = setInterval(function() {
        if (timeLeft > 1) {
                timerEl.textContent = timeLeft + " seconds remaining";
                timeLeft--;
        } else {
            timerEl.textContent = "Time is up!";
            clearInterval(timeInterval);
        }
    }, 1000);
    timer.endTimer = endTimer;
    function endTimer() {
      clearInterval(timeInterval);
      timerEl.textContent = "Time is up!";
    }
  };
function getQuestions() {
    //TODO: take to end page once questions or timerEl is 0
    if(availableQuestions.length === 0) {
        timer.endTimer();
        endQuiz();
    } else {
        questionCounter++;
        //get random question from available questions index
        currentQuestion = availableQuestions[randomQuestion]; //pulls an available question out of the questions array
        question.innerText = currentQuestion.question; //prints the selected question in HTML on the page
        getOptions();
    }
}

function getOptions () {
    //pull our options
    options.forEach(option => {
        const number = option.dataset["number"]; //will move through our options and pull the dataset option number
        option.innerText = currentQuestion["option" + number]; //updates the property based on the data number 
    });
    availableQuestions.splice(randomQuestion, 1); //removes the question from the available questions array

    acceptingAnswer = true; //after we have loaded the question, users can answer
    checkResults();
}

//------check the answers
function checkResults () {
    //each time an option is selected
    options.forEach(option => {
        option.addEventListener("click", function(event) {
            if(!acceptingAnswer) return; //do nothing if we aren't ready for the game to start
            acceptingAnswer = false;
            const selectedChoice = event.target; //prints as string
            const selectedAnswer = selectedChoice.dataset["number"]; //prints as number

            console.log(selectedAnswer, currentQuestion.answer); //print elected answer and the correct answer    
            
            //updates the color of the choice depending on the outcome
            var optionResult = "incorrect";
                timeLeft = timeLeft - 10;    
            if (selectedAnswer == currentQuestion.answer) {
                    optionResult = "correct";
                }
                console.log(optionResult);

                selectedChoice.classList.add(optionResult);
                setTimeout(() => {
                    selectedChoice.classList.remove(optionResult);
                    getQuestions(); //once answered, move to next question
                }, 1000);
            });
        });
};

//------end the quiz
function endQuiz () {
    homeContainer.style.display = "none";
    questionContainer.style.display = "none ";
    resultsContainer.style.display = "flex";
    highscoreContainer.style.display = "none";
    saveScore();
}


var highScores = JSON.parse(localStorage.getItem("highScores")) || [];
var scoreboardCount = 5;

//TODO: SUBMIT HIGHSCORE
function saveScore() {
    finalScore.textContent = "Your score is " + timeLeft + " seconds";
}
submitButton.addEventListener("click", function(event) {
     event.preventDefault();
     var score = {
        score: timeLeft,
        name: username.value,
    };
    highScores.push(score); //add scores to array
    highScores.sort((a,b) => b.score - a.score); //sort score ascending
    highScores.splice(5); //remove after index 5

    viewScoreboard();
 });

function viewScoreboard () {



}







// //TODO: VIEW HIGHSCORE

// function highScores () {
//     //Will display the top 10 highscores
//     //Will display byttongs to try again, clear highscores or go home
//     //Try again goes to start game function
//     //go home goes to endQuiz function? maybe
// }


