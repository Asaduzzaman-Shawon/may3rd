import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Navbar from './Nav/Navbar.jsx';
import Layout from './layout/Layout.jsx';
import Home from './home/Home.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children:[
      {
        path: "/",
        element: <Home></Home>
      }
    ]
  },
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
  <RouterProvider router={router} />
  </StrictMode>,
)
