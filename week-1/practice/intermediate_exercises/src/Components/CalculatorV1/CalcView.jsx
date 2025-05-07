import React from "react";

const CalcView = ({ number, onhandle }) => {
  return (
    <div className="inputNumber">
      <input
        value={number}
        type="text"
        onChange={onhandle}
        style={{
          background: "transparent",
          border: "none",
          fontSize: "32px",
          fontWeight: "bold",
        }}
      />
    </div>
  );
};

export default CalcView;
