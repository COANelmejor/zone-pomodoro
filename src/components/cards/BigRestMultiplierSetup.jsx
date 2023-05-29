import React, { useState } from "react";

import Button from "../bites/Button";

import CronometerTimeView from "../../utils/CronometerTimeView";

function BigRestMultiplierSetup({
  longRestMultiplier,
  restTime,
  setLongRestMultiplier,
}) {
  const [active, setActive] = useState(true)

  return (
    <div className="BigRestMultiplier">
      <h3 onClick={() => setActive(!active)} className="transition-all duration-500 text-2xl font-bold p-2 bg-lime-500 hover:bg-lime-200 border border-lime-500 cursor-pointer rounded-md w-full mx-auto mb-5 z-50">Big Rest Multiplier</h3>
      <div className={`transition-all duration-500 flex flex-col justify-center items-center ${active ? 'invisible h-0': 'h-80 visible'} w-full right-0 left-0 absolute`}>
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
    </div>
  );
}

export default BigRestMultiplierSetup;