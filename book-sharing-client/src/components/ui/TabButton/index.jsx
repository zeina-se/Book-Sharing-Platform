import React from "react";
import "./style.css";

const TabButton = ({ name, value, selected, icon, onSelected }) => {
  const clickHandler = () => {
    onSelected(value);
  };

  return (
    <div
      className="flex column roundedMedium pointer tabButton"
      onClick={() => clickHandler()}
    >
      {icon}
      <p>{name}</p>

      {selected && <div className="selectedMark"></div>}
    </div>
  );
};

export default TabButton;
