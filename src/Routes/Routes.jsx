import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/Root/MainLayout";
import Erropage from "../Layout/Root/ErrorElement/Erropage";
import Home from "../Components/Home/Home";

import SignUp from "../Pages/authentication/Login-Signup/SignUp";
import LogIn from './../Pages/LogIn/LogIn';
// import StuDashboard from "../Dashboard/StudentDashboard/StuDashboard";
// import MyDashboard from './../Dashboard/StudentDashboard/MyDashborad/MyDashboard';
import MyCourses from "../Dashboard/StudentDashboard/MyCourse/MyCourses";
import MyClass from "../Dashboard/StudentDashboard/MyClass/MyClass";
import StuDashboard from './../Dashboard/StudentDashboard/StuDashboard';
import MyDashboard from "../Dashboard/StudentDashboard/MyDashborad/MyDashboard";


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
  {
    path:"/studentDashboard",
    element: <StuDashboard/>,
    children: [
      {
      path:"MyDashboard",
      element:<MyDashboard/>
    },
    {
      path:"MyCourses",
      element: <MyCourses/>
    },
    {
      path:"MyClasses",
      element: <MyClass/>
    },
  ]
  }
]);

export default Router;
