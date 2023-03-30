
import React from 'react';

import Button from '../bites/Button';

import CronometerTimeView from '../../utils/CronometerTimeView';

function RestTimerSetup({ restTime, setRestTimeButton }) {
  return (
    <div className="RestTime">
      <h3 className="text-3xl font-bold p-2">Rest Time</h3>
      <div className="flex justify-center items-center">
        <div className="flex flex-col col-25">
          <Button onClickFn={setRestTimeButton} onClickParams={-1} text="-0.1s" color="red" />
          <Button onClickFn={setRestTimeButton} onClickParams={-10} text="-1s" color="red" />
          <Button onClickFn={setRestTimeButton} onClickParams={-100} text="-10s" color="red" />
          <Button onClickFn={setRestTimeButton} onClickParams={-600} text="-1m" color="red" />
          <Button onClickFn={setRestTimeButton} onClickParams={-6000} text="-10m" color="red" />
          <Button onClickFn={setRestTimeButton} onClickParams={-36000} text="-1h" color="red" />
        </div>
        <div className="flex flex-col col-50">
          <h3 className="text-5xl font-bold p-2">
            {CronometerTimeView(restTime)}
          </h3>
        </div>
        <div className="flex flex-col col-25">
          <Button onClickFn={setRestTimeButton} onClickParams={1} text="+0.1s" color="green" />
          <Button onClickFn={setRestTimeButton} onClickParams={10} text="+1s" color="green" />
          <Button onClickFn={setRestTimeButton} onClickParams={100} text="+10s" color="green" />
          <Button onClickFn={setRestTimeButton} onClickParams={600} text="+1m" color="green" />
          <Button onClickFn={setRestTimeButton} onClickParams={6000} text="+10m" color="green" />
          <Button onClickFn={setRestTimeButton} onClickParams={36000} text="+1h" color="green" />
        </div>
      </div>
    </div>
  );
}

export default RestTimerSetup;