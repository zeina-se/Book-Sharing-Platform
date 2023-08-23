import React from "react";
import "./style.css";

const InputFile = ({ onChange, label, name, id }) => {
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    onChange(file);
  };

  return (
    <div className="flex column baseInput">
      <label htmlFor={id}>{label}</label>
      <input
        className="roundedMedium"
        type="file"
        name={name}
        id={id}
        onChange={handleFileChange}
      />
    </div>
  );
};

export default InputFile;