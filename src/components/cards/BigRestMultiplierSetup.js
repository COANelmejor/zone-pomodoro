import React from "react";

import CronometerTimeView from "../../utils/CronometerTimeView";

function BigRestMultiplierSetup({
  longRestMultiplier,
  restTime,
  setLongRestMultiplier,
}) {
  return (
    <div className="BigRestMultiplier">
      <h3 className="text-3xl font-bold p-2">Big Rest Multiplier</h3>
      <div className="flex justify-center">
        <div className="flex flex-col col-25">
          <button
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded m-2 text-2xl"
            onClick={() => setLongRestMultiplier(longRestMultiplier - 1)}>
            -
          </button>
        </div>
        <div className="flex flex-col col-25">
          <h3 className="text-5xl font-bold p-2">{longRestMultiplier}x</h3>
          <h4 className="text-3xl font-bold p-2">
            {CronometerTimeView(restTime)} →{" "}
            {CronometerTimeView(restTime * longRestMultiplier)}
          </h4>
        </div>
        <div className="flex flex-col col-25">
          <button
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded m-2 text-2xl"
            onClick={() => setLongRestMultiplier(longRestMultiplier + 1)}>
            +
          </button>
        </div>
      </div>
    </div>
  );
}

export default BigRestMultiplierSetup;