import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home.tsx";
import Quiz from "./pages/Quiz.tsx";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/quiz/:id", element: <Quiz /> },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
