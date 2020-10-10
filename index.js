class Timer {
    constructor(durationInput, startButton, pauseButton) {
        this.durationInput = durationInput;
        this.startButton = startButton;
        this.pauseButton = pauseButton;

        this.startButton.addEventListener("click", this.start);
    }
    start = () =>  {
        this.importantMethodToCall();
    }
    importantMethodToCall() {
        console.log("Important thing was done!");
    }
}

const durationInput = document.querySelector("#duration");
const startButton = document.querySelector("#start");
const pauseButton = document.querySelector("#pause");

Timer = new Timer(durationInput, startButton, pauseButton);
