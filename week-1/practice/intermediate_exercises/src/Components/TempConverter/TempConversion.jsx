import React, { useState, useEffect } from "react";
import TempInput from "./TempInput.jsx";

const TempConversion = () => {
  const [celcius, setCelcius] = useState(32);
  const [fah, setFah] = useState(0);

  const celToFah = (e) => {
    setCelcius((e.target.value * 9) / 5 + 32);
  };

  const fahToCel = (e) => {
    setFah(((e.target.value - 32) * 5) / 9);
  };

  useEffect(() => {
    console.log(`fahrenheit: ${fah}, Celcius ${celcius}`);
  }, [fah, celcius]);

  return (
    <div>
      <TempInput
        label={"celcius"}
        onInput={(e) => celToFah(e)}
        output={`${celcius.toFixed(1)} fahrenheit`}
      />

      <TempInput
        label={"fahrenheit"}
        onInput={(e) => fahToCel(e)}
        output={fah === "" ? "0 celcius" : `${fah.toFixed(1)} celcius`}
      />
    </div>
  );
};

export default TempConversion;
