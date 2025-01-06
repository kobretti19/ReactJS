import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        {/* Staticni stranici */}
        <Route path="/" element={<div>Hello world</div>} />
        <Route path="/about" element={<div>Hello about</div>} />
        <Route path="/contact" element={<div>Hello contact</div>} />
        {/* Dinamicna stranica */}
        <Route path="/product/:id" element={<div>Hello contact</div>} />

        <Route path="*" element={<div>ERROR</div>} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
