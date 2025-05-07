import React, { useState, useEffect } from "react";
import FilterListInput from "./FilterListInput.jsx";

const FilterlistUI = () => {
  const list = ["mustafa", "ali", "drake", "lebron", "justchillin", "superman"];

  const [listValue, setListValue] = useState(list);

  useEffect(() => {
    console.log(`listValue: ${listValue.join(" ")}`);
  }, [listValue]);

  function filterList(inputValue) {
    const newList = list.filter((e) => e !== inputValue);
    setListValue(newList);
  }

  return (
    <div>
      <FilterListInput onHandleChange={(e) => filterList(e.target.value)} />
      <p>Filtered items: {listValue.join(" ")}</p>
    </div>
  );
};

export default FilterlistUI;
