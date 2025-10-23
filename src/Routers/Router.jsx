import { createBrowserRouter } from "react-router";
import HomeLayout from "../layouts/HomeLayout";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import AuthLayout from "../layouts/AuthLayout";
import ErrorPage from "../Pages/ErrorPage";
import Home from "../Pages/Home";
import AllToys from "../components/AllToys";
import DetailsPage from "../Pages/DetailsPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
    children:[
      {
        path:'/',
        element: <Home></Home> ,
        loader:()=>fetch('toysData.json')
      },
      {
        path:'/all-toys',
        element:<AllToys></AllToys>,
        loader:()=>fetch('toysData.json')
      },
      {
        path:'/toy-details/:toyId',
        element:<DetailsPage></DetailsPage>,
        loader:()=>fetch('toysData.json')
      }
    ]
  },
   {
            path: '/auth',
            element: <AuthLayout></AuthLayout> ,
            children:[
                {
                    path:'/auth/login',
                    element:<Login></Login>
                },
                {
                    path:'/auth/register',
                    element:<Register></Register>
                }
            ]
        },
  {
    path: "/*",
    element: <ErrorPage></ErrorPage>,
  },
]);

export default router;