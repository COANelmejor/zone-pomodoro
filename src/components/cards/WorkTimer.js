import React from "react";

import CronometerTimeView from "../../utils/CronometerTimeView";
import Button from "../bites/Button";

function WorkTimer({
  isWorkTimerRunning,
  remainWorkTime,
  resetWorkTimer,
  startWorkTimer,
  stopWorkTimer,
}) {
  return (
    <div className="WorkTimer Timer flex flex-col col-50">
      <h2 className="text-4xl font-bold p-2">Work Timer</h2>
      <h3 className="text-3xl font-bold p-2">
        {isWorkTimerRunning ? "Running" : "Stopped"}
      </h3>
      <h3 className="text-5xl font-bold p-2">
        {CronometerTimeView(remainWorkTime)}
      </h3>
      <div className="flex flex-row">
        <Button onClickFn={startWorkTimer} text="Start" color="green" />
        <Button onClickFn={stopWorkTimer} text="Stop" color="red" />
        <Button onClickFn={resetWorkTimer} text="Reset" color="blue" />
      </div>
    </div>
  );
}

export default WorkTimer;
