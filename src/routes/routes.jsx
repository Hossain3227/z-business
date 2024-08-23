import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/root";
import Home from "../pages/home";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      children: [
        {
            path: '/',
            element:<Home></Home>

        }
      ]
    },
  ]);


  export default router;