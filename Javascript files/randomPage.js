let stopwatchInterval;
let elapsedTime = 0;

function updateStopwatch() {
        const milliseconds = elapsedTime % 1000;
        const seconds = Math.floor(elapsedTime / 1000) % 60;
        const minutes = Math.floor(elapsedTime / 60000);
        document.getElementById("stopwatch").textContent =
            `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}:${String(milliseconds).padStart(3, '0')}`;
}

function startStopwatch() {
        if (stopwatchInterval) return;
        const startTime = Date.now() - elapsedTime;
        stopwatchInterval = setInterval(() => {
            elapsedTime = Date.now() - startTime;
            updateStopwatch();
        }, 10);
}

function stopStopwatch() {
        clearInterval(stopwatchInterval);
        stopwatchInterval = null;
}

function resetStopwatch() {
        stopStopwatch();
        elapsedTime = 0;
        updateStopwatch();
}

window.addEventListener('scroll', () => {
        const header = document.getElementById('header');
        if (window.scrollY > 50) {
            header.classList.add('shrink');
        } else {
        header.classList.remove('shrink');
        }
});