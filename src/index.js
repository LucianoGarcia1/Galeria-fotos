import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import { NotFound } from "./pages/NotFound";
import { Context } from "./services/Context";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },

  {
    path: "*",
    element: <NotFound />,
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Context>
      <RouterProvider router={router} />
    </Context>
  </React.StrictMode>
);
