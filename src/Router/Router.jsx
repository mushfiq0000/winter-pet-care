import { createBrowserRouter } from "react-router";
import mainLayout from "../Layout/mainLayout";
import Home from "../Pages/Home";
import Services from "../Pages/Services";
import MyProfile from "../Pages/MyProfile";
import ViewDetails from "../Pages/ViewDetails";

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
]);

export default router;
