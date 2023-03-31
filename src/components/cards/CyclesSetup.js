import React from "react";

import Button from "../bites/Button";

function CyclesSetup({ cycles, setCycles }) {
  return (
    <div className="Cycles">
      <h3 className="text-3xl font-bold p-2">Cycles for big rest</h3>
      <div className="flex justify-center items-center">
        <Button onClickFn={setCycles} onClickParams={cycles - 1} text="-" color="red" />
        <h3 className="flex flex-col col-span-2 text-5xl font-bold p-2">
          {cycles}
        </h3>
        <Button onClickFn={setCycles} onClickParams={cycles + 1} text="+" color="green" />
      </div>
    </div>
  );
}

export default CyclesSetup;