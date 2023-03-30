import React from "react";
import CronometerTimeView from "../../utils/CronometerTimeView";

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
        <button
          onClick={startRestTimer}
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded m-2">
          Start
        </button>
        <button
          onClick={stopRestTimer}
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded m-2">
          Stop
        </button>
        <button
          onClick={resetRestTimer}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-2">
          Reset
        </button>
      </div>
    </div>
  );
}

export default RestTimer;
