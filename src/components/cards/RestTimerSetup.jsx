
import React, { useState } from 'react';
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
  const [active, setActive] = useState(true)
  return (
    <div className="RestTime">
      <h3 onClick={() => setActive(!active)} className="transition-all duration-500 text-2xl font-bold p-2 bg-lime-500 hover:bg-lime-200 border border-lime-500 cursor-pointer rounded-md w-full mx-auto mb-5 z-50">Rest Time</h3>
      <div className={`transition-all duration-500 flex flex-col justify-center items-center ${active ? 'invisible h-0': 'h-80 visible'} w-full right-0 left-0 absolute`}>
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
    </div>
  );
}

export default RestTimerSetup;