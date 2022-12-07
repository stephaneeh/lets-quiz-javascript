var resultsContainer = document.querySelector(".results-container");
var scoreContainer = document.querySelector(".highscore-container");
var scoresList = document.querySelector(".scoreboard");

var highScores = JSON.parse(localStorage.getItem("highScores")) || [];

var tryAgain = document.querySelector(".try-again");
var clearScores = document.querySelector(".clearScores");  //button to clear the scores

// localStorage.setItem("highScores", JSON.stringify(highScores));



highScores.map(score => (
    console.log(${highScores.score}-${highScores.name});
))
//------ View the scoreboard
function viewScoreboard () {

    scoresList.innerHTML ="";
    console.log(highScores);

   for (var i = 0; i < highScores.length; i++) {
    var highScore = highScores[i];
    var li = document.createElement("li");
    li.innerHTML = `${highScores[i][0]}: ${highScores[i][1]}`;
    scoresList.appendChild(li);
  }

  init();
};



// This function is being called below and will run when the page loads.
function init() {
    // Get stored todos from localStorage
    var storedScores = JSON.parse(localStorage.getItem("highScores"));
    // If todos were retrieved from localStorage, update the todos array to it
    if (storedScores !== null) {
      todos = storedScores;
    }
    // This is a helper function that will render todos to the DOM
}

  viewScoreboard();



// //TODO: VIEW HIGHSCORE

// function highScores () {
//     //Will display the top 10 highscores
//     //Will display byttongs to try again, clear highscores or go home
//     //Try again goes to start game function
//     //go home goes to endQuiz function? maybe
// }