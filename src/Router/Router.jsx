import { createBrowserRouter } from "react-router";
import mainLayout from "../Layout/mainLayout";
import Home from "../Pages/Home";
import Services from "../Pages/Services";
import MyProfile from "../Pages/MyProfile";
import ViewDetails from "../Pages/ViewDetails";
import AuthLayout from "../Layout/AuthLayout";
import Login from "../Pages/Login";
import Register from "../Pages/Register";

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
        Component: Services,
      },
      {
        path:"/profile",
        Component: MyProfile,
      }
    ]

  },
  {
    path:"/view-details/:id",
    Component: ViewDetails,
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
    ]
  },
]);

export default router;
