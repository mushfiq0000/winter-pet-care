import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layout/HomeLayout";

const router = createBrowserRouter([
  {
    path: "/",
    Component: HomeLayout,
  },
]);

export default router;
