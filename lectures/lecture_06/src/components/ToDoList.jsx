import { useState } from "react";
import ToDoForm from "./ToDoForm";
import ToDoTasks from "./ToDoTasks";

export default function ToDoList() {
  const [todos, setTodos] = useState([]);

  const addTodo = (value) => {
    setTodos([value, ...todos]);
  };

  const updateTodo = (todoId, newValue) => {
    setTodos(todos.map((todo) => (todo.id === todoId ? newValue : todo)));
  };

  console.log(todos);
  return (
    <>
      <div className="bg-white h-auto w-auto rounded-md shadow-lg p-4">
        <ToDoForm handleAddTodo={addTodo} />
        <ToDoTasks todos={todos} updateTodo={updateTodo} />
      </div>
    </>
  );
}
