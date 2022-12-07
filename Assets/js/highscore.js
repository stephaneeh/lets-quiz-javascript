var todoList = document.querySelector(".scoreboard");

var tryAgain = document.querySelector(".try-again");
var clearScores = document.querySelector(".clearScores");  //button to clear the scores


var highScores = JSON.parse(localStorage.getItem("highScores"));


console.log(highScores);


highScores.map(score => {
console.log(`${highScores.score}-${highScores.name}`);
})





// init()





// //TODO: VIEW HIGHSCORE

// function highScores () {
//     //Will display the top 10 highscores
//     //Will display byttongs to try again, clear highscores or go home
//     //Try again goes to start game function
//     //go home goes to endQuiz function? maybe
// }