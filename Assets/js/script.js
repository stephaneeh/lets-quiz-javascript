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
        }
    }, 1000);
}

timer.addEventListener("click", startCountdown);
// startCountdown();