/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { createContext, useEffect, useState } from "react";
import LoginPage from "../Routes/LoginPage";
import { useSelector } from "react-redux";

// eslint-disable-next-line react-refresh/only-export-components
export const LoginContext = createContext();

const AuthProvider = ({ children }) => {
  const username = useSelector((state) => state.authController.username);
  const password = useSelector((state) => state.authController.password);
  const [checkUserName, setCheckUserName] = useState(false);
  const [userInput, setUserInput] = useState();
  const [passwordInput, setPasswordInput] = useState();

  useEffect(() => {
    if (username === "") {
      setCheckUserName(true);
    }
  }, [username]);

  useEffect(() => {
    const savedData = localStorage.getItem("username");
    const savedPassword = localStorage.getItem("password");
    // setPassword(savedPassword);
    setUserInput(savedData);
  }, [username]);
  console.log(username, "username");

  useEffect(() => {
    if (username) {
      localStorage.setItem("username", userInput);
      localStorage.setItem("password", passwordInput);
    }
  }, [userInput, passwordInput]);

  return (
    <LoginContext.Provider value={{ setUserInput, setPasswordInput }}>
      <>{!userInput ? <LoginPage /> : children}</>
    </LoginContext.Provider>
  );
};

export default AuthProvider;
