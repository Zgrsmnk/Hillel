const p = document.querySelector(".timer");
const button = document.querySelector(".buttonTimer");

class Timer {
  constructor(seconds) {
    this.seconds = seconds;
    this.interval = null;
  }

  getMinutes() {
    return Math.trunc(this.seconds / 60);
  }

  getSeconds() {
    return this.seconds % 60;
  }

  updateTimer() {
    const min = String(this.getMinutes()).padStart(2, "0");
    const sec = String(this.getSeconds()).padStart(2, "0");
    p.textContent = `${min}:${sec}`;
  }

  startTimer() {
    if (this.interval) {
      clearInterval(this.interval);
    }
    this.interval = setInterval(() => {
      if (this.seconds <= 0) {
        clearInterval(this.interval);
        return;
      }
      this.seconds--;
      this.updateTimer();
    }, 1000);
  }
};

const timer = new Timer(85);

button.addEventListener("click", function () {
  timer.startTimer();
});
