import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Layout from './Layout/Layout';
import Home from './Components/Home/Home';
import AddProduct from './Components/AddProduct/AddProduct';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import MyCart from './Components/MyCart/MyCart';
import AuthProvider from './Components/Provider/AuthProvider';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children:[
      {
        path:'/',
        element:<Home></Home>,
        loader:()=> fetch('http://localhost:5000/service')
      },
      {
        path:'/AddProduct',
        element:<AddProduct></AddProduct>

      },{
        path:'/cart',
        element:<MyCart></MyCart>
      },
      {
        path:'/Login',
        element:<Login></Login>
      },
      {
        path:'/Register',
        element:<Register></Register>
      }
    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
    <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
)
