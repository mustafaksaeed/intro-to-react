import React from "react";

const Tabs = ({ handleClick, label, isShown, text }) => {
  return (
    <div>
      <button onClick={handleClick}>{label}</button>
      <p style={{ display: isShown ? "block" : "none" }}>{text}</p>
    </div>
  );
};

export default Tabs;
