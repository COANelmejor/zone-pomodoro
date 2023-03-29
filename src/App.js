import React, { useEffect, useState } from "react";
import "./App.css";
// Components
import WorkTimer from "./components/cards/WorkTimer";
import RestTimer from "./components/cards/RestTimer";
import CurrentCycle from "./components/cards/CurrentCycle";
import WorkTimerSetup from "./components/cards/WorkTimerSetup";
import RestTimerSetup from "./components/cards/RestTimerSetup";
import CyclesSetup from "./components/cards/CyclesSetup";
import BigRestMultiplierSetup from "./components/cards/BigRestMultiplierSetup";

// Utils
import CronometerTimeView from "./utils/CronometerTimeView";

function App() {
  const tick = 100;

  const [workTime, setWorkTime] = useState(
    Number(localStorage.getItem("workTime")) || 50
  );
  const [restTime, setRestTime] = useState(
    Number(localStorage.getItem("restTime")) || 10
  );
  const [cycles, setCycles] = useState(
    Number(localStorage.getItem("cycles")) || 4
  );
  const [longRestMultiplier, setLongRestMultiplier] = useState(
    Number(localStorage.getItem("bigRestMultiplier")) || 3
  );

  const [currentCycle, setCurrentCycle] = useState(
    Number(localStorage.getItem("currentCycle")) || 1
  );
  const [remainWorkTime, setRemainWorkTime] = useState(
    Number(localStorage.getItem("remainWorkTime")) || workTime
  );
  const [remainRestTime, setRemainRestTime] = useState(
    Number(localStorage.getItem("remainRestTime")) || 0
  );

  const [isWorkTimerRunning, setIsWorkTimerRunning] = useState(false);
  const [isRestTimerRunning, setIsRestTimerRunning] = useState(false);

  useEffect(() => {
    if (workTime < 1) {
      setWorkTime(1);
    }
    localStorage.setItem("workTime", workTime);
  }, [workTime]);

  useEffect(() => {
    if (restTime < 1) {
      setRestTime(1);
    }
    localStorage.setItem("restTime", restTime);
  }, [restTime]);

  useEffect(() => {
    if (cycles < 1) {
      setCycles(1);
    }
    localStorage.setItem("cycles", cycles);
  }, [cycles]);

  useEffect(() => {
    if (longRestMultiplier < 1) {
      setLongRestMultiplier(1);
    }
    localStorage.setItem("bigRestMultiplier", longRestMultiplier);
  }, [longRestMultiplier]);

  useEffect(() => {
    if (currentCycle < 1) {
      setCurrentCycle(1);
    }
    localStorage.setItem("currentCycle", currentCycle);
  }, [currentCycle]);

  useEffect(() => {
    if (remainWorkTime < 0) {
      setRemainWorkTime(0);
    }
    localStorage.setItem("remainWorkTime", remainWorkTime);
  }, [remainWorkTime]);

  useEffect(() => {
    if (remainRestTime < 0) {
      setRemainRestTime(0);
    }
    localStorage.setItem("remainRestTime", remainRestTime);
  }, [remainRestTime]);

  const startWorkTimer = () => {
    setIsWorkTimerRunning(true);
    setIsRestTimerRunning(false);
  };

  const startRestTimer = () => {
    setIsWorkTimerRunning(false);
    setIsRestTimerRunning(true);
  };

  const stopWorkTimer = () => {
    setIsWorkTimerRunning(false);
    setIsRestTimerRunning(false);
  };

  const stopRestTimer = () => {
    setIsWorkTimerRunning(false);
    setIsRestTimerRunning(false);
  };

  const resetWorkTimer = () => {
    setIsWorkTimerRunning(false);
    setIsRestTimerRunning(false);

    setRemainWorkTime(workTime);
    setCurrentCycle(1);
  };

  const resetRestTimer = () => {
    setIsWorkTimerRunning(false);
    setIsRestTimerRunning(false);

    setRemainRestTime(0);
  };

  /**
   * ## Work Timer
   *
   * If the work timer is running, it will decrease the remainWorkTime by 1 every tick
   */
  const workTimer = () => {
    if (isWorkTimerRunning) {
      setTimeout(() => {
        if (remainWorkTime === 0) {
          setRemainWorkTime(workTime);
          if (currentCycle % cycles === 0) {
            setRemainRestTime(remainRestTime + restTime * longRestMultiplier);
          } else {
            setRemainRestTime(remainRestTime + restTime);
          }
          setCurrentCycle(currentCycle + 1);
        } else {
          setRemainWorkTime(remainWorkTime - 1);
        }
      }, tick);
    }
  };

  /**
   * ## Rest Timer
   *
   * If the rest timer is running, it will decrease the remainRestTime by 1 every tick
   *
   * If the remainRestTime is 0, it will stop the rest timer
   *
   */
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
  };

  function setWorkTimeButton(time) {
    setWorkTime(workTime + time);
    resetWorkTimer();
  }

  function setRestTimeButton(time) {
    // resetRestTimer();
    setRestTime(restTime + time);
  }

  workTimer();
  restTimer();

  // Working with tailwindcss for styling
  return (
    <div className="App">
      <h1 className="App-Title text-5xl font-bold underline p-2">
        Zone Pomodoro
      </h1>
      <div className="flex flex-row">
        <WorkTimer
          CronometerTimeView={CronometerTimeView}
          isWorkTimerRunning={isWorkTimerRunning}
          remainWorkTime={remainWorkTime}
          resetWorkTimer={resetWorkTimer}
          startWorkTimer={startWorkTimer}
          stopWorkTimer={stopWorkTimer}
        />
        <RestTimer
          CronometerTimeView={CronometerTimeView}
          isRestTimerRunning={isRestTimerRunning}
          remainRestTime={remainRestTime}
          resetRestTimer={resetRestTimer}
          startRestTimer={startRestTimer}
          stopRestTimer={stopRestTimer}
        />
      </div>
      <CurrentCycle currentCycle={currentCycle} cycles={cycles} />
      <div className="Settings flex flex-col col-50">
        <h2 className="text-4xl font-bold p-2">Settings</h2>
        <WorkTimerSetup
          setWorkTimeButton={setWorkTimeButton}
          workTime={workTime}
        />
        <RestTimerSetup
          restTime={restTime}
          setRestTimeButton={setRestTimeButton}
        />
        <CyclesSetup 
          cycles={cycles} 
          setCycles={setCycles} 
        />
        <BigRestMultiplierSetup
          longRestMultiplier={longRestMultiplier}
          restTime={restTime}
          setLongRestMultiplier={setLongRestMultiplier}
        />
      </div>
    </div>
  );
}

export default App;
