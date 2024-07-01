import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Login from "../pages/Login";

import Register from "../pages/Register";
import { adminRoutes } from "./Admin.routes";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },

  //for admin dashboard
  {
    path: "/admin",
    element: <App />,
    children: adminRoutes,
  },
  //for faculty dashboard
  {
    path: "/faculty",
    element: <App />,
    children: adminRoutes,
  },
  //for admin student
  {
    path: "/student",
    element: <App />,
    children: adminRoutes,
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

export default router;
