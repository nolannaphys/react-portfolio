import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import App from './App.jsx'
import About from './pages/About'
import Project from './pages/Project'
import Contact from './pages/Contact'
import Resume from './pages/Resume'

import 'bootstrap/dist/css/bootstrap.min.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <About />
      },
      {
        path: '/about',
        element: <About />
      },
      {
        path: '/project',
        element: <Project />
      },
      {
        path: '/contact',
        element: <Contact />
      },
      {
        path: '/resume',
        element: <Resume />
      },
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
