document.addEventListener("DOMContentLoaded", () => {
  // Grab necessary elements
  const timeDisplay = document.getElementById("time-display");
  const startButton = document.getElementById("start-timer");
  const resetButton = document.getElementById("reset-timer");
  const breakMinus = document.getElementById("break-minutes");
  const breakPlus = document.getElementById("break-plus");
  const sessionMinus = document.getElementById("session-minutes");
  const sessionPlus = document.getElementById("session-plus");
  const sessionLengthDisplay = document.getElementById("session-length");

  let sessionMinutes = 25; // Default session time in minutes
  let sessionSeconds = 0; // Default session seconds
  let timerInterval; // Store interval ID
  let isTimerRunning = false; // Prevent multiple intervals

  // Function to update the time display
  function updateTimeDisplay(minutes, seconds) {
    timeDisplay.textContent = `${minutes < 10 ? "0" + minutes : minutes}:${
      seconds < 10 ? "0" + seconds : seconds
    }`;
  }

  function updateSessionLengthDisplay(minutes) {
    sessionLengthDisplay.textContent = minutes; // Update session length display
  }

  // Function to start the timer
  function startTimer() {
    if (isTimerRunning) return; // Prevent multiple intervals

    isTimerRunning = true;

    timerInterval = setInterval(() => {
      if (sessionSeconds === 0 && sessionMinutes > 0) {
        sessionMinutes--;
        sessionSeconds = 59;
      } else if (sessionSeconds > 0) {
        sessionSeconds--;
      }

      updateTimeDisplay(sessionMinutes, sessionSeconds);

      // Stop the timer when it reaches 00:00
      if (sessionMinutes === 0 && sessionSeconds === 0) {
        clearInterval(timerInterval);
        isTimerRunning = false;
        alert("Session Complete!");
        resetTimer();
      }
    }, 1000);
  }

  // Function to reset the timer
  function resetTimer() {
    clearInterval(timerInterval);
    isTimerRunning = false;
    sessionMinutes = 25; // Reset to default session time
    sessionSeconds = 0;
    updateTimeDisplay(sessionMinutes, sessionSeconds);
    updateSessionLengthDisplay(sessionMinutes);
  }

  function increaseSessionLength() {
    if (sessionMinutes < 60) {
      sessionMinutes += 5;
      updateTimeDisplay(sessionMinutes, sessionSeconds);
      updateSessionLengthDisplay(sessionMinutes);
    }
  }

  function decreaseSessionLength() {
    if (sessionMinutes > 5) {
      sessionMinutes -= 5;
      updateTimeDisplay(sessionMinutes, sessionSeconds);
      updateSessionLengthDisplay(sessionMinutes);
    }
  }

  function increaseBreakLength() {
    alert("feature comming soon");
  }

  function decreaseBreakLength() {
    alert("feature comming soon");
  }

  // Attach event listeners
  startButton.addEventListener("click", startTimer);
  resetButton.addEventListener("click", resetTimer);
  sessionPlus.addEventListener("click", increaseSessionLength);
  sessionMinus.addEventListener("click", decreaseSessionLength);
  breakPlus.addEventListener("click", increaseBreakLength);
  breakMinus.addEventListener("click", decreaseBreakLength);

  // Initialize the timer display
  updateTimeDisplay(sessionMinutes, sessionSeconds);
});
