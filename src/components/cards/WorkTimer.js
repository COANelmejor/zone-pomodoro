import React from "react";

import CronometerTimeView from "../../utils/CronometerTimeView";

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
        <button
          onClick={startWorkTimer}
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded m-2">
          Start
        </button>
        <button
          onClick={stopWorkTimer}
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 rounded m-2">
          Stop
        </button>
        <button
          onClick={resetWorkTimer}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 rounded m-2">
          Reset
        </button>
      </div>
    </div>
  );
}

export default WorkTimer;
