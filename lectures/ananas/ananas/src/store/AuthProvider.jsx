/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { createContext, useEffect, useState } from "react";
import LoginPage from "../Routes/LoginPage";

// eslint-disable-next-line react-refresh/only-export-components
export const LoginContext = createContext();

const AuthProvider = ({ children }) => {
  const [userInput, setUserInput] = useState();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [inputPassword, setInputPassword] = useState("");

  useEffect(() => {
    const savedData = localStorage.getItem("username");
    const savedPassword = localStorage.getItem("password");
    setPassword(savedPassword);
    setUsername(savedData);
  }, [username]);
  console.log(username, "username");

  useEffect(() => {
    if (userInput) {
      localStorage.setItem("username", userInput);
      localStorage.setItem("password", inputPassword);
    }
  }, [userInput, username, inputPassword]);

  return (
    <LoginContext.Provider
      value={{
        setUserInput,
        userInput,
        username,
        setUsername,
        inputPassword,
        setInputPassword,
      }}
    >
      <>{!username ? <LoginPage /> : children}</>
    </LoginContext.Provider>
  );
};

export default AuthProvider;
