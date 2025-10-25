import { createBrowserRouter } from "react-router";
import PrivateRoute from "../Context/PrivateRoute";
import AuthLayout from "../Layout/AuthLayout";
import HomeLayout from "../Layout/HomeLayout";
import Forget from "../Pages/Forget";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import MyProfile from "../Pages/MyProfile";
import Register from "../Pages/Register";
import Services from "../Pages/Services";
import ViewDetails from "../Pages/ViewDetails";

const router = createBrowserRouter([
  {
    path: "/",
    Component: HomeLayout,
    children:[
      {
        path:"/",
        Component:Home,
        // loader: () => fetch("/petservice.json")
      },
      {
        path:"/services",
        element: <PrivateRoute>
          <Services></Services>
        </PrivateRoute>,
      },
      {
        path:"/profile",
        element: <PrivateRoute>
          <MyProfile></MyProfile>
        </PrivateRoute>,
      }
    ]

  },
  {
    path:"/view-details/:id",
    element: <PrivateRoute>
          <ViewDetails></ViewDetails>
        </PrivateRoute>,
  },
  {
    path:"/auth",
    Component: AuthLayout,
    children:[
      {
        path:"/auth/login",
        Component: Login,
      },
      {
        path:"/auth/register",
        Component: Register
      },
      {
        path:"/auth/forget",
        Component: Forget,
      }
    ]
  },
]);

export default router;
