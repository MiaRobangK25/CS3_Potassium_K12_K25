// External JS file for page identification & stopwatch function (Page 2)

        function settingActivePage()
        {
            var links = document.querySelectorAll(".navbar a");
            var page = window.location.pathname.split("/").pop();
            
            for (i=0; i<links.length; i++)
            {
                links[i].classList.remove("active"); 
                
                if ((links[i].getAttribute("href") === page) || (page === "" && links[i].getAttribute("href") === "Q2WebsiteMainframe.html"))
                {
                    links[i].classList.add("active"); 
                }
            }
        }

        window.onload = settingActivePage(); 

        var headings = document.getElementsByClassName('toggle');

        for (var i = 0; i < headings.length; i++) 
        {
            headings[i].onclick = function() 
            {
                var content = this.nextElementSibling;
            
                if (content.style.display === 'none') 
                {
                    content.style.display = 'block';
                } 
                else 
                {
                    content.style.display = 'none';
                }
            }
        }
/* -------- 1) TIMER -------- */

    let timerInterval = null;
    // stores ID to help show went to STOP, PAUSE, or REPEAT
    let timerTime = 0;
    // stores total time in SECONDS --> js cus it's easier to work with,, just for TIMER (Countdown) 

    function startTimer() {
        if (!timerInterval) {
            // used !timerInterval so that multiple timers won't work at the same time 
            if (timerTime === 0) {
                const m = parseInt(document.getElementById("timerMinutes").value) || 0;
                const s = parseInt(document.getElementById("timerSeconds").value) || 0;
                timerTime = m * 60 + s;
            }
            // Receive data for the MM and SS, as this is similar to the GRADED 2 we did,,,, 
            // Computes timerTime as well for the minutes to seconds (for easier tracking)

            timerInterval = setInterval(() => {
            // runs the thing every one second as the interval
                if (timerTime <= 0) {
                    clearInterval(timerInterval);
                    timerInterval = null;
                    alert("Time's up!");
                    return;
                }
                timerTime--;
                updateTimerDisplay();
            }, 1000);
        }
    }

    function pauseTimer() {
        clearInterval(timerInterval);
        timerInterval = null;
    }
    // we gotta pause the timer... so the time is SAVED when PAUSED 

    function resetTimer() {
        pauseTimer();
        timerTime = 0;
        localStorage.removeItem("timerTime");
        updateTimerDisplay();
        document.getElementById("timerMinutes").value = "";
        document.getElementById("timerSeconds").value = "";
    }
    // here we put the code to RESET the timer..... 
    // sets the MM and the SS as blank again 

    function updateTimerDisplay() {
        const m = Math.floor(timerTime / 60);
        const s = timerTime % 60;

        document.getElementById("timerDisplay").textContent =
            `${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;

        localStorage.setItem("timerTime", timerTime);

    }
    // conversion of seconds to minutes, and the MM / SS stuff 
    // the .textContent makes sure that when you increase the values for MM and SS, it will not put it in the wrong position/place
    // also saving it from what I learned from graded task 2 

/* -------- 2) STOPWATCH -------- */

    let stopwatchInterval = null;
    // thiis also helps store the ID to help show went to STOP, PAUSE, or REPEAT
    let stopwatchTime = 0;
    // also stores total time in SECONDS,, just for STOPWATCH 


    function startStopwatch() {
        if (!stopwatchInterval) {
        // avoiding repeats dawg 
            stopwatchInterval = setInterval(() => {
                stopwatchTime++;
                updateStopwatchDisplay();
            }, 1000);
        // adjusts the display as welll && the same thing for the 1 second intervaal that increases
        }
    }

    function pauseStopwatch() {
        clearInterval(stopwatchInterval);
        stopwatchInterval = null;
    }
    // just making sure when u pause it still saaves from when u click it at that time 

    function resetStopwatch() {
        pauseStopwatch();
        stopwatchTime = 0;
        localStorage.removeItem("stopwatchTime");
        updateStopwatchDisplay();
    }
    // it resents everything to zero & the display as well. Although it pauses fiirst though 

    function updateStopwatchDisplay() {
        const m = Math.floor(stopwatchTime / 60);
        const s = stopwatchTime % 60;
    // same saame thing here, conversion, allat 

        document.getElementById("stopwatchDisplay").textContent =
            `${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
        localStorage.setItem("stopwatchTime", stopwatchTime);

    // this is added n the same as before just for formatting purposes z
    // also saving it frum what I learned from graded task 2
    }

    window.onload = () => {
        const savedTimer = localStorage.getItem("timerTime");
        const savedStopwatch = localStorage.getItem("stopwatchTime");

        if (savedTimer !== null) {
            timerTime = parseInt(savedTimer);
            updateTimerDisplay();
        }

        if (savedStopwatch !== null) {
            stopwatchTime = parseInt(savedStopwatch);
            updateStopwatchDisplay();
        }
    };