import React from "react";

const CalcV2Input = (number, onHandle) => {
  return (
    <div>
      <input value={number} onChange={onHandle} />
    </div>
  );
};

export default CalcV2Input;
