import { createBrowserRouter } from "react-router";
import HomeLayout from "../layouts/HomeLayout";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import AuthLayout from "../layouts/AuthLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
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
    element: <h2>Error 404</h2>,
  },
]);

export default router;