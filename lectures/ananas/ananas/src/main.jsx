import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Routes/Layout";
import LoginPage from "./Routes/LoginPage";
import HomePage from "./Routes/HomePage";
import ProductByIDPage from "./Routes/ProductByIDPage";
import ProductsCategories from "./Routes/ProductsCategories";
import UserNameProvider from "./store/AuthProvider";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <UserNameProvider>
        <Routes>
          {}
          <Route path="/" element={<Layout />}>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/" element={<HomePage />} />
            <Route path="/product/:id" element={<ProductByIDPage />} />
            <Route
              path="/products/category/:categories"
              element={<ProductsCategories />}
            />
          </Route>
        </Routes>
      </UserNameProvider>
    </BrowserRouter>
  </StrictMode>
);
