import React, { useState, useReducer } from "react";
import ToDo from "./ToDo";

const reducer = (state, action) => {
  console.log("state", state, "action", action);
  switch (action.type) {
    case "ADD_TODO":
      return [
        ...state,
        {
          text: action.payload.text,
          description: action.payload.description,
          isCompleted: false,
        },
      ];
    case "COMPLETE_TODO":
      return state.map((todo, index) =>
        index === action.payload.index ? { ...todo, isCompleted: true } : todo
      );
    // case "EDIT_TODO":
    //   return state.map((todo, editData, text, index) => console.log(text));
    case "REMOVE_TODO":
      return state.filter((_, index) => index !== action.payload.index);
    default:
      return state;
  }
};

const ToDoList = () => {
  const [todos, dispatch] = useReducer(reducer, [
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

  const [editingIndex, setEditingIndex] = useState(null);

  const addToDo = (text, description) => {
    dispatch({ type: "ADD_TODO", payload: { text, description } });
  };

  const completeToDo = (index) => {
    dispatch({ type: "COMPLETE_TODO", payload: { index } });
  };

  const removeToDo = (index) => {
    dispatch({ type: "REMOVE_TODO", payload: { index } });
  };

  const EditToDo = (todo, newText) => {
    if (newText.trim() === "") return;
    setEditingIndex(null);
    todo.text = newText;
  };

  return (
    <div className="todo-list">
      {todos.map((todo, index) => (
        <ToDo
          key={index}
          todo={todo}
          index={index}
          removeToDo={removeToDo}
          completeToDo={completeToDo}
          setEditing={setEditingIndex}
          editingIndex={editingIndex}
          saveToDo={EditToDo}
        />
      ))}

      <form
        onSubmit={(e) => {
          e.preventDefault();
          addToDo(
            e.target.elements.addToDo.value,
            e.target.elements.addDescription.value
          );
          e.target.elements.addToDo.value = "";
          e.target.elements.addDescription.value = "";
        }}
      >
        <input type="text" name="addToDo" />
        <input type="text" name="addDescription" placeholder="Description" />
        <button type="submit">Add ToDo</button>
      </form>
    </div>
  );
};

export default ToDoList;
