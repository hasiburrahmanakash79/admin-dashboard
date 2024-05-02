import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../Pages/Dashboard/Dashboard";
import DashboardHome from "../Pages/Dashboard/DashboardHome/DashboardHome";
import Profile from "../Pages/Dashboard/Profile/Profile";
// import Main from "../Layouts/Main";

const router = createBrowserRouter([
    // {
    //   path: "/",
    //   element: <Main/>,
    // },
    {
      path: '/',
      element:<Dashboard/>,
      children:[
        {
          path: '/',
          element: <DashboardHome/>
        },
        {
          path: "/dashboard/profile",
          element: <Profile/>
        }
      ]
    }
  ]);

export default router;