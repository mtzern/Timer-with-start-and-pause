class Timer {
    constructor(inputButton, startButton, pauseButton) {
        this.durationInput = durationInput;
        this.startButton = startButton;
        this.pauseButton = pauseButton;

        this.startButton.addEventListener("click", this.start);
    }

    start() {
        console.log("Time to start timer!")
    }
}

const durationInput = document.querySelector("#duration");
const startButton = document.querySelector("#start");
const pauseButton = document.querySelector("#pause");

const Timer = new Timer(durationInput, startButton, pauseButton);