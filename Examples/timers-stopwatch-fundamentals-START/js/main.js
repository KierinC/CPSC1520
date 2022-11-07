/*
Timer Fundamentals
1. Select All of the button elements and the lap elements.
2. Add an event listener for the start button.
3. Create variables for the currentTime, a isStopWatchRunning and the timerInterval
4. create a function named "startTimer" to start the interval.
    - set the isStopWatchRunning to true
    - use setInterval to set the "timerInterval" button
        - set the "time interval" or "delay" to 10
    - in the setInterval callback function call clearInterval if
      isStopWatchRunning is false.
5. create function named setTimerValue and display it on the page.
    - make it more readable.
6. in the stop button set the isStopWatchRunning to false.
    - observe the page how the timer stops.
    - if you click start, the timer continues!
7. Create a function to add new lap.
    - get the lap time which is the current lap time minus the last lap time.
    - display it on the page with the following html (in all maps section)
         <li class="list-group-item">Lap CURRENT LAP: CURRENT LAP TIME</li>
    - increase the currentLap
    - add the lastLaptime

8. On the add lap event listener call the function above.
*/

let stopBtn = document.querySelector('.stop');
let startBtn = document.querySelector('.start');
let lapBtn = document.querySelector('.lap');
let resetBtn = document.querySelector('.reset');
let timerSeconds = document.querySelector('.timer-value');
let allLaps = document.querySelector('.all-laps');

let timerInterval;
let currentTime = 0;
let currentLap = 1;
let lastLaptime = 0;
let isStopWatchRunning = false;

startBtn.addEventListener('click', () => {
    if (!isStopWatchRunning) {
        startTimer();
    }
});

stopBtn.addEventListener('click', () => {
    if (isStopWatchRunning) {
        clearInterval(timerInterval);
        isStopWatchRunning = false;
    }
});

lapBtn.addEventListener('click', () => {
    let lapTime = getReadableTIme(currentTime - lastLaptime);

    allLaps.innerHTML += `<li class="list-group-item">Lap ${currentLap}: ${lapTime}</li>`;

    currentLap++;
    lastLaptime = currentTime;
});

resetBtn.addEventListener('click', () => {
    reset();
})


function getReadableTIme(time) {
    return `${Math.floor(time / 100)}:${time % 100}`
}

function setTimer(time) {
    timerSeconds.innerHTML = getReadableTIme(time);
}

function startTimer() {
    isStopWatchRunning = true;
    timerInterval = setInterval(
        () => {
            currentTime += 1;
            setTimer(currentTime);
        }, 10
    );
}

function reset() {
    clearInterval(timerInterval);
    currentTime = 0;
    currentLap = 1;
    lastLaptime = 0;
    isStopWatchRunning = false;
    allLaps.innerHTML = '';
    timerSeconds.innerHTML = '0:00';
}