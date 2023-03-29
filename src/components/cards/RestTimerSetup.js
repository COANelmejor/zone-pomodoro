
import React from 'react';

// Utils
import CronometerTimeView from '../../utils/CronometerTimeView';

function RestTimerSetup({ restTime, setRestTimeButton }) {
  return (
    <div className="RestTime">
      <h3 className="text-3xl font-bold p-2">Rest Time</h3>
      <div className="flex justify-center items-center">
        <div className="flex flex-col col-25">
          <button
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded m-2 text-2xl"
            onClick={() => setRestTimeButton(-1)}>
            -0.1s
          </button>
          <button
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded m-2 text-2xl"
            onClick={() => setRestTimeButton(-10)}>
            -1s
          </button>
          <button
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded m-2 text-2xl"
            onClick={() => setRestTimeButton(-100)}>
            -10s
          </button>
          <button
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded m-2 text-2xl"
            onClick={() => setRestTimeButton(-600)}>
            -1m
          </button>
          <button
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded m-2 text-2xl"
            onClick={() => setRestTimeButton(-6000)}>
            -10m
          </button>
          <button
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded m-2 text-2xl"
            onClick={() => setRestTimeButton(-36000)}>
            -1h
          </button>
        </div>
        <div className="flex flex-col col-50">
          <h3 className="text-5xl font-bold p-2">
            {CronometerTimeView(restTime)}
          </h3>
        </div>
        <div className="flex flex-col col-25">
          <button
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded m-2 text-2xl"
            onClick={() => setRestTimeButton(1)}>
            +0.1s
          </button>
          <button
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded m-2 text-2xl"
            onClick={() => setRestTimeButton(10)}>
            +1s
          </button>
          <button
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded m-2 text-2xl"
            onClick={() => setRestTimeButton(100)}>
            +10s
          </button>
          <button
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded m-2 text-2xl"
            onClick={() => setRestTimeButton(600)}>
            +1m
          </button>
          <button
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded m-2 text-2xl"
            onClick={() => setRestTimeButton(6000)}>
            +10m
          </button>
          <button
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded m-2 text-2xl"
            onClick={() => setRestTimeButton(36000)}>
            +1h
          </button>
        </div>
      </div>
    </div>
  );
}

export default RestTimerSetup;