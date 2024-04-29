import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../Pages/Dashboard/Dashboard";
// import Main from "../Layouts/Main";

const router = createBrowserRouter([
    // {
    //   path: "/",
    //   element: <Main/>,
    // },
    {
      path: '/',
      element:<Dashboard/>
    }
  ]);

export default router;