import React from "react";

const ToggleBtn = ({ onHandleClick }) => {
  return (
    <div>
      <button onClick={onHandleClick}>Button</button>
    </div>
  );
};

export default ToggleBtn;
