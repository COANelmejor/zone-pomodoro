import React from "react";
import CronometerTimeView from "../../utils/CronometerTimeView";
import Button from "../bites/Button";

function RestTimer({
  isRestTimerRunning,
  remainRestTime,
  resetRestTimer,
  startRestTimer,
  stopRestTimer,
}) {
  return (
    <div className="RestTimer Timer flex flex-col col-50">
      <h2 className="text-4xl font-bold p-2">Rest Timer</h2>
      <h3 className="text-3xl font-bold p-2">
        {isRestTimerRunning ? "Running" : "Stopped"}
      </h3>
      <h3 className="text-5xl font-bold p-2">
        {CronometerTimeView(remainRestTime)}
      </h3>
      <div className="flex flex-row">
        <Button onClickFn={startRestTimer} text="Start" color="green" />
        <Button onClickFn={stopRestTimer} text="Stop" color="red" />
        <Button onClickFn={resetRestTimer} text="Reset" color="blue" />
      </div>
    </div>
  );
}

export default RestTimer;
