import React, { useContext } from "react";
import { ThemeContext } from "./store/ThemeProvider";

const Mypage = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div
      className={`flex items-center justify-center h-screen w-screen bg-${
        theme === "black" ? "white" : "black"
      }`}
    >
      <button
        onClick={() => toggleTheme()}
        className="bg-white rounded-full border border-black p-4 "
      >
        LightMode
      </button>
    </div>
  );
};

export default Mypage;
