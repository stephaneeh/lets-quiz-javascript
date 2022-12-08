var resultsContainer = document.querySelector("#results-container");
var highscoreContainer = document.querySelector("#highscore-container");
var restartButton = document.querySelector("#try-again");
var clearButton = document.querySelector("#clear-scores");
//------highscore variables
var username = document.getElementById("username");
var submitButton = document.querySelector("#submit-button");
var finalScore = document.querySelector("#final-score");
var highScoresObjects = JSON.parse(localStorage.getItem("highScores")) || [];
var scoreboardCount = 5;
var scoreboardList = document.querySelector(".scoreboard");

function viewScoreboard() {
    for (let i = 0; i < highScoresObjects.length; i++) {
        var resultsDetails = `${highScoresObjects[i].name}` + " - " + `${highScoresObjects[i].score}` + " points";
       
        listItem = document.createElement("li");
        scoreboardList.appendChild(listItem);
        listItem.innerText = [i+1] + ". " + resultsDetails; 
    }   
}

clearButton.addEventListener("click", function() {
    localStorage.clear();
    window.location.reload();
   });

   viewScoreboard();
