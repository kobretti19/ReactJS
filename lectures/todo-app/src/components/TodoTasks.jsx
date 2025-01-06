/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { CheckIcon, PencilIcon, XMarkIcon } from '@heroicons/react/24/solid';
import React, { useState } from 'react';
import ToDoForm from './ToDoForm';
import CompletedTask from './CompletedTask';

const TodoTasks = ({ todos, updateTodo, removeTodo }) => {
  const [editInput, setEditInput] = useState({
    id: null,
    text: '',
    completed: false
  });

  const [completedTasks, setCompletedTasks] = useState([]);

  function completedChange(value) {
    const filteredTasks = completedTasks.filter((todo) => todo.text !== value.text);
    setCompletedTasks([value, ...filteredTasks]);
  }

  const submitUpdate = (value) => {
    updateTodo(editInput.id, value);
  };

  return (
    <div>
      {todos.map((todo) => {
        if (todo.id === editInput.id)
          return (
            <ToDoForm
              handleAddTodo={submitUpdate}
              key={todo.id}
              editForm
              editInput={editInput.text}
            />
          );

        return (
          <div
            key={todo.id}
            className="mt-4 flex items-center justify-between bg-white p-2 rounded-md"
          >
            <span>{todo.title}</span>
            <div className="space-x-2">
              <button
                onClick={() => {
                  completedChange({ id: todo.id, text: todo.title });
                }}
                className="bg-green-400 p-1 rounded-md"
              >
                <CheckIcon className="h-6 w-6 text-white" />
              </button>
              <button
                onClick={() => {
                  setEditInput({
                    completed: false,
                    id: todo.id,
                    text: todo.title
                  });
                }}
                className="bg-orange-400 p-1 rounded-md"
              >
                <PencilIcon className="h-6 w-6 text-white" />
              </button>
              <button
                onClick={() => {
                  removeTodo({
                    id: todo.id,
                    text: todo.title
                  });
                }}
              >
                <XMarkIcon className="h-6 w-6 text-red-500" />
              </button>
            </div>
          </div>
        );
      })}
      {/* <CompletedTask editedTasks={completedTasks} /> */}
      <div className=" mt-6 space-y-2 bg-white min-h-[100px] p-3 rounded-md">
        {completedTasks.map((task) => {
          if (task.text) {
            return (
              <ol
                className="flex flex-row justify-between bg-green-200 w-full rounded-md p-2 px-2 line-through    "
                key={task.id}
              >
                <li className="text-red-600">{task.text} </li>
                <span>
                  <CheckIcon className="h-6 w-6 text-red-600" />
                </span>
              </ol>
            );
          }
        })}
      </div>
    </div>
  );
};

export default TodoTasks;
