/* eslint-disable */
import { useState } from "react";
import reactLogo from "./assets/react.svg";
import semosLogo from "./assets/semos_logo.png";
import viteLogo from "/vite.svg";
import LectureApp from "./LectureApp";
import "./App.css";

function App() {
  return (
    <div>
      <h1>Lecture 01 SEMOS</h1>
      <a href="https://semosedu.mk/?s" target="_blank">
        <img src={semosLogo} className="logo react" alt="React logo" />
      </a>

      <h1>
        <LectureApp />
      </h1>
      <a href="https://react.dev" target="_blank">
        <img src={reactLogo} className="logo react" alt="React logo" />
      </a>
      <a href="https://vite.dev" target="_blank">
        <img src={viteLogo} className="logo" alt="Vite logo" />
      </a>
    </div>
  );
}

export default App;
