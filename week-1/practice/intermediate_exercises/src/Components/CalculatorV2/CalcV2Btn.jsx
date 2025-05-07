import React from "react";

const CalcV2Btn = (onhandleClick, label) => {
  return (
    <div>
      <button onClick={onhandleClick} />
      {label}
    </div>
  );
};

export default CalcV2Btn;
