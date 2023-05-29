import React from "react";

function Button({ onClickFn, onClickParams, text, color }) {
  let classNameValue = "";

  switch (color) {
    case "red":
      classNameValue =
        "bg-red-500 hover:bg-red-700 ";
      break;
    case "green":
      classNameValue =
        "bg-green-500 hover:bg-green-700";
      break;
    case "blue":
      classNameValue =
        "bg-blue-500 hover:bg-blue-700";
      break;
    default:
      classNameValue =
        "bg-red-500 hover:bg-red-700";
      break;
  }

  return (
    <button className={`text-white font-bold py-0 px-2 rounded m-2 text-2xl w-full ${classNameValue}`} onClick={() => onClickFn(onClickParams)}>
      {text}
    </button>
  );
}

export default Button;