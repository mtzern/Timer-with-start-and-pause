class Timer {
    constructor(durationInput, startButton, pauseButton) {
        this.durationInput = durationInput;
        this.startButton = startButton;
        this.pauseButton = pauseButton;

        this.startButton.addEventListener("click", this.start);
        this.pauseButton.addEventListener("click", this.pause);
    };
    start = () =>  {
        this.tick();
        this.interval = setInterval(this.tick, 1000);
    };
    pause = () => {
        clearInterval(this.interval);
    };
    tick = () => {
        this.timeRemaining <= 0 ? this.pause() : this.timeRemaining = this.timeRemaining - 1;
    };
    get timeRemaining() {
        return parseFloat(this.durationInput.value);
    }
    set timeRemaining(time) {
        this.durationInput.value = time;
    }
}

const durationInput = document.querySelector("#duration");
const startButton = document.querySelector("#start");
const pauseButton = document.querySelector("#pause");

Timer = new Timer(durationInput, startButton, pauseButton);
