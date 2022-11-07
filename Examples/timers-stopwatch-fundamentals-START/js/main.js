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
(function () {

})();