function settingActivePage() {
    var links = document.querySelectorAll(".navbar a");
    var page = window.location.pathname.split("/").pop();

    for (let i = 0; i < links.length; i++) {
        links[i].classList.remove("active");

        if (
            links[i].getAttribute("href") === page ||
            (page === "" && links[i].getAttribute("href") === "Q2WebsiteMainframe.html")
        ) {
            links[i].classList.add("active");
        }
    }
}

/* ---------------- STORAGE ---------------- */

function getData(key) {
    return JSON.parse(localStorage.getItem(key)) || [];
}

function saveData(key, data) {
    localStorage.setItem(key, JSON.stringify(data));
}

function addData(key, value) {
    const data = getData(key);
    data.push(value);
    saveData(key, data);
}

function formatTime(seconds) {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
}

function getAverage(arr) {
    if (!arr.length) return 0;
    return Math.floor(arr.reduce((a, b) => a + b, 0) / arr.length);
}

/* ---------------- TIMER ---------------- */

let timerInterval = null;
let timerTime = 0;
let initialTimerTime = 0;

function startTimer() {
    if (!timerInterval) {
        if (timerTime === 0) {
            const m = parseInt(document.getElementById("timerMinutes").value) || 0;
            const s = parseInt(document.getElementById("timerSeconds").value) || 0;

            timerTime = m * 60 + s;
            initialTimerTime = timerTime;
        }

        timerInterval = setInterval(() => {
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

function saveTimer() {
    if (timerTime <= 0) return;

    addData("timerRemainingTimes", timerTime);
    addData("timerSetTimes", initialTimerTime);

    updateHistory();
}

function resetTimer() {
    pauseTimer();
    timerTime = 0;
    initialTimerTime = 0;

    document.getElementById("timerMinutes").value = "";
    document.getElementById("timerSeconds").value = "";

    updateTimerDisplay();
}

function updateTimerDisplay() {
    const m = Math.floor(timerTime / 60);
    const s = timerTime % 60;

    document.getElementById("timerDisplay").textContent =
        `${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
}

/* ---------------- STOPWATCH ---------------- */

let stopwatchInterval = null;
let stopwatchTime = 0;

function startStopwatch() {
    if (!stopwatchInterval) {
        stopwatchInterval = setInterval(() => {
            stopwatchTime++;
            updateStopwatchDisplay();
        }, 1000);
    }
}

function pauseStopwatch() {
    clearInterval(stopwatchInterval);
    stopwatchInterval = null;
}

function saveStopwatch() {
    if (stopwatchTime <= 0) return;

    addData("stopwatchTimes", stopwatchTime);
    updateHistory();
}

function resetStopwatch() {
    pauseStopwatch();
    stopwatchTime = 0;
    updateStopwatchDisplay();
}

function updateStopwatchDisplay() {
    const m = Math.floor(stopwatchTime / 60);
    const s = stopwatchTime % 60;

    document.getElementById("stopwatchDisplay").textContent =
        `${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
}

/* ---------------- HISTORY ---------------- */

function updateHistory() {
    const container = document.getElementById("historyList");
    container.innerHTML = "";

    const timerSet = getData("timerSetTimes");
    const timerLeft = getData("timerRemainingTimes");
    const stopwatch = getData("stopwatchTimes");

    const timerAvgSet = getAverage(timerSet);
    const timerAvgLeft = getAverage(timerLeft);
    const stopwatchAvg = getAverage(stopwatch);

    /* TIMER SECTION */
    const timerSection = document.createElement("div");
    timerSection.className = "history-section";

    const tTitle = document.createElement("p");
    tTitle.innerHTML = "<strong>Countdown Timer History</strong>";
    timerSection.appendChild(tTitle);

    if (!timerLeft.length) {
        const empty = document.createElement("p");
        empty.className = "history-empty";
        empty.textContent = "No timer data yet.";
        timerSection.appendChild(empty);
    } else {
        timerLeft.forEach((t, i) => {
            const item = document.createElement("div");
            item.className = "history-item";
            item.textContent = `Saved ${i + 1}: Left ${formatTime(t)}`;
            timerSection.appendChild(item);
        });

        const avgLeft = document.createElement("p");
        avgLeft.innerHTML = `<strong>Avg Remaining:</strong> ${formatTime(timerAvgLeft)}`;
        timerSection.appendChild(avgLeft);

        const avgSet = document.createElement("p");
        avgSet.innerHTML = `<strong>Avg Set Time:</strong> ${formatTime(timerAvgSet)}`;
        timerSection.appendChild(avgSet);
    }

    container.appendChild(timerSection);

    /* STOPWATCH SECTION */
    const stopSection = document.createElement("div");
    stopSection.className = "history-section";

    const sTitle = document.createElement("p");
    sTitle.innerHTML = "<strong>Stopwatch History</strong>";
    stopSection.appendChild(sTitle);

    if (!stopwatch.length) {
        const empty = document.createElement("p");
        empty.className = "history-empty";
        empty.textContent = "No stopwatch data yet.";
        stopSection.appendChild(empty);
    } else {
        stopwatch.forEach((t, i) => {
            const item = document.createElement("div");
            item.className = "history-item";
            item.textContent = `Speech ${i + 1}: ${formatTime(t)}`;
            stopSection.appendChild(item);
        });

        const avg = document.createElement("p");
        avg.innerHTML = `<strong>Avg Speech Time:</strong> ${formatTime(stopwatchAvg)}`;
        stopSection.appendChild(avg);
    }

    container.appendChild(stopSection);
}

/* ---------------- CLEAR ---------------- */

function clearHistory() {
    localStorage.removeItem("timerRemainingTimes");
    localStorage.removeItem("timerSetTimes");
    localStorage.removeItem("stopwatchTimes");
    updateHistory();
}

/* ---------------- LOAD ---------------- */

window.onload = () => {
    settingActivePage();
    updateTimerDisplay();
    updateStopwatchDisplay();
    updateHistory();
};