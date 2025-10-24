import { createBrowserRouter } from "react-router";
import mainLayout from "../Layout/mainLayout";
import Home from "../Pages/Home";
import MyProfile from "../Pages/MyProfile";
import ViewDetails from "../Pages/ViewDetails";
import AuthLayout from "../Layout/AuthLayout";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import PrivateRoute from "../Context/PrivateRoute";
import Services from "../Pages/Services";
import Forget from "../Pages/Forget";

const router = createBrowserRouter([
  {
    path: "/",
    Component: mainLayout,
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
