import React, { useState } from "react";
import uuid from "react-native-uuid";

import Button from "../bites/Button";
import CronometerTimeView from "../../utils/CronometerTimeView";

function WorkTimerSetup({ setWorkTimeButton, workTime }) {
  const buttonValues = [
    { value: 36000, text: "1h" },
    { value: 6000, text: "10m" },
    { value: 600, text: `1m` },
    { value: 100, text: "10s" },
    { value: 10, text: "1s" },
    { value: 1, text: "1ms" },
  ];

  const [active, setActive] = useState(true)
  return (
    <div className="WorkTime">
      <h3 onClick={() => setActive(!active)} className="transition-all duration-500 text-2xl font-bold p-2 bg-lime-500 hover:bg-lime-200 border border-lime-500 cursor-pointer rounded-md w-full mx-auto -mb-9 z-50">Work Time</h3>
      <div className={`transition-all duration-500 flex flex-col justify-center items-center ${active ? 'invisible h-0 opacity-0':'h-80 visible opacity-100'} w-full right-0 left-0 absolute -z-10 pt-20`}>
        <div className={`grid grid-cols-7 gap-1 transition-all ${active ? 'opacity-0 duration-300':'visible opacity-100 ' }`}>
            <button>+</button>
            {buttonValues.map((buttonValue) => (
              <Button
                key={uuid.v4()}
                onClickFn={setWorkTimeButton}
                onClickParams={buttonValue.value}
                text={`${buttonValue.text}`}
                color="green"
              />
            ))}
        </div>
        <div className="grid grid-cols-3">
          <span></span>
          <h3 className="text-6xl font-bold p-2 -ml-5 tracking-widest">
            {CronometerTimeView(workTime)}
          </h3>
          <span></span>
        </div>
        <div className="grid grid-cols-7 gap-x-1">
        <button>-</button>
          {buttonValues.map((buttonValue) => (
            <Button
              key={uuid.v4()}
              onClickFn={setWorkTimeButton}
              onClickParams={-buttonValue.value}
              text={`${buttonValue.text}`}
              color="red"
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default WorkTimerSetup;
