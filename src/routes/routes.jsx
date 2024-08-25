import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/root";
import Home from "../pages/home";
import Login from "../layout/login";
import Register from "../layout/register";
import Errorpage from "../pages/errorpage";

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
        }
      ]
    },
  ]);


  export default router;