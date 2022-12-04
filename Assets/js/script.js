//Countdown timer for quiz
var timer = document.querySelector("#timer");
//function to start the countdown
function startCountdown() {
    let counter = 5; //TODO: Update total time

    var timeInterval = setInterval(function() {
        if (counter > 1) {
            countdown.textContent = counter + " seconds remaining";
            counter--;
        } else if (counter === 1) {
            countdown.textContent = counter + " second remaining";
            counter--;
        } else {
            countdown.textContent = "Time is up!";
            clearInterval(timeInterval);
            //TODO: add function to move to completed quiz setion
            //TODO: add function to increase time more when answer is incorrect
            //TODO: add funtion to hide/unhide quizContainer when quiz is started/finished
        }
    }, 1000);
}

countdown.addEventListener("click", startCountdown);


//Get question content
const question = document.getElementById("question");
//Get answer content
var options = Array.from(document.getElementsByClassName("option"));

let currentQuestion = {}; //will be an object
let score = 0;
let questionCounter = 0; //what question are you on?
let availableQuestions = [] //full question set, take questions out of available array to give new questions

//List of questions
let questions = [
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

//CONSTANTS
const MAX_QUESTIONS = 4;

startGame = function(){
    questionCounter = 0; //always start at 0
    score = 0;
    availableQuestions = [...questions]; //copy all questions from the question array, spreadout by new arrays
    console.log(availableQuestions);
    getNewQuestion();
}

getNewQuestion = function() {
    questionCounter++;
    //get random question from available questions index
    const randomQuestion = Math.floor(Math.random() * availableQuestions.length);
    console.log(randomQuestion);
    currentQuestion = availableQuestions[randomQuestion]; //pulls an available question out of the questions array
    question.innerText = currentQuestion.question; //prints the selected question in HTML on the page

    //pull our options
    options.forEach(option => {
        const number = option.dataset["number"]; //will move through our options and pull the dataset option number
        option.innerText = currentQuestion["option" + number]; //updates the property based on the data number 
    });
};


//calls the startGame function
startGame();