/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { CheckIcon, PlusCircleIcon, XMarkIcon } from '@heroicons/react/24/solid';

const ToDoForm = ({ handleAddTodo, editForm, editInput }) => {
  //   console.log(props);
  const [input, setInput] = useState(editInput);

  const handleSubmit = () => {
    handleAddTodo({ id: Math.random(Math.floor * 1000), title: input, completed: false });
    setInput('');
  };
  let inputForm = (
    <input
      value={input}
      onChange={(event) => setInput(event.target.value)}
      className="outline-none"
      placeholder="Add To Do"
      type="text"
    />
  );

  return (
    <div className="flex items-center bg-white p-2 rounded-md border-white">
      {editForm ? (
        <div className="space-x-2">
          {inputForm}
          <button className="bg-green-400 p-1 rounded-md">
            <CheckIcon onClick={handleSubmit} className="h-6 w-6 text-white" />
          </button>
          <button className="bg-red-400 p-1 rounded-md">
            <XMarkIcon className="h-6 w-6 text-white" />
          </button>
        </div>
      ) : (
        <>
          {inputForm}
          <button
            onClick={handleSubmit}
            className="bg-blue-400 hover:bg-sky-700 p-2 rounded transition-all duration-300 transform active:scale-105"
          >
            <PlusCircleIcon className="h-6 w-6 text-white" />
          </button>
        </>
      )}
    </div>
  );
};

export default ToDoForm;
