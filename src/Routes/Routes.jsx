import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/Root/MainLayout";
import Home from "../Components/Home/Home";
import ErrorPage from "../Layout/Root/ErrorElement/Erropage";

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
    ],
  },
]);

export default Router;
