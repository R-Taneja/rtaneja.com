import React from 'react';
import ReactDOM from 'react-dom';
import Home from './screens/Home';
import Projects from './screens/Projects';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <Home />,
  },
  {
    path: "/projects",
    element: <Projects />,
    errorElement: <Projects />,
  }
]);

ReactDOM.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
  document.getElementById('root')
);
