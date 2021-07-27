'use strict';
/*------------------------------------------------------------------------------
1. Inside the `index.js`, complete the `addCurrentTime` to add the current time 
  to the webpage. Make sure it's written in the HH:MM:SS notation (hour, minute,
  second). Use `setInterval()` to make sure the time stays current.
2. Have the function execute when it's loading in the browser.
------------------------------------------------------------------------------*/
function addCurrentTime() {
  const currentDate = new Date();
  const timeDisplay = document.querySelector('#time-display');
  const currentTime = `${currentDate.getHours()}:${currentDate.getMinutes()}:${currentDate.getSeconds()}`;
  const timeText = (timeDisplay.textContent = `${currentTime}`);
  return timeText;
}

// TODO execute `addCurrentTime` when the browser has completed loading the page
window.addEventListener('load', () => {
  setInterval(addCurrentTime, 500);
});
