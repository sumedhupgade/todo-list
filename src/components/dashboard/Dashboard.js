import React, { useState } from "react";
import ToDoList from "../ToDoList";

const Dashboard = () => {
  const [todos, setTodos] = useState([
    {
      text: "Learn React",
      description: "Read React documentation",
      isCompleted: false,
    },
    {
      text: "Build a ToDo App",
      description: "Create a simple to-do list app",
      isCompleted: false,
    },
    {
      text: "Master React",
      description: "Practice with advanced concepts",
      isCompleted: false,
    },
  ]);
  return (
    <div className="flex gap-2 items-center flex-col">
      <ToDoList todosList={todos}></ToDoList>
    </div>
  );
};

export default Dashboard;
