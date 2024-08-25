import React, { useState, useReducer } from "react";
import ToDo from "./ToDo";

const reducer = (state, action) => {
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

const ToDoList = ({ todosList }) => {
  console.log(todosList);
  const [todos, dispatch] = useReducer(reducer, todosList);

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
    <div className="todo-list pt-4 w-full flex flex-col gap-3 items-center">
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
        className="flex w-2/3 gap-2 flex-wrap justify-center"
      >
        <input
          type="text"
          className="block w-1/3 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          placeholder="Todo"
          name="addToDo"
        />
        <input
          type="text"
          className="block w-1/3 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          name="addDescription"
          placeholder="Description"
        />
        <button
          type="submit"
          className="flex w-auto justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 w-auto"
        >
          Add ToDo
        </button>
      </form>
      <div className="card w-auto">
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
      </div>
    </div>
  );
};

export default ToDoList;
