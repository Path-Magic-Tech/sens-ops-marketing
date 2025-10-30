import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Technology from './pages/Technology.jsx'
import Solutions from './pages/Solutions.jsx'
import Contact from './pages/Contact.jsx'

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <App />,
      children: [
        { index: true, element: <Home /> },
        { path: 'about', element: <About /> },
        { path: 'technology', element: <Technology /> },
        { path: 'solutions', element: <Solutions /> },
        { path: 'contact', element: <Contact /> },
      ],
    },
  ],
  { basename: import.meta.env.BASE_URL }
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
