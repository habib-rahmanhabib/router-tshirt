import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home/Home';
import Main from './components/layout/Main';
import Order from './components/order/Order';
import tshirts from '../public/tshirts.json'
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [{
      path: 'order',
      element: <Order></Order>
    },
    {
      path: 'home',
      element: <Home></Home>,
      loader: () => fetch('tshirts.json')

    },
    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
