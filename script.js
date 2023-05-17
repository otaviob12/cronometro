const minutos = document.querySelector("#minutos")
const segundos = document.querySelector("#segundos")
const millisegundos = document.querySelector("#millisegundos")
const startBtn = document.querySelector("#startBtn")
const pauseBtn = document.querySelector("#pauseBtn")
const resumoBtn = document.querySelector("#resumoBtn")
const resetBtn = document.querySelector("#resetBtn")

let interval;
let minutes = 0;
let seconds = 0;
let milliseconds = 0;
let isPause = false;

startBtn.addEventListener("click", startTimer);
pauseBtn.addEventListener("click", pauseTimer);
resumoBtn.addEventListener("click", resumoTimer);
resetBtn.addEventListener("click", resetTimer);

function startTimer() {
    interval = setInterval(() => {

        if (!isPause) {

            milliseconds += 10

            if (milliseconds === 1000) {
                seconds++
                milliseconds = 0
            }
            if (seconds === 60) {
                minutes++
                seconds = 0
            }

            minutos.textContent = formatTime(minutes)
            segundos.textContent = formatTime(seconds)
            millisegundos.textContent = formatMilliseconds(milliseconds)
        }
    }, 10)

    startBtn.style.display = "none"
    pauseBtn.style.display = "block"
}

function pauseTimer() {
    isPause = true
    pauseBtn.style.display = "none"
    resumoBtn.style.display = "block"
}

function resumoTimer() {
    isPause = false
    pauseBtn.style.display = "block"
    resumoBtn.style.display = "none"
}

function resetTimer() {
    clearInterval(interval)
    minutes = 0;
    seconds = 0;
    milliseconds = 0;

    minutos.textContent = "00"
    segundos.textContent = "00"
    millisegundos.textContent = "000"

    startBtn.style.display = "block"
    pauseBtn.style.display = "none"
    resumoBtn.style.display = "none"

    isPause = false 
}

function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}

function formatMilliseconds(time) {
    return time < 100 ? `${time}`.padStart(3, "0") : time
}