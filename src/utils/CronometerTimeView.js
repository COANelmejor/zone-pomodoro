/**
 * # CronometerTimeView
 * 
 * This function is used to format the time units in the format `HH:MM:SS.m`
 *  
 * ## Time units Explanation
 * - 1 second = 100 time units
 * - 1 minute = 6000 time units
 * - 1 hour = 360000 time units
 * 
 * ## Examples
 * - if time == 0, return 00:00:00.00
 * - if time == 6000 (1 minute), return 00:01:00.00
 * - if time == 360000 (1 hour), return 01:00:00.00
 * - if time == 360100 (1 hour and 1 second), return 01:00:01.00
 * 
 * @param { Number } time 
 * @returns { String } `HH:MM:SS.m` string
 */
function CronometerTimeView(time) {

  const hours = Math.floor(time / 36000);
  const minutes = Math.floor((time - hours * 36000) / 600);
  const seconds = Math.floor((time - hours * 36000 - minutes * 600) / 10);
  const milliseconds = time - hours * 36000 - minutes * 600 - seconds * 10;

  return `${
    hours.toString().padStart(2, "0")
  }:${
    minutes.toString().padStart(2, "0")
  }:${
    seconds.toString().padStart(2, "0")
  }.${
    milliseconds.toString().padStart(1, "0")
  }`;
}

export default CronometerTimeView;