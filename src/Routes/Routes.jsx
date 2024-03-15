import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/Root/MainLayout";
import Home from "../Components/Home/Home";
import AdminDashboard from "../Dashboard/AdminDashboard";
import AdminProfile from "../Dashboard/AdminProfile/AdminProfile";
import ErrorPage from "../Layout/Root/ErrorElement/ErrorPage";
import About from "../Pages/About/About";
import Contact from "../Pages/Contact/Contact";
import Register from "../Pages/Authentication/Register/Register";
import Login from "../Pages/Authentication/Login/Login";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
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

      }
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },

  
]);

export default Router;
