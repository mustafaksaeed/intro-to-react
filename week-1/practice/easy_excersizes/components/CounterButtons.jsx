import React from "react";

const CounterButtons = ({ handleClick, value }) => {
  return (
    <div>
      <button onClick={handleClick}>{value}</button>
    </div>
  );
};

export default CounterButtons;
