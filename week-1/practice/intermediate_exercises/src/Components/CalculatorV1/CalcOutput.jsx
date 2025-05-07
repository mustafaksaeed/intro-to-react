import React from "react";

const CalcOutput = ({ result }) => {
  return (
    <div className="calcOutput">
      <h1 type="text" style={{ color: result === "error" ? "red" : "black" }}>
        {result}
      </h1>
    </div>
  );
};

export default CalcOutput;
