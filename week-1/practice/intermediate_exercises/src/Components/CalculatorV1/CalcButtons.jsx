import React from "react";

const CalcButtons = ({ label, handleClick }) => {
  return (
    <div>
      <button
        style={{ padding: "1rem" }}
        className="labelBtn"
        onClick={(handleClick)}
      >
 
        {label}
      </button>
    </div>
  );
};

export default CalcButtons;
