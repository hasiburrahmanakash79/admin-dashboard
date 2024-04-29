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
      element:<Dashboard/>,
      children:[
        // {
        //   path: '/',
        //   element:
        // }
      ]
    }
  ]);

export default router;