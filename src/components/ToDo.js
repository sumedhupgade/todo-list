import React, { useState } from "react";

const ToDo = ({
  todo,
  index,
  completeToDo,
  removeToDo,
  editingIndex,
  setEditing,
  saveToDo,
}) => {
  const [newText, setNewText] = useState(todo.text);

  return (
    <div
      className="todo"
      style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}
    >
      <div className="flex flex-col gap-1 w-3/4">
      {editingIndex === index ? (
        <input
          type="text"
          value={newText}
          onChange={(e) => {
            setNewText(e.target.value);
          }}
        />
      ) : (
        <strong>{todo.text}</strong>
      )}
      {todo.description}
      </div>
      {editingIndex === index ? (
        <div>
          <button onClick={() => saveToDo(todo, newText)}>Save</button>
          <button onClick={() => {setEditing(null);setNewText(todo.text)}}>Cancel</button>
        </div>
      ) : (
        <div>
          <button onClick={() => completeToDo(index)}>Complete</button>
          <button onClick={() => setEditing(index)}>Edit</button>
          <button onClick={() => removeToDo(index)}>x</button>
        </div>
      )}
    </div>
  );
};

export default ToDo;
