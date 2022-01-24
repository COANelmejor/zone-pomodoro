import React from "react";

class CountdownTimer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: 0,
      startTime: 0,
      isRunning: false,
      isPaused: false
    };
    this.startTimer = this.startTimer.bind(this);
    this.pauseTimer = this.pauseTimer.bind(this);
    this.resetTimer = this.resetTimer.bind(this);
    this.updateTimer = this.updateTimer.bind(this);
    this.updateTime = this.updateTime.bind(this);
  }

  startTimer() {
    this.setState({
      startTime: Date.now() - this.state.time,
      isRunning: true,
      isPaused: false
    });
    this.timer = setInterval(this.updateTimer, 10);
  }

  pauseTimer() {
    this.setState({
      isRunning: false,
      isPaused: true
    });
    clearInterval(this.timer);
  }

  resetTimer() {
    this.setState({
      time: 0,
      isRunning: false,
      isPaused: false
    });
    clearInterval(this.timer);
  }

  updateTimer() {
    if (this.state.isRunning) {
      this.setState({
        time: Date.now() - this.state.startTime
      });
    }
  }

  updateTime() {
    const time = new Date(this.state.time);
    let hours = time.getUTCHours().toString();
    let minutes = time.getUTCMinutes().toString();
    let seconds = time.getUTCSeconds().toString();
    hours = hours.length === 1 ? `0${hours}` : hours;
    minutes = minutes.length === 1 ? `0${minutes}` : minutes;
    seconds = seconds.length === 1 ? `0${seconds}` : seconds;

    return `${hours}:${minutes}:${seconds}`;
  }

  render() {
    return (
      <div>
        <div className="timer">{this.updateTime()}</div>
        <div className="buttons">
          <button onClick={this.startTimer}>Start</button>
          <button onClick={this.pauseTimer}>Pause</button>
          <button onClick={this.resetTimer}>Reset</button>
        </div>
      </div>
    );
  }
}

export default CountdownTimer;