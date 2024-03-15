import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/Root/MainLayout";
import Erropage from "../Layout/Root/ErrorElement/Erropage";
import Home from "../Components/Home/Home";

import SignUp from "../Pages/authentication/Login-Signup/SignUp";
import LogIn from './../Pages/LogIn/LogIn';


const Router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <Erropage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path :"/logIn",
        element :<LogIn/>
      },
      {
        path :"/signUp",
        element :<SignUp></SignUp>
      },
    ],
  },
]);

export default Router;
