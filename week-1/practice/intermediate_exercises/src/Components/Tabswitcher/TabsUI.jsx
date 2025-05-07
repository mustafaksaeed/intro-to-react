import React, { useState } from "react";
import Tabs from "./Tabs";

const TabsUI = () => {
  const [tab, setTab] = useState([
    {
      label: "button1",
      isShown: true,
      text: "hi my name is abdi",
    },
    {
      label: "button2",
      isShown: false,
      text: "hi my name is ali",
    },
    {
      label: "button2",
      isShown: false,
      text: "hi my name is abdirahman",
    },
  ]);

  const handleTab = (index) => {
    const updatedTab = tab.map((item, i) => ({
      ...item,
      isShown: i === index,
    }));
    setTab(updatedTab);
  };
  return (
    <div>
      {tab.map((item, key) => (
        <Tabs
          key={key}
          isShown={item.isShown}
          label={item.label}
          text={item.text}
          handleClick={() => handleTab(key)}
        />
      ))}
    </div>
  );
};

export default TabsUI;
