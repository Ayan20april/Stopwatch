var stopwatch;
var startTime;
var running = false;
var display = document.getElementById("display");
var startButton = document.getElementById("start");
var stopButton = document.getElementById("stop");
var resetButton = document.getElementById("reset");

function start() {
  if (!running) {
    startTime = Date.now();
    stopwatch = setInterval(updateDisplay, 1000);
    running = true;
  }
}

function stop() {
  if (running) {
    clearInterval(stopwatch);
    running = false;
  }
}

function reset() {
  stop();
  display.textContent = "00:00:00";
}

function updateDisplay() {
  var currentTime = Date.now();
  var elapsedTime = currentTime - startTime;

  var hours = Math.floor(elapsedTime / (1000 * 60 * 60));
  var minutes = Math.floor((elapsedTime % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((elapsedTime % (1000 * 60)) / 1000);

  hours = padTime(hours);
  minutes = padTime(minutes);
  seconds = padTime(seconds);

  display.textContent = hours + ":" + minutes + ":" + seconds;
}

function padTime(time) {
  return time.toString().padStart(2, "0");
}

startButton.addEventListener("click", start);
stopButton.addEventListener("click", stop);
resetButton.addEventListener("click", reset);