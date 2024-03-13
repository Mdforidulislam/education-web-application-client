import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/Root/MainLayout";
import Erropage from "../Layout/Root/ErrorElement/Erropage";
import Home from "../Components/Home/Home";
import Dashboard from "../Dashboard/Dashboard";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <Erropage />,
    children: [
      {
        path: "/",
        element: <Home />,
      }
    ],
  },

  {
    path: '/dashboard',
    element: <Dashboard></Dashboard>,     
    children: [
     
      // {
      //   path: 'profile',
      //   element: <adminProfile></adminProfile>,

      // },

      
    ],
  },
]);

export default Router;
