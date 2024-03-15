import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/Root/MainLayout";
import Erropage from "../Layout/Root/ErrorElement/Erropage";
import Home from "../Components/Home/Home";
import AdminDashboard from "../Dashboard/AdminDashboard";
import AdminProfile from "../Dashboard/AdminProfile/AdminProfile";

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
    element: <AdminDashboard></AdminDashboard>,     
    children: [
     
      {
        path: 'adminProfile',
        element: <AdminProfile></AdminProfile>,

      },

      
    ],
  },
]);

export default Router;
