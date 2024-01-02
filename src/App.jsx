import React from "react";
import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Browse from "./Components/Browse";
import Home from "./Components/Home";
import Login from "./Components/Login";
import Cart from "./Components/Cart";
import Protected from "./utils/Protected";

const App = () => {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Browse />,
      children: [
        {
          path: "/",
          element: <Protected Component={Home} />,
        },
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/cart",
          element: <Protected Component={Cart} />,
        },
      ],
    },
  ]);

  return <RouterProvider router={appRouter} />;
};

export default App;
