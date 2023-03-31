
import React from 'react';
import uuid from "react-native-uuid";
import Button from '../bites/Button';

import CronometerTimeView from '../../utils/CronometerTimeView';

function RestTimerSetup({ restTime, setRestTimeButton }) {
  const buttonValues = [
    { value: 1, text: '0.1s' },
    { value: 10, text: '1s' },
    { value: 100, text: '10s' },
    { value: 600, text: '1m' },
    { value: 6000, text: '10m' },
    { value: 36000, text: '1h' },
  ];
  
  return (
    <div className="RestTime">
      <h3 className="text-3xl font-bold p-2">Rest Time</h3>
      <div className="flex justify-center items-center">
        <div className="flex flex-col col-25">
          {buttonValues.map((buttonValue) => (
            <Button
              key={uuid.v4()}
              onClickFn={setRestTimeButton}
              onClickParams={-buttonValue.value}
              text={`-${buttonValue.text}`}
              color="red"
            />
          ))}
        </div>
        <div className="flex flex-col col-50">
          <h3 className="text-5xl font-bold p-2">
            {CronometerTimeView(restTime)}
          </h3>
        </div>
        <div className="flex flex-col col-25">
          {buttonValues.map((buttonValue) => (
            <Button
              key={uuid.v4()}
              onClickFn={setRestTimeButton}
              onClickParams={buttonValue.value}
              text={`+${buttonValue.text}`}
              color="green"
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default RestTimerSetup;