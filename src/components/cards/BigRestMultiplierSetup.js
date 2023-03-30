import React from "react";

import Button from "../bites/Button";

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
          <Button 
            onClickFn={setLongRestMultiplier}
            onClickParams={longRestMultiplier - 1}
            text="-"
            color="red"
          />
          
        </div>
        <div className="flex flex-col col-25">
          <h3 className="text-5xl font-bold p-2">{longRestMultiplier}x</h3>
          <h4 className="text-3xl font-bold p-2">
            {CronometerTimeView(restTime)} →{" "}
            {CronometerTimeView(restTime * longRestMultiplier)}
          </h4>
        </div>
        <div className="flex flex-col col-25">
          <Button
            onClickFn={setLongRestMultiplier}
            onClickParams={longRestMultiplier + 1}
            text="+"
            color="green"
          />
        </div>
      </div>
    </div>
  );
}

export default BigRestMultiplierSetup;