import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  
  const tick = 100;

  const [workTime, setWorkTime] = useState(Number(localStorage.getItem('workTime')) || 50);
  const [restTime, setRestTime] = useState(Number(localStorage.getItem('restTime')) || 10);
  const [cycles, setCycles] = useState(Number(localStorage.getItem('cycles')) || 4);
  const [longRestMultiplier, setLongRestMultiplier] = useState(Number(localStorage.getItem('bigRestMultiplier')) || 3);
  
  const [currentCycle, setCurrentCycle] = useState(Number(localStorage.getItem('currentCycle')) || 1);
  const [remainWorkTime, setRemainWorkTime] = useState(Number(localStorage.getItem('remainWorkTime')) || workTime);
  const [remainRestTime, setRemainRestTime] = useState(Number(localStorage.getItem('remainRestTime')) || 0);

  const [isWorkTimerRunning, setIsWorkTimerRunning] = useState(false);
  const [isRestTimerRunning, setIsRestTimerRunning] = useState(false);

  useEffect(() => {
    if (workTime < 1) {
      setWorkTime(1);
    }
    localStorage.setItem('workTime', workTime);
  }, [workTime]);

  useEffect(() => {
    if (restTime < 1) {
      setRestTime(1);
    }
    localStorage.setItem('restTime', restTime);
  }, [restTime]);

  useEffect(() => {
    if (cycles < 1) {
      setCycles(1);
    }
    localStorage.setItem('cycles', cycles);
  }, [cycles]);

  useEffect(() => {
    if (longRestMultiplier < 1) {
      setLongRestMultiplier(1);
    }
    localStorage.setItem('bigRestMultiplier', longRestMultiplier);
  }, [longRestMultiplier]);

  useEffect(() => {
    if (currentCycle < 1) {
      setCurrentCycle(1);
    }
    localStorage.setItem('currentCycle', currentCycle);
  }, [currentCycle]);

  useEffect(() => {
    if (remainWorkTime < 0) {
      setRemainWorkTime(0);
    }
    localStorage.setItem('remainWorkTime', remainWorkTime);
  }, [remainWorkTime]);

  useEffect(() => {
    if (remainRestTime < 0) {
      setRemainRestTime(0);
    }
    localStorage.setItem('remainRestTime', remainRestTime);
  }, [remainRestTime]);
  
  const startWorkTimer = () => {
    setIsWorkTimerRunning(true);
    setIsRestTimerRunning(false);

  }

  const startRestTimer = () => {
    setIsWorkTimerRunning(false);
    setIsRestTimerRunning(true);

  }

  const stopWorkTimer = () => {
    setIsWorkTimerRunning(false);
    setIsRestTimerRunning(false);

  }

  const stopRestTimer = () => {
    setIsWorkTimerRunning(false);
    setIsRestTimerRunning(false);

  }

  const resetWorkTimer = () => {
    setIsWorkTimerRunning(false);
    setIsRestTimerRunning(false);

    setRemainWorkTime(workTime);
    setCurrentCycle(1);
  }

  const resetRestTimer = () => {
    setIsWorkTimerRunning(false);
    setIsRestTimerRunning(false);

    setRemainRestTime(0);
  }

  const workTimer = () => {
    if (isWorkTimerRunning) {
      setTimeout(() => {
        if (remainWorkTime === 0) {
          setRemainWorkTime(workTime);
          if (currentCycle % cycles === 0) {
            setRemainRestTime(remainRestTime + (restTime * longRestMultiplier));
          } else {
            setRemainRestTime(remainRestTime + restTime);
          }
          setCurrentCycle(currentCycle + 1);
        } else {
          setRemainWorkTime(remainWorkTime - 1);
        }
      }, tick);
    }
  }

  const restTimer = () => {
    if (isRestTimerRunning) {
      setTimeout(() => {
        if (remainRestTime === 0) {
          stopRestTimer();
        } else {
          setRemainRestTime(remainRestTime - 1);
        }
      }, tick);
    }
  }

  function CronometerTimeView (time) {
    // 1 second = 100 time units
    // 1 minute = 6000 time units
    // 1 hour = 360000 time units
    // if time == 0, return 00:00:00.00
    // if time == 6000 (1 minute), return 00:01:00.00
    // if time == 360000 (1 hour), return 01:00:00.00
    // if time == 360100 (1 hour and 1 second), return 01:00:01.00

    let hours = Math.floor(time / 36000);
    let minutes = Math.floor((time - (hours * 36000)) / 600);
    let seconds = Math.floor((time - (hours * 36000) - (minutes * 600)) / 10);
    let milliseconds = time - (hours * 36000) - (minutes * 600) - (seconds * 10);

    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}.${milliseconds.toString().padStart(1, '0')}`;
  }

  function setWorkTimeButton(time) {
    resetWorkTimer();
    setWorkTime(workTime + time);
  }

  function setRestTimeButton(time) {
    // resetRestTimer();
    setRestTime(restTime + time);
  }

  workTimer();
  restTimer();
  
  return (
    <div className="App">
      <h1 className="App-Title">Zone Pomodoro</h1>
      <div className="WorkTimer Timer">
        <h2>Work Timer</h2>
        <h3>{isWorkTimerRunning ? "Running" : "Stopped"}</h3>
        <h3>{CronometerTimeView(remainWorkTime)}</h3>
        <button onClick={startWorkTimer}>Start</button>
        <button onClick={stopWorkTimer}>Stop</button>
        <button onClick={resetWorkTimer}>Reset</button>
      </div>
      <div className="RestTimer Timer">
        <h2>Rest Timer</h2>
        <h3>{isRestTimerRunning ? "Running" : "Stopped"}</h3>
        <h3>{CronometerTimeView(remainRestTime)}</h3>
        <button onClick={startRestTimer}>Start</button>
        <button onClick={stopRestTimer}>Stop</button>
        <button onClick={resetRestTimer}>Reset</button>
      </div>
      <div className="Cycles">
        <h2>Current Cycle</h2>
        <h3>{currentCycle}</h3>
      </div>
      <div className="Settings">
        <h2>Settings</h2>
        <div className="WorkTime">
          <h3>Work Time</h3>
          <h3>{CronometerTimeView(workTime)}</h3>
          <button onClick={() => setWorkTimeButton(-36000)}>-1h</button>
          <button onClick={() => setWorkTimeButton(-6000)}>-10m</button>
          <button onClick={() => setWorkTimeButton(-600)}>-1m</button>
          <button onClick={() => setWorkTimeButton(-100)}>-10s</button>
          <button onClick={() => setWorkTimeButton(-10)}>-1s</button>
          <button onClick={() => setWorkTimeButton(-1)}>-0.1s</button>
          <button onClick={() => setWorkTimeButton(1)}>+0.1s</button>
          <button onClick={() => setWorkTimeButton(10)}>+1s</button>
          <button onClick={() => setWorkTimeButton(100)}>+10s</button>
          <button onClick={() => setWorkTimeButton(600)}>+1m</button>
          <button onClick={() => setWorkTimeButton(6000)}>+10m</button>
          <button onClick={() => setWorkTimeButton(36000)}>+1h</button>
        </div>
        <div className="RestTime">
          <h3>Rest Time</h3>
          <h3>{CronometerTimeView(restTime)}</h3>
          <button onClick={() => setRestTimeButton(-36000)}>-1h</button>
          <button onClick={() => setRestTimeButton(-6000)}>-10m</button>
          <button onClick={() => setRestTimeButton(-600)}>-1m</button>
          <button onClick={() => setRestTimeButton(-100)}>-10s</button>
          <button onClick={() => setRestTimeButton(-10)}>-1s</button>
          <button onClick={() => setRestTimeButton(-1)}>-0.1s</button>
          <button onClick={() => setRestTimeButton(1)}>+0.1s</button>
          <button onClick={() => setRestTimeButton(10)}>+1s</button>
          <button onClick={() => setRestTimeButton(100)}>+10s</button>
          <button onClick={() => setRestTimeButton(600)}>+1m</button>
          <button onClick={() => setRestTimeButton(6000)}>+10m</button>
          <button onClick={() => setRestTimeButton(36000)}>+1h</button>
        </div>
        <div className="Cycles">
          <h3>Cycles for big rest</h3>
          <h3>{cycles}</h3>
          <button onClick={() => setCycles(cycles + 1)}>+</button>
          <button onClick={() => setCycles(cycles - 1)}>-</button>
        </div>
        <div className="BigRestMultiplier">
          <h3>Big Rest Multiplier</h3>
          <h3>{longRestMultiplier}x</h3>
          <h4>
            {CronometerTimeView(restTime)} →{" "}
            {CronometerTimeView(restTime * longRestMultiplier)}
          </h4>
          <button onClick={() => setLongRestMultiplier(longRestMultiplier + 1)}>
            +
          </button>
          <button onClick={() => setLongRestMultiplier(longRestMultiplier - 1)}>
            -
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
