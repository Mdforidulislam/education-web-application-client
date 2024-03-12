import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/Root/MainLayout";
import Erropage from "../Layout/Root/ErrorElement/Erropage";
import Home from "../Components/Home/Home";
import LogIn from "../Pages/authentication/LogIn/LogIn";
import Register from "../Pages/authentication/Register/Register";

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
        element :<Register/>
      },
    ],
  },
]);

export default Router;
