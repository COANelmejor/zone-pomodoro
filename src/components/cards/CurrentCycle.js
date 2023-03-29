import React from "react";

function CurrentCycle({ currentCycle, cycles }) {
  return (
    <div className="Cycles flex flex-col col-50">
      <h2 className="text-4xl font-bold p-2">Current Cycle</h2>
      <h3 className="text-5xl font-bold p-2">{currentCycle}</h3>
      <h3 className="text-3xl font-bold p-2">
        {currentCycle % cycles === 0 ? "Long" : "Short"} Rest Cycle
      </h3>
    </div>
  );
}

export default CurrentCycle;