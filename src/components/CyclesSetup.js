import React from "react";

function CyclesSetup({ cycles, setCycles }) {
  return (
    <div className="Cycles">
      <h3 className="text-3xl font-bold p-2">Cycles for big rest</h3>
      <div className="flex justify-center items-center">
        <button
          className="flex flex-col col-span-1 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded m-2 text-2xl"
          onClick={() => setCycles(cycles - 1)}>
          -
        </button>
        <h3 className="flex flex-col col-span-2 text-5xl font-bold p-2">
          {cycles}
        </h3>
        <button
          className="flex flex-col col-span-1 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded m-2 text-2xl"
          onClick={() => setCycles(cycles + 1)}>
          +
        </button>
      </div>
    </div>
  );
}

export default CyclesSetup;