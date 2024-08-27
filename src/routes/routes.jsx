import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/root";
import Home from "../pages/home";
import Login from "../layout/login";
import Register from "../layout/register";
import Errorpage from "../pages/errorpage";
import Allitems from "../pages/allitems";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement:<Errorpage></Errorpage>,
      children: [
        {
            path: '/',
            element:<Home></Home>,
            loader: () => fetch('http://localhost:5000/items'),

        },
        {
          path:'/login',
          element:<Login></Login>,
        },
        {
          path:'/register',
          element:<Register></Register>,
        },
        {
          path:'/allitems',
          element:<Allitems></Allitems>,
          loader: () => fetch('http://localhost:5000/items')
        }
      ]
    },
  ]);


  export default router;