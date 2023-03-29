import React from "react";

function Button({ onClickFn, onClickParams, text, color }) {
  let classNameValue = "";

  switch (color) {
    case "red":
      classNameValue =
        "bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded m-2 text-2xl";
      break;
    case "green":
      classNameValue =
        "bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded m-2 text-2xl";
      break;
    default:
      classNameValue =
        "bg-red-500 hover:bg-red-700 text-white text-white font-bold py-2 px-4 rounded m-2 text-2xl";
      break;
  }

  return (
    <button className={classNameValue} onClick={() => onClickFn(onClickParams)}>
      {text}
    </button>
  );
}

export default Button;