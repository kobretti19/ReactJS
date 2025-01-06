import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Index from "./Routes/Index";
import Layout from "./Routes/Layout";
import AboutPage from "./Routes/AboutPage";
import ProductByID from "./Routes/ProductByID";
import ContactPage from "./Routes/ContactPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Index />,
      },
      {
        path: "/about",
        element: <AboutPage />,
      },
      {
        path: "/product/:id",
        element: <ProductByID />,
      },
    ],
  },
  {
    path: "/contact",
    element: <ContactPage />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
