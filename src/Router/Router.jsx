import { createBrowserRouter } from "react-router";
import Home from "../Pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Home,
  },
]);

export default router;
