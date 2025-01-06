import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { increment } from "./app/counterSlice";
import {
  handleChangeFirstName,
  handleChangeLastName,
  handleChangePassword,
} from "./app/createUserSlice";

function App() {
  const count = useSelector((state) => state.counter.value);

  const firstName = useSelector((state) => state.createUser.firstName);
  const lastName = useSelector((state) => state.createUser.lastName);
  const password = useSelector((state) => state.createUser.password);
  const dispatch = useDispatch();
  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => dispatch(increment())}>count is {count}</button>
      </div>
      <form className="flex flex-col space-y-3 justify-center items-center border-black">
        <input
          className="border-black border-spacing-1"
          placeholder="firstName"
          type="text"
          value={firstName}
          onChange={(e) => dispatch(handleChangeFirstName(e.target.value))}
        />
        <input
          placeholder="lastName"
          type="text"
          value={lastName}
          onChange={(e) => dispatch(handleChangeLastName(e.target.value))}
        />
        <input
          placeholder="password"
          type="text"
          value={password}
          onChange={(e) => dispatch(handleChangePassword(e.target.value))}
        />
        <input type="text" />
      </form>
    </>
  );
}

export default App;
