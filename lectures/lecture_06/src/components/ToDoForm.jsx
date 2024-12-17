/* eslint-disable react/prop-types */
import { PlusIcon } from "@heroicons/react/24/solid";
import { useState } from "react";

export default function ToDoForm({ handleAddTodo }) {
  const [input, setInput] = useState("");
  console.log(input);
  function handleClick() {
    handleAddTodo({
      id: Number(Math.floor(Math.random() * 1000)),
      title: input,
      completed: false,
    });
  }
  return (
    <>
      <div className="flex items-center rounded-md text-xl  ">
        <input
          className="placeholder:pl-4 border-b-[#38BDF8]"
          type="text"
          placeholder="Add Task"
          value={input}
          onChange={(event) => setInput(event.target.value)}
        />
        <button onClick={handleClick} className="outline-none  text-[#38BDF8]">
          <PlusIcon className="size-6 " />
        </button>
      </div>
    </>
  );
}
