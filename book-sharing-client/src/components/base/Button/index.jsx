import React from "react";
import "./style.css";

const Button = ({ text, color, textColor,padding="null", onClick, enabled = true }) => {
  const clickHandler = () => {
    if (enabled) {
      onClick();
    }
  };

  return (
    <button
      className={`roundedMedium baseButton pointer ${color} ${textColor} ${padding}`}
      onClick={() => clickHandler()}
    >
      {text}
    </button>
  );
};

export default Button;
