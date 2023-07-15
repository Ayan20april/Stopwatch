/* for interval */
var stopwatch;

/* for store the starting time */
var startTime;

/* track whether the stopwatch currently running */
var running = false;

/* event listners are added. which trigger respective functions when clicked */ 
var display = document.getElementById("display");
var startButton = document.getElementById("start");
var stopButton = document.getElementById("stop");
var resetButton = document.getElementById("reset");

/* this function starts the stopwatch by setting startTime */
function start() {
  if (!running) {
    startTime = Date.now();
    /* update the display every second */
    stopwatch = setInterval(updateDisplay, 1000);
    running = true;
  }
}

/* this function stops the stopwatch */
function stop() {
  if (running) {
    /* using this for clearing the interval */
    clearInterval(stopwatch);
    running = false;
  }
}

/* This fuction stops the stopwatch and resets the display */
function reset() {
  stop();
  display.textContent = "00:00:00";
}

/* this fuction format the time into a hours, minutes and seconds */
function updateDisplay() {
  var currentTime = Date.now();
  var elapsedTime = currentTime - startTime;

  var hours = Math.floor(elapsedTime / (1000 * 60 * 60));
  var minutes = Math.floor((elapsedTime % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((elapsedTime % (1000 * 60)) / 1000);

  hours = padTime(hours);
  minutes = padTime(minutes);
  seconds = padTime(seconds);
  /* its update the display according this */
  display.textContent = hours + ":" + minutes + ":" + seconds;
}

/* This function ensures that the times values are always displays two digit */
function padTime(time) {
  return time.toString().padStart(2, "0");
}

startButton.addEventListener("click", start);
stopButton.addEventListener("click", stop);
resetButton.addEventListener("click", reset);
