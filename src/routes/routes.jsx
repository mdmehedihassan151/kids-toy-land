import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home";
import MyProfile from "../pages/MyProfile/MyProfile";
import ToyDetails from "../pages/ToyDetails/ToyDetails";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import AuthLayout from "../layout/AuthLayout";

export const router = createBrowserRouter([
    {
        path:'/',
        element:<MainLayout/>,
        children:[
            {
                index: true,
                loader:() =>fetch('/toydata.json'),
                path:'',
                element:<Home/>,
            },
            {
                path:'/profile',
                element:<MyProfile/>,
            },
            {
                path:'/toyDetails/:id',
                element:<ToyDetails/>,
            }
        ]
    },
    {
        path:'/auth',
        element: <AuthLayout/>,
        children:[
            {
                path:'/auth/login',
                element:<Login/>,
            },
            {
                path:'/auth/register',
                element:<Register/>,
            },
        ]
    }
])