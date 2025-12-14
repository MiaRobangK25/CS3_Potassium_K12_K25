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

        let startBtn = document.getElementById('start');
    let stopBtn = document.getElementById('stop');
    let resetBtn = document.getElementById('reset');
    let minute = 0;
    let second = 0;
    let count = 0;
    startBtn.addEventListener('click', function () {
        timer = true;
        stopWatch();
    });
    stopBtn.addEventListener('click', function () {
        timer = false;
    });
    resetBtn.addEventListener('click', function () {
        timer = false;
        minute = 0;
        second = 0;
        count = 0;
        document.getElementById('min').innerHTML = "00";
        document.getElementById('sec').innerHTML = "00";
        document.getElementById('count').innerHTML = "00";
    });

    function stopWatch() {
        if (timer) {
            count++;

            if (count == 100) {
                second++;
                count = 0;
            }

            if (second == 60) {
                minute++;
                second = 0;
            }

            let minString = minute;
            let secString = second;
            let countString = count;

            if (minute < 10) {
                minString = "0" + minString;
            }

            if (second < 10) {
                secString = "0" + secString;
            }

            if (count < 10) {
                countString = "0" + countString;
            }

            document.getElementById('min').innerHTML = minString;
            document.getElementById('sec').innerHTML = secString;
            document.getElementById('count').innerHTML = countString;
            setTimeout(stopWatch, 10);
        }
    }