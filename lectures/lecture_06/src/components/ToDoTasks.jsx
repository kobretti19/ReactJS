import { useState } from "react";

/* eslint-disable react/prop-types */
export default function ToDoTasks({ todos, updateTodo }) {
  const [editInput, setEditInput] = useState({
    id: null,
    text: "",
  });

  console.log(editInput);

  const submitUpdate = (value) => {
    updateTodo(editInput.id, value);
  };

  return (
    <>
      <div className="flex flex-col text-[#38BDF8] rounded-md space-y-4">
        {todos.map((task) => (
          <span className="bg-white  rounded-md text-xl " key={task.id}>
            <span>{task.title}</span>
            <span>{task.completed ? "✅" : "❌"}</span>
            <button
              onClick={setEditInput({
                id: task.id,
                text: task.title,
              })}
            >
              ✅
            </button>
          </span>
        ))}
      </div>
    </>
  );
}
