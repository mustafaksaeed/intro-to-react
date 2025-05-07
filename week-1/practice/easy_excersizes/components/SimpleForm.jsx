import React from "react";
import { useState } from "react";

const SimpleForm = () => {
  const [name, setName] = useState("");

  function handleSubmit(e) {
    e.preventdefault();
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <p>my name is {name}</p>
      </form>
    </div>
  );
};

export default SimpleForm;


//try multiple inputs by making object useState 