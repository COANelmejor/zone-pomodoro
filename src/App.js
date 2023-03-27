import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  
  const tick = 100;

  const [workTime, setWorkTime] = useState(50);
  const [restTime, setRestTime] = useState(10);
  const [cycles, setCycles] = useState(4);
  const [bigRestMultiplier, setBigRestMultiplier] = useState(3);
  
  const [currentCycle, setCurrentCycle] = useState(1);
  const [remainWorkTime, setRemainWorkTime] = useState(25);
  const [remainRestTime, setRemainRestTime] = useState(0);

  const [isWorkTimerRunning, setIsWorkTimerRunning] = useState(false);
  const [isRestTimerRunning, setIsRestTimerRunning] = useState(false);

  useEffect(() => {
    if (workTime < 1) {
      setWorkTime(1);
    }
  }, [workTime]);

  useEffect(() => {
    if (restTime < 1) {
      setRestTime(1);
    }
  }, [restTime]);
  
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
            setRemainRestTime(remainRestTime + (restTime * bigRestMultiplier));
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
      <div className="WorkTimer">
        <h1>Work Timer</h1>
        <h2>{isWorkTimerRunning ? "Running" : "Stopped"}</h2>
        <h2>{CronometerTimeView(remainWorkTime)}</h2>
        <button onClick={startWorkTimer}>Start</button>
        <button onClick={stopWorkTimer}>Stop</button>
        <button onClick={resetWorkTimer}>Reset</button>
      </div>
      <div className="RestTimer">
        <h1>Rest Timer</h1>
        <h2>{isRestTimerRunning ? "Running" : "Stopped"}</h2>
        <h2>{CronometerTimeView(remainRestTime)}</h2>
        <button onClick={startRestTimer}>Start</button>
        <button onClick={stopRestTimer}>Stop</button>
        <button onClick={resetRestTimer}>Reset</button>
      </div>
      <div className="Cycles">
        <h1>Current Cycle</h1>
        <h2>{currentCycle}</h2>
      </div>
      <div className='Settings'>
        <h1>Settings</h1>
        <div className='WorkTime'>
          <h2>Work Time</h2>
          <h2>{CronometerTimeView(workTime)}</h2>
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
        <div className='RestTime'>
          <h2>Rest Time</h2>
          <h2>{CronometerTimeView(restTime)}</h2>
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
        <div className='Cycles'>
          <h2>Cycles for big rest</h2>
          <h2>{cycles}</h2>
          <button onClick={() => setCycles(cycles + 1)}>+</button>
          <button onClick={() => setCycles(cycles - 1)}>-</button>
        </div>
        <div className='BigRestMultiplier'>
          <h2>Big Rest Multiplier</h2>
          <h2>{bigRestMultiplier}</h2>
          <button onClick={() => setBigRestMultiplier(bigRestMultiplier + 1)}>+</button>
          <button onClick={() => setBigRestMultiplier(bigRestMultiplier - 1)}>-</button>
        </div>
      </div>
    </div>
  );
}

export default App;
