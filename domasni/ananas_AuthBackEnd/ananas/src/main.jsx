import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Routes/Layout";

import HomePage from "./Routes/HomePage";
import ProductByIDPage from "./Routes/ProductByIDPage";
import ProductsCategories from "./Routes/ProductsCategories";

import { Provider } from "react-redux";
import store from "./app/store";

import CardItems from "./Routes/CardItems";
import Favourites from "./Routes/Favourites";
import LoginPage from "./Routes/LoginPage";
import SignUp from "./Routes/SignUp";

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key");
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/product/:id" element={<ProductByIDPage />} />
            <Route
              path="/products/category/:categories"
              element={<ProductsCategories />}
            />

            <Route path="/favorites" element={<Favourites />} />
            <Route path="/korpa" element={<CardItems />} />
          </Route>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  </StrictMode>
);
