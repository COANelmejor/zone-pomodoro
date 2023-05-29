import React, { useState } from "react";

import Button from "../bites/Button";

function CyclesSetup({ cycles, setCycles }) {
  const [active, setActive] = useState(true)
  return (
    <div className="Cycles">
      <h3 onClick={() => setActive(!active)} className="transition-all duration-500 text-2xl font-bold p-2 bg-lime-500 hover:bg-lime-200 border border-lime-500 cursor-pointer rounded-md w-full mx-auto mb-5 z-50">Cycles for big rest</h3>
      <div className={`transition-all duration-500 flex flex-col justify-center items-center ${active ? 'invisible h-0': 'h-80 visible'} w-full right-0 left-0 absolute`}>
        <div className="flex justify-center items-center">
          <Button onClickFn={setCycles} onClickParams={cycles - 1} text="-" color="red" />
          <h3 className="flex flex-col col-span-2 text-5xl font-bold p-2">
            {cycles}
          </h3>
          <Button onClickFn={setCycles} onClickParams={cycles + 1} text="+" color="green" />
        </div>

      </div>
    </div>
  );
}

export default CyclesSetup;