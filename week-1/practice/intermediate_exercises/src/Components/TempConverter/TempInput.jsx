import React from "react";

const TempInput = ({ onInput, label, output }) => {
  return (
    <div>
      <label>
        {label}
        <input  onChange={onInput} />
      </label>
      <p>{output}</p>
    </div>
  );
};

export default TempInput;
