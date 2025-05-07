import React from "react";
import { useState } from "react";
const ToggleButton = () => {
  const [toggle, setToggle] = useState(false);

  function trackToggle() {
    setToggle(!toggle);
  }

  return (
    <div>
      <button onClick={trackToggle}> {toggle ? "on" : "off"} </button>
    </div>
  );
};

export default ToggleButton;
