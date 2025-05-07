import React from "react";
import { useState } from "react";
import TodoItem from "./TodoItem";
const todoList = () => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "playing soccer",
      isCompleted: false,
    },
    {
      id: 2,
      text: "playing basketball",
      isCompleted: true,
    },
  ]);

  const [text, setText] = useState("");

  function addTasks(text) {
    const newTasks = {
      id: Date.now(),
      text,
      isCompleted: false,
    };
    if (text.length > 0) {
      setTasks([...tasks, newTasks]);
      setText("");
    }
  }

  function deleteTask(id) {
    setTasks(tasks.filter((task) => task.id !== id));
  }

  function completed(id) {
    setTasks(
      tasks.map((task) => {
        if (task.id === id) {
          return { ...task, isCompleted: !task.isCompleted };
        } else {
          return task;
        }
      })
    );
  }

  return (
    <div>
      <h1>Todo list</h1>

      {tasks.map((task) => (
        <TodoItem
          key={task.id}
          task={task}
          deleteTask={deleteTask}
          toggleCompleted={completed}
        />
      ))}

      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={() => addTasks(text)}>Add</button>
    </div>
  );
};

export default todoList;

// add a complete where the imput is slashed
