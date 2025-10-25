import { createBrowserRouter } from "react-router";
import HomeLayout from "../layouts/HomeLayout";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import AuthLayout from "../layouts/AuthLayout";
import ErrorPage from "../Pages/ErrorPage";
import Home from "../Pages/Home";
import AllToys from "../components/AllToys";
import DetailsPage from "../Pages/DetailsPage";
import Loading from "../Pages/Loading";
import MyProfile from "../Pages/MyProfile";
import PrivateRoute from "../Provider/PrivateRoute";
import ForgetPassword from "../Pages/ForgetPassword";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('/toysData.json'),
        hydrateFallbackElement: <Loading></Loading>
      },
      {
        path: '/all-toys',
        element: <AllToys></AllToys>,
        loader: () => fetch('/toysData.json'),
        hydrateFallbackElement: <Loading></Loading>
      },
      {
        path: '/toy-details/:toyId',
        element: <PrivateRoute>
          <DetailsPage></DetailsPage>
        </PrivateRoute>,
        loader: () => fetch('/toysData.json'),
        hydrateFallbackElement: <Loading></Loading>
      },
      {
        path: '/profile',
        element: <PrivateRoute>
          <MyProfile></MyProfile>
        </PrivateRoute>
      }
    ]
  },
  {
    path: '/auth',
    element: <AuthLayout></AuthLayout>,
    children: [
      {
        path: '/auth/login',
        element: <Login></Login>
      },
      {
        path: '/auth/register',
        element: <Register></Register>
      },
      {
        path:'/auth/forget-pass',
        element:<ForgetPassword></ForgetPassword>
      }
    ]
  },
  {
    path: "/*",
    element: <ErrorPage></ErrorPage>,
  },
]);

export default router;