    //------timer variables
let timeLeft = 75; //TODO: Update total time
var timerInterval = "";
        //------element variables
var timerEl = document.querySelector("#timer");
var startButton = document.querySelector("#start-button");
var homeContainer = document.querySelector("#home-container");
var questionContainer = document.querySelector("#question-container");
var resultsContainer = document.querySelector("#results-container");
var highscoreContainer = document.querySelector("#highscore-container");
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
var highScores = JSON.parse(localStorage.getItem("highScores")) || [];

    
    //------question list TODO: update questions
    var questions = [
        {
            question: "Which of the below is not a JavaScript Data Type?",
            option1: "Number",
            option2: "String",
            option3: "Unspecified",
            option4: "Object",
            answer: 3 //index of options that is the answer
        },
        {
            question: "What would you use to add a comment to your Javascript?",
            option1: "//",
            option2: "/* */",
            option3: "<-- -->",
            option4: "///",
            answer: 1 //index of options that is the answer
        },
        {
            question: "Which is the correct operator to use when comparing 2 operands for equality in value only?",
            option1: "===",
            option2: "!=",
            option3: "=",
            option4: "==",
            answer: 4 //index of options that is the answer
        },
        {
            question: "Select the option below which is not a valid JavaScript loop structure?",
            option1: "for/in",
            option2: "if/then",
            option3: "while",
            option4: "if/else",
            answer: 2//index of options that is the answer
        },
        {
            question: "What is the DOM?",
            option1: "Documentation Of Methods",
            option2: "Data Of Measurements",
            option3: "Document Object Model",
            option4: "Details Only Modals",
            answer: 3//index of options that is the answer
        },
    ]
    
    
    function startQuiz () {
        questionCounter = 0; //always start at 0
        score = 0;
        availableQuestions = [...questions]; //copy all questions from the question array, spreadout by new arrays
        questionContainer.style.display = "block ";
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
                timeLeft = 0;
            }
        }, 1000);
        timer.endTimer = endTimer;
        function endTimer() {
          clearInterval(timeInterval);
          timerEl.textContent = "Time is up!";
        }
      };
    function getQuestions() {
    
        if(availableQuestions.length === 0 ) {
            timer.endTimer();
            endQuiz();
        } else {
            questionCounter++;
            currentQuestion = availableQuestions[randomQuestion]; 
            //pulls an available question out of the questions array
            question.innerText = currentQuestion.question; 
            //prints the selected question in HTML on the page
            getOptions();
        }
    }
    
    function getOptions () {
        options.forEach(option => {
            const number = option.dataset["number"]; 
            option.innerText = currentQuestion["option" + number]; 
        });
        availableQuestions.splice(randomQuestion, 1);
    
        acceptingAnswer = true; 
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
                const correctAnswer = currentQuestion.answer;

                //updates the color of the choice depending on the outcome
                var optionResult = "incorrect";
                    timeLeft = timeLeft - 10;    
                if (selectedAnswer == currentQuestion.answer) {
                        optionResult = "correct";
                        selectedChoice.classList.add(optionResult);
                        timeLeft = timeLeft + 10;    
                    }                
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
        questionContainer.style.display = "none ";
        resultsContainer.style.display = "flex";
        saveScore();
    }
    
    //------ save score in localStorage
    function saveScore() {
        finalScore.innerText = "Your score is " + timeLeft + " seconds";
    }
    //make submit button valid once details added to username
    username.addEventListener('keyup', () => {
        submitButton.disabled = !username.value;
    });
    
    submitButton.addEventListener("click", function(event) {
         event.preventDefault();
         var score = {
            score: timeLeft,
            // score: Math.floor(Math.random() * 100), //FOR TESTING SORT, REMOVE ONCE COMPLETE
            name: username.value,
        };
    
        highScores.push(score); //add scores to array
        username.value = ""; //clears input field
        highScores.sort((a,b) => b.score - a.score); //sort score ascending
        highScores.splice(5); //remove after index 5
        localStorage.setItem("highScores", JSON.stringify(highScores));    
        
        window.location.href = "../pages/highscore.html";
     });
    
    startQuiz();