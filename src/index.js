import React from 'react';
import ReactDOM from 'react-dom';
import Home from './screens/Home';
import Projects from './screens/Projects';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Analytics } from '@vercel/analytics/react';

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
    <Analytics />
  </React.StrictMode>,
  document.getElementById('root')
);
