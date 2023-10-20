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
import BrandPage from './Components/BrandPage/BrandPage';
import { ThemeProvider } from '@material-tailwind/react';
import UpdateForm from './Components/UpdateForm/UpdateForm';



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
      ,{
        path:'/Brand/:name',
        element:<BrandPage></BrandPage>,
        loader:({params})=> fetch(`http://localhost:5000/slider/${params.name}`)
      },
      {
        path:'/update/:id',
        element:<UpdateForm></UpdateForm>,
        loader:({params})=> fetch(`http://localhost:5000/update/${params.id}`)
      }
    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
    <AuthProvider>
    <RouterProvider router={router} />
    </AuthProvider>
    </ThemeProvider>
  </React.StrictMode>
)
