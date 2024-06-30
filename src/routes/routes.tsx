import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Login from "../pages/Login";
import AdminDashboard from "../pages/admin/AdminDashboard";
import AddStudent from "../pages/admin/AddStudent";
import Register from "../pages/Register";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },

  //for admin dashboard
  {
    path: "/admin",
    element: <App />,
    children: [
      {
        index: true,
        element: <AdminDashboard />,
      },
      {
        path: "dashboard",
        element: <AdminDashboard />,
      },
      {
        path: "add-student",
        element: <AddStudent />,
      },
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

export default router;
