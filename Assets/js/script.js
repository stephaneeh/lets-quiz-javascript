//Countdown timer for quiz
var startquiz = document.querySelector("#startquiz");

function startCountdown(seconds) {
    let counter = 5; //TODO: Update total time

    var timeInterval = setInterval(function() {
        if (counter > 1) {
            timer.textContent = counter + " seconds remaining";
            counter--;
        } else if (counter === 1) {
            timer.textContent = counter + " second remaining";
            counter--;
        } else {
            timer.textContent = "Time is up!";
            clearInterval(timeInterval);
            //TODO: add function to move to completed quiz setion
        }
    }, 1000);
}

startCountdown();